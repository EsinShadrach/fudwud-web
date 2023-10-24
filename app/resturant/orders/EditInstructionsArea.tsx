"use client";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, useState } from "react";
import BgText from "~/utils/bg-text";
import { PrimaryBg } from "~/utils/primary-bg";
import PrimaryBorder from "~/utils/primary-border";
import { AutoResizableTextArea } from "../[id]/menu/[name]/AutoResizableTextArea";

export function EditInstructionsArea({ content }: { content: string }) {
  const [text, setText] = useState(content);
  const [disabled, setDisabled] = useState(true);
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
  }

  function handleToggle() {
    setDisabled((prev) => !prev);
  }
  return (
    <div className="w-full max-w-md mx-auto mt-3 space-y-2">
      <div className="flex items-center justify-between">
        <small>Edit Cooking Instructions</small>
        <button onClick={handleToggle} className="rounded-full">
          <PrimaryBg className="p-1.5 rounded-full bg-opacity-0 active:scale-95 hover:bg-opacity-10 transition-all duration-300">
            <PencilSquareIcon className="w-5 h-5" />
          </PrimaryBg>
        </button>
      </div>
      <PrimaryBorder
        className={` overflow-hidden transition-all duration-300 border-2 rounded-md pt-1.5 ${
          disabled ? "border-opacity-5" : "border-opacity-100"
        }`}
      >
        <BgText className="text-opacity-90">
          <AutoResizableTextArea
            disabled={disabled}
            value={text}
            onChange={handleChange}
          />
        </BgText>
      </PrimaryBorder>
    </div>
  );
}
