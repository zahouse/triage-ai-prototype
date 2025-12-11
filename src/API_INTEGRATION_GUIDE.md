# OpenAI ChatGPT API Integration Guide

## Overview
Your AI assistant prototype is now connected to OpenAI's ChatGPT API (using the `gpt-4o-mini` model). The integration is secure, with your API key stored safely in Supabase environment variables.

## Architecture

```
Frontend (React) → Supabase Edge Function → OpenAI API
```

**Security**: Your API key never touches the frontend - it stays secure on the server side.

## Features Implemented

### 1. **Real ChatGPT Responses**
- Uses GPT-4o-mini for cost-efficient, high-quality responses
- Maintains conversation context across multiple messages
- Respects your accessibility settings (simple English, strict scope, etc.)

### 2. **Accessibility Integration**
The system prompt adapts based on your settings:
- **Simple English**: Uses plain language, avoids jargon
- **Strict Scope**: Answers only what you ask, no extras
- **Screen Reader Mode**: Formats responses for text-to-speech

### 3. **Confidence Meter**
Automatically calculates confidence based on:
- Response completion status
- Uncertainty language ("might", "possibly")
- Explicit uncertainty statements

### 4. **Bias Detection**
Detects potential issues like:
- Absolute language ("always", "never", "everyone")
- Stereotyping patterns
- Overgeneralizations

### 5. **Transparency**
- Every response includes reasoning about how it was generated
- Loading states show when AI is thinking
- Error messages explain what went wrong

## Customization Options

### Changing the AI Model

In `/supabase/functions/server/index.tsx`, line 62:
```typescript
model: 'gpt-4o-mini', // Change to 'gpt-4o' for more powerful responses
```

Available models:
- `gpt-4o-mini` - Fast, cost-effective (recommended for prototyping)
- `gpt-4o` - Most capable, higher cost
- `gpt-3.5-turbo` - Legacy model, lower cost

### Adjusting Response Length

Line 64:
```typescript
max_tokens: 1000, // Increase for longer responses (costs more)
```

### Modifying Temperature (Creativity)

Line 63:
```typescript
temperature: 0.7, // 0 = focused, 1 = creative
```

### Customizing System Prompt

Edit the `buildSystemPrompt()` function (lines 96-117) to change how the AI behaves.

Example additions:
```typescript
if (settings.medicalContext) {
  prompt += ' Provide health information but always recommend consulting a healthcare professional.';
}
```

### Enhancing Bias Detection

Edit the `detectBias()` function (lines 147-186) to add more detection patterns:
```typescript
const sensitiveTopics = ['politics', 'religion', 'race'];
const hasSensitiveTopic = sensitiveTopics.some(topic => 
  lowerContent.includes(topic)
);
```

## API Costs

Approximate costs (as of Dec 2024):
- **gpt-4o-mini**: ~$0.15 per 1M input tokens, ~$0.60 per 1M output tokens
- **gpt-4o**: ~$5.00 per 1M input tokens, ~$15.00 per 1M output tokens

With 1000 max_tokens and gpt-4o-mini, each conversation costs less than $0.01.

## Error Handling

The system handles:
- **No API key**: Shows clear error message
- **Network issues**: Displays fallback error message in chat
- **API errors**: Logs details for debugging, shows user-friendly message
- **Rate limits**: Catches and displays OpenAI rate limit errors

## Testing

Test different settings:
1. Enable "Simple English" in accessibility settings → Ask a complex question
2. Enable "Strict Scope" → Ask a broad question, see focused response
3. Ask about stereotypes → See bias detection in action
4. Try long conversations → See confidence levels adjust

## Future Enhancements

### Add Streaming Responses
Show responses as they're generated (better UX for long responses)

### Implement Token Counting
Track API usage and costs in real-time

### Add Conversation History
Store conversations in Supabase database

### Multi-Modal Support
Add image understanding with GPT-4 Vision

### Voice Integration
Connect Web Speech API for real voice input/output

## Troubleshooting

### "OpenAI API key not configured"
- Verify your API key is entered in the environment variables
- Check it starts with `sk-`

### Rate Limit Errors
- Add delays between requests
- Reduce max_tokens
- Upgrade OpenAI plan

### High Costs
- Switch to gpt-4o-mini
- Reduce max_tokens
- Add rate limiting on the server

### Poor Response Quality
- Increase temperature for more creative responses
- Switch to gpt-4o for better reasoning
- Improve system prompt with more specific instructions

## Security Notes

⚠️ **Important Reminders**:
- Never commit API keys to version control
- Figma Make is for prototyping, not production
- Don't collect sensitive user data
- Monitor API usage regularly

## Support

For OpenAI API issues:
- API Documentation: https://platform.openai.com/docs
- API Status: https://status.openai.com
- Community Forum: https://community.openai.com

For Figma Make questions:
- Check Supabase logs for server errors
- Use browser console for frontend debugging
