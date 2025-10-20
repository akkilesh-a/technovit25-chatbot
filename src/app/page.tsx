"use client";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  PromptInput,
  PromptInputBody,
  type PromptInputMessage,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputFooter,
} from "@/components/ai-elements/prompt-input";
import { Message, MessageContent } from "@/components/ai-elements/message";
import { Response } from "@/components/ai-elements/response";
import { Suggestion, Suggestions } from "@/components/ai-elements/suggestion";
import { HeartIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useChat } from "@ai-sdk/react";

const suggestions = [
  "What is TechnoVIT 2025?",
  "Tell me about the events and competitions",
  "How can I register for TechnoVIT?",
  "What is the theme 'Healing with Intelligence'?",
  "Tell me about VIT Chennai",
  "What workshops are available?",
  "Tell me about the organizing team",
  "What are the dates and venue?",
];

const TechnoVITChatbot = () => {
  const { messages, status, sendMessage, error } = useChat({
    onError: (error) => {
      console.error("Chat error:", error);
      toast.error("Failed to get response. Please try again.");
    },
  });

  const [input, setInput] = useState("");
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("technovit-messages");
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        // Note: useChat doesn't have a direct way to set initial messages
        // The messages will be loaded from the API response
      } catch (error) {
        console.error("Error loading messages from localStorage:", error);
      }
    }
  }, []);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("technovit-messages", JSON.stringify(messages));
    }
  }, [messages]);

  // Reset waiting state when streaming starts or when there's an error
  useEffect(() => {
    if (status === "streaming" || error) {
      setIsWaitingForResponse(false);
    }
  }, [status, error]);

  const handleSuggestionClick = (suggestion: string) => {
    setIsWaitingForResponse(true);
    sendMessage({
      role: "user",
      parts: [{ type: "text", text: suggestion }],
    });
  };

  const handleFormSubmit = (
    message: PromptInputMessage,
    e: React.FormEvent
  ) => {
    e.preventDefault();
    if (message.text?.trim()) {
      setIsWaitingForResponse(true);
      sendMessage({
        role: "user",
        parts: [{ type: "text", text: message.text }],
      });
      setInput("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex h-screen flex-col">
      <Conversation>
        <ConversationContent>
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <HeartIcon className="mb-4 h-12 w-12" />
              <h2 className="mb-2 text-xl font-semibold">
                Welcome to TechnoVIT 2025!
              </h2>
              <p className="max-w-md text-muted-foreground">
                Ask me anything about the event, VIT Chennai, or our theme
                "Healing with Intelligence".
              </p>
            </div>
          )}

          {messages.map((message: any) => (
            <Message key={message.id} from={message.role}>
              <MessageContent>
                <Response>
                  {message.parts
                    ?.map((part: any, index: number) =>
                      part.type === "text" ? part.text : ""
                    )
                    .join("") || message.content}
                </Response>
              </MessageContent>
            </Message>
          ))}

          {(status === "streaming" || isWaitingForResponse) && (
            <Message from="assistant">
              <MessageContent>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Thinking...
                  </span>
                </div>
              </MessageContent>
            </Message>
          )}

          {error && (
            <Message from="assistant">
              <MessageContent>
                <div className="rounded-lg border border-destructive bg-destructive/10 p-3">
                  <p className="font-medium text-destructive">Error occurred</p>
                  <p className="text-sm text-destructive">{error.message}</p>
                </div>
              </MessageContent>
            </Message>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      {/* Suggestions */}
      <div className="border-t px-4 py-3">
        <Suggestions>
          {suggestions.map((suggestion) => (
            <Suggestion
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              suggestion={suggestion}
            />
          ))}
        </Suggestions>
      </div>

      {/* Input */}
      <div className="border-t p-4">
        <PromptInput onSubmit={handleFormSubmit}>
          <PromptInputBody>
            <PromptInputTextarea
              value={input}
              onChange={handleInputChange}
              placeholder="Ask me anything about TechnoVIT 2025..."
            />
          </PromptInputBody>
          <PromptInputFooter className="flex justify-end">
            <PromptInputSubmit
              disabled={!input.trim() || status === "streaming"}
            />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </div>
  );
};

export default TechnoVITChatbot;
