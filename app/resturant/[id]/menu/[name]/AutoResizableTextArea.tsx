import { useEffect, useRef, useState } from "react";

interface AutoResizableTextAreaProps {
  placeholder?: string;
  textContent?: string;
  disabled?: boolean;
}

export function AutoResizableTextArea({
  placeholder,
  textContent,
  disabled,
}: AutoResizableTextAreaProps) {
  const [text, setText] = useState<string>(textContent ?? "");
  const height = 36;

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [text]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <textarea
      className="w-full px-2 overflow-y-hidden resize-none focus:outline-none disabled:bg-transparent"
      disabled={disabled}
      placeholder={placeholder}
      ref={textAreaRef}
      rows={1}
      style={{ height: `${height}px` }}
      value={text}
      onChange={handleChange}
    />
  );
}
