import React from 'react';
import { Card } from './ui/card';
import { Mic, Volume2, FileText } from 'lucide-react';
import { Button } from './ui/button';

interface VoiceInputIndicatorProps {
  isListening: boolean;
  isTranscribing: boolean;
  transcription?: string;
  onStop?: () => void;
  onPlayback?: () => void;
  onViewAsText?: () => void;
}

export function VoiceInputIndicator({
  isListening,
  isTranscribing,
  transcription,
  onStop,
  onPlayback,
  onViewAsText,
}: VoiceInputIndicatorProps) {
  if (!isListening && !isTranscribing && !transcription) {
    return null;
  }

  return (
    <Card className="p-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 mb-4">
      <div className="flex items-start gap-3">
        {isListening && (
          <>
            <div className="relative">
              <Mic className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Listening...</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                Speak clearly into your microphone
              </p>
              <div className="flex gap-1 mt-2">
                <div className="h-6 w-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                <div className="h-6 w-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                <div className="h-6 w-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                <div className="h-6 w-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '450ms' }}></div>
              </div>
            </div>
            <Button
              variant="destructive"
              size="sm"
              onClick={onStop}
            >
              Stop
            </Button>
          </>
        )}

        {isTranscribing && (
          <>
            <div className="animate-spin">
              <Mic className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Transcribing...</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                Converting your speech to text
              </p>
            </div>
          </>
        )}

        {transcription && !isListening && !isTranscribing && (
          <>
            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Voice Input Captured</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300 mt-1 p-2 bg-white dark:bg-gray-900 rounded border border-blue-200 dark:border-blue-800">
                {transcription}
              </p>
              <div className="flex gap-2 mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onPlayback}
                  className="flex items-center gap-1"
                >
                  <Volume2 className="h-4 w-4" />
                  Replay Audio
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onViewAsText}
                  className="flex items-center gap-1"
                >
                  <FileText className="h-4 w-4" />
                  View as Text
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </Card>
  );
}
