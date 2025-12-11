import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-3443125a/health", (c) => {
  return c.json({ status: "ok" });
});

// OpenAI Chat Completion endpoint
app.post("/make-server-3443125a/chat", async (c) => {
  try {
    const { messages, settings } = await c.req.json();

    // Get OpenAI API key from environment
    const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
    
    if (!openaiApiKey) {
      console.error('OpenAI API key not configured in environment variables');
      return c.json({ 
        error: 'OpenAI API key not configured. Please add your API key in the environment variables.' 
      }, 500);
    }

    // Prepare the request to OpenAI
    const openAiMessages = messages.map((msg: any) => ({
      role: msg.isUser ? 'user' : 'assistant',
      content: msg.content,
    }));

    // Add system message based on settings
    const systemMessage = {
      role: 'system',
      content: buildSystemPrompt(settings),
    };

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // Using gpt-4o-mini for cost efficiency
        messages: [systemMessage, ...openAiMessages],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      return c.json({ 
        error: `OpenAI API error: ${errorData.error?.message || 'Unknown error'}` 
      }, response.status);
    }

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    // Calculate confidence based on finish_reason and other factors
    const confidence = calculateConfidence(data.choices[0]);

    // Detect potential bias or limitations
    const biasDetection = detectBias(assistantMessage, settings);

    return c.json({
      content: assistantMessage,
      confidence,
      reasoning: generateReasoning(data, settings),
      biasDetected: biasDetection.detected,
      biasMessage: biasDetection.message,
    });

  } catch (error) {
    console.error('Error in chat endpoint:', error);
    return c.json({ 
      error: `Server error while processing chat request: ${error.message}` 
    }, 500);
  }
});

// Helper function to build system prompt based on accessibility settings
function buildSystemPrompt(settings: any): string {
  let prompt = 'You are a General Triage Assistant for TRAI (Transparent and Responsible AI), an AI system designed with accessibility, transparency, and user safety in mind. Your role is to help users with their questions and requests while maintaining high standards of clarity, honesty, and accessibility.';
  
  // Language instruction
  if (settings.language) {
    const languageMap: Record<string, string> = {
      'en': 'Respond in English.',
      'es': 'Respond in Spanish (Español). Translate all your responses to Spanish.',
      'fr': 'Respond in French (Français). Translate all your responses to French.',
      'de': 'Respond in German (Deutsch). Translate all your responses to German.'
    };
    
    if (languageMap[settings.language]) {
      prompt += ' ' + languageMap[settings.language];
    }
  }
  
  if (settings.simpleEnglish) {
    prompt += ' Use simple, clear language. Avoid jargon and complex terms. Use short sentences.';
  }
  
  if (settings.strictScope) {
    prompt += ' Answer only the specific question asked. Do not provide additional information beyond what was requested.';
  }
  
  if (settings.screenReaderMode) {
    prompt += ' Format your response in a way that is easy to understand when read aloud. Avoid special characters and formatting.';
  }

  prompt += ' Always be honest about your limitations and confidence level.';
  
  return prompt;
}

// Helper function to calculate confidence level
function calculateConfidence(choice: any): 'low' | 'medium' | 'high' {
  // Use finish_reason and other metadata to determine confidence
  if (choice.finish_reason === 'stop') {
    // Check for uncertainty markers in the response
    const content = choice.message.content.toLowerCase();
    if (content.includes('i\'m not sure') || 
        content.includes('i don\'t know') || 
        content.includes('uncertain')) {
      return 'low';
    }
    if (content.includes('might') || 
        content.includes('possibly') || 
        content.includes('perhaps')) {
      return 'medium';
    }
    return 'high';
  } else if (choice.finish_reason === 'length') {
    return 'medium'; // Response was cut off
  }
  return 'low';
}

// Helper function to detect bias or limitations
function detectBias(content: string, settings: any): { detected: boolean; message: string } {
  const lowerContent = content.toLowerCase();
  
  // Check for common bias indicators
  const biasKeywords = [
    'always', 'never', 'all', 'none', 'everyone', 'no one',
    'obviously', 'clearly', 'definitely'
  ];
  
  const hasAbsoluteLanguage = biasKeywords.some(keyword => 
    lowerContent.includes(keyword)
  );
  
  // Check for potential stereotypes or assumptions
  const stereotypePatterns = [
    /typically (men|women|boys|girls)/i,
    /usually (men|women|boys|girls)/i,
    /(men|women) are (better|worse) at/i,
  ];
  
  const hasStereotype = stereotypePatterns.some(pattern => 
    pattern.test(content)
  );
  
  if (hasAbsoluteLanguage) {
    return {
      detected: true,
      message: 'This response uses absolute language (like "always" or "never") which may not account for exceptions or nuance.'
    };
  }
  
  if (hasStereotype) {
    return {
      detected: true,
      message: 'This response may contain stereotypes or generalizations that don\'t apply to all individuals.'
    };
  }
  
  return { detected: false, message: '' };
}

// Helper function to generate reasoning explanation
function generateReasoning(data: any, settings: any): string {
  const choice = data.choices[0];
  const content = choice.message.content;
  const userMessage = data.usage ? `I processed your question using ${data.usage.prompt_tokens} tokens of context. ` : '';
  
  const lang = settings.language || 'en';
  
  let reasoning = '';
  
  // Explain approach based on content characteristics
  const hasNumbers = /\d+/.test(content);
  const hasList = /\d+\.|•|\n-/.test(content);
  const hasSteps = /(first|second|third|then|next|finally)/i.test(content);
  const isShort = content.length < 100;
  
  // Language-specific reasoning templates
  const templates: Record<string, any> = {
    en: {
      readQuestion: 'I read your question carefully. ',
      brokeIntoSteps: 'I broke my answer into simple steps to make it easier to follow. ',
      madeList: 'I made a list to organize the information clearly. ',
      shortAnswer: 'I gave you a short, direct answer. ',
      simpleWords: 'I explained it using simple words. ',
      includedNumbers: 'I included numbers to be exact. ',
      analyzed: 'I analyzed your question and drew from my training data to provide this response. ',
      structuredSteps: 'I structured my answer as a sequence of steps because your question involved a process or procedure. ',
      organizedList: 'I organized the information as a list to make multiple points clear and easy to reference. ',
      conciseAnswer: 'I provided a concise answer since your question had a straightforward answer. ',
      detailedExplanation: 'I provided a detailed explanation to address the complexity of your question. ',
      specificNumbers: 'I included specific numbers or data points where precision was important. ',
      answerComplete: 'My answer is complete.',
      fullResponse: 'The response is complete and addresses your question fully.',
      answerCutShort: 'Warning: My answer was cut short because it got too long. You can ask me to continue.',
      lengthLimit: 'Note: This response reached the length limit and may be incomplete. You can ask me to continue or rephrase your question for a more focused answer.'
    },
    es: {
      readQuestion: 'Leí tu pregunta con cuidado. ',
      brokeIntoSteps: 'Dividí mi respuesta en pasos simples para que sea más fácil de seguir. ',
      madeList: 'Hice una lista para organizar la información claramente. ',
      shortAnswer: 'Te di una respuesta corta y directa. ',
      simpleWords: 'Lo expliqué usando palabras simples. ',
      includedNumbers: 'Incluí números para ser exacto. ',
      analyzed: 'Analicé tu pregunta y extraje de mis datos de entrenamiento para proporcionar esta respuesta. ',
      structuredSteps: 'Estructuré mi respuesta como una secuencia de pasos porque tu pregunta involucraba un proceso o procedimiento. ',
      organizedList: 'Organicé la información como una lista para hacer múltiples puntos claros y fáciles de referencia. ',
      conciseAnswer: 'Proporcioné una respuesta concisa ya que tu pregunta tenía una respuesta directa. ',
      detailedExplanation: 'Proporcioné una explicación detallada para abordar la complejidad de tu pregunta. ',
      specificNumbers: 'Incluí números específicos o puntos de datos donde la precisión era importante. ',
      answerComplete: 'Mi respuesta está completa.',
      fullResponse: 'La respuesta está completa y aborda tu pregunta por completo.',
      answerCutShort: 'Advertencia: Mi respuesta se cortó porque se volvió demasiado larga. Puedes pedirme que continúe.',
      lengthLimit: 'Nota: Esta respuesta alcanzó el límite de longitud y puede estar incompleta. Puedes pedirme que continúe o reformular tu pregunta para una respuesta más enfocada.'
    },
    fr: {
      readQuestion: 'J\'ai lu votre question attentivement. ',
      brokeIntoSteps: 'J\'ai divisé ma réponse en étapes simples pour la rendre plus facile à suivre. ',
      madeList: 'J\'ai fait une liste pour organiser l\'information clairement. ',
      shortAnswer: 'Je vous ai donné une réponse courte et directe. ',
      simpleWords: 'Je l\'ai expliqué en utilisant des mots simples. ',
      includedNumbers: 'J\'ai inclus des nombres pour être exact. ',
      analyzed: 'J\'ai analysé votre question et puisé dans mes données d\'entraînement pour fournir cette réponse. ',
      structuredSteps: 'J\'ai structuré ma réponse comme une séquence d\'étapes car votre question impliquait un processus ou une procédure. ',
      organizedList: 'J\'ai organisé l\'information en liste pour rendre plusieurs points clairs et faciles à référencer. ',
      conciseAnswer: 'J\'ai fourni une réponse concise car votre question avait une réponse simple. ',
      detailedExplanation: 'J\'ai fourni une explication détaillée pour aborder la complexité de votre question. ',
      specificNumbers: 'J\'ai inclus des nombres spécifiques ou des points de données où la précision était importante. ',
      answerComplete: 'Ma réponse est complète.',
      fullResponse: 'La réponse est complète et répond entièrement à votre question.',
      answerCutShort: 'Avertissement : Ma réponse a été coupée car elle est devenue trop longue. Vous pouvez me demander de continuer.',
      lengthLimit: 'Note : Cette réponse a atteint la limite de longueur et peut être incomplète. Vous pouvez me demander de continuer ou reformuler votre question pour une réponse plus ciblée.'
    },
    de: {
      readQuestion: 'Ich habe Ihre Frage sorgfältig gelesen. ',
      brokeIntoSteps: 'Ich habe meine Antwort in einfache Schritte unterteilt, um sie leichter verständlich zu machen. ',
      madeList: 'Ich habe eine Liste erstellt, um die Informationen klar zu organisieren. ',
      shortAnswer: 'Ich habe Ihnen eine kurze, direkte Antwort gegeben. ',
      simpleWords: 'Ich habe es mit einfachen Worten erklärt. ',
      includedNumbers: 'Ich habe Zahlen einbezogen, um genau zu sein. ',
      analyzed: 'Ich habe Ihre Frage analysiert und aus meinen Trainingsdaten geschöpft, um diese Antwort zu geben. ',
      structuredSteps: 'Ich habe meine Antwort als Abfolge von Schritten strukturiert, weil Ihre Frage einen Prozess oder ein Verfahren beinhaltete. ',
      organizedList: 'Ich habe die Informationen als Liste organisiert, um mehrere Punkte klar und leicht nachschlagbar zu machen. ',
      conciseAnswer: 'Ich habe eine prägnante Antwort gegeben, da Ihre Frage eine einfache Antwort hatte. ',
      detailedExplanation: 'Ich habe eine detaillierte Erklärung gegeben, um der Komplexität Ihrer Frage gerecht zu werden. ',
      specificNumbers: 'Ich habe spezifische Zahlen oder Datenpunkte einbezogen, wo Präzision wichtig war. ',
      answerComplete: 'Meine Antwort ist vollständig.',
      fullResponse: 'Die Antwort ist vollständig und beantwortet Ihre Frage vollständig.',
      answerCutShort: 'Warnung: Meine Antwort wurde abgeschnitten, weil sie zu lang wurde. Sie können mich bitten, fortzufahren.',
      lengthLimit: 'Hinweis: Diese Antwort hat die Längenbegrenzung erreicht und ist möglicherweise unvollständig. Sie können mich bitten, fortzufahren oder Ihre Frage umzuformulieren für eine fokussiertere Antwort.'
    }
  };
  
  const t = templates[lang] || templates.en;
  
  if (settings.simpleEnglish) {
    reasoning = t.readQuestion;
    
    if (hasSteps) {
      reasoning += t.brokeIntoSteps;
    } else if (hasList) {
      reasoning += t.madeList;
    } else if (isShort) {
      reasoning += t.shortAnswer;
    } else {
      reasoning += t.simpleWords;
    }
    
    if (hasNumbers) {
      reasoning += t.includedNumbers;
    }
  } else {
    reasoning = t.analyzed;
    
    if (hasSteps) {
      reasoning += t.structuredSteps;
    } else if (hasList) {
      reasoning += t.organizedList;
    } else if (isShort) {
      reasoning += t.conciseAnswer;
    } else {
      reasoning += t.detailedExplanation;
    }
    
    if (hasNumbers) {
      reasoning += t.specificNumbers;
    }
  }
  
  // Add completion status
  if (choice.finish_reason === 'stop') {
    reasoning += settings.simpleEnglish 
      ? t.answerComplete
      : t.fullResponse;
  } else if (choice.finish_reason === 'length') {
    reasoning += settings.simpleEnglish
      ? t.answerCutShort
      : t.lengthLimit;
  }
  
  return reasoning;
}

Deno.serve(app.fetch);