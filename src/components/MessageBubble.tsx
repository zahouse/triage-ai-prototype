import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Volume2 } from "lucide-react";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  confidence?: "low" | "medium" | "high";
  reasoning?: string;
  timestamp: Date;
  versions?: string[];
  isEdited?: boolean;
}

interface MessageBubbleProps {
  message: Message;
  onTTSToggle: () => void;
  accessibilitySettings: {
    highContrast: boolean;
    largeFonts: boolean;
    screenReaderMode: boolean;
    simpleEnglish: boolean;
    ttsEnabled: boolean;
  };
}

export function MessageBubble({
  message,
  onTTSToggle,
  accessibilitySettings,
}: MessageBubbleProps) {
  const bubbleClass = message.isUser
    ? "ml-auto bg-primary text-primary-foreground"
    : "mr-auto bg-card border";

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Format content with line breaks and preserve formatting
  const formatContent = (content: string) => {
    // Convert markdown-style formatting to HTML
    let formatted = content
      // Bold: **text** or __text__
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/__(.+?)__/g, '<strong>$1</strong>')
      // Italic: *text* or _text_
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/_(.+?)_/g, '<em>$1</em>')
      // Code: `text`
      .replace(/`(.+?)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-sm">$1</code>');
    
    // Split by line breaks and create elements
    return formatted.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        <span dangerouslySetInnerHTML={{ __html: line }} />
        {index < formatted.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div
      className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
    >
      <Card className={`max-w-[80%] ${bubbleClass}`}>
        <CardContent className="p-4">
          <div className="space-y-3">
            {/* Message Content */}
            <div className="space-y-2">
              <p
                className={
                  accessibilitySettings.largeFonts
                    ? "text-lg"
                    : ""
                }
              >
                {formatContent(message.content)}
              </p>

              {message.isEdited && (
                <span className="text-xs text-muted-foreground italic">
                  (edited)
                </span>
              )}
            </div>

            {/* Message Actions */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                {formatTime(message.timestamp)}
              </span>

              {!message.isUser && (
                <div className="flex gap-1">
                  {accessibilitySettings.ttsEnabled && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onTTSToggle}
                      aria-label="Read message aloud"
                      className="h-8 w-8 p-0"
                    >
                      <Volume2 className="h-3 w-3" />
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}