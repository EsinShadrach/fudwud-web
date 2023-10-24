"use client";
import { useEffect, useRef } from "react";

interface AutoResizableTextAreaProps {
  placeholder?: string;
  disabled?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function AutoResizableTextArea({
  placeholder,
  disabled,
  onChange,
  value,
}: AutoResizableTextAreaProps) {
  const height = 36;

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [value]);
  return (
    <textarea
      className="w-full px-2 overflow-y-hidden resize-none focus:outline-none disabled:bg-transparent"
      disabled={disabled}
      placeholder={placeholder}
      ref={textAreaRef}
      rows={1}
      style={{ height: `${height}px` }}
      value={value}
      onChange={onChange}
    />
  );
}
