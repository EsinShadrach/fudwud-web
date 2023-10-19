"use client";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { PencilIcon, StarIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import BgBackground from "~/utils/bg-bg";
import BgText from "~/utils/bg-text";
import { PrimaryBg } from "~/utils/primary-bg";
import PrimaryBorder from "~/utils/primary-border";

export function WriteReviewButton() {
  const [text, setText] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
  }
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  function openDialog() {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }
  function closeDialog() {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  }

  function handleBackdropClick(event: React.MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) {
      closeDialog();
    }
  }
  return (
    <>
      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        className="w-full max-w-lg px-2 bg-transparent backdrop:cursor-pointer rounded-md backdrop:bg-black/20 text-inherit focus:outline-none"
      >
        <BgBackground className="w-full max-w-lg p-2 cursor-auto rounded-md space-y-3">
          <div className="flex items-center justify-center">
            <BgText className="mx-auto text-lg font-semibold sm:text-xl text-opacity-80">
              Write a Review
            </BgText>
          </div>
          <div className="flex justify-center gap-3">
            <StarIcon className="w-6 h-6" />
            <StarIcon className="w-6 h-6" />
            <StarIcon className="w-6 h-6" />
            <StarIconOutline className="w-6 h-6" />
            <StarIconOutline className="w-6 h-6" />
          </div>
          <PrimaryBorder
            className={`border transition-all duration-300 rounded-md overflow-hidden ${"border-opacity-100"}`}
          >
            <textarea
              value={text}
              rows={10}
              onChange={handleChange}
              className="w-full p-3 resize-none focus:outline-none"
            />
          </PrimaryBorder>
          <button className="w-full transition-all duration-300 active:scale-95 rounded-md">
            <PrimaryBg className="w-full py-1.5 transition-all duration-300 bg-opacity-20 hover:bg-opacity-30 rounded-md">
              Submit
            </PrimaryBg>
          </button>
        </BgBackground>
      </dialog>
      <button
        onClick={openDialog}
        className="active:scale-95 group transition-all duration-300 will-change-transform bg-inherit"
      >
        <PrimaryBg className="flex items-center p-2 rounded-md hover:bg-opacity-20 gap-3 bg-opacity-10 transition-all duration-300 group-focus:bg-opacity-20">
          <PencilIcon className="w-6 h-6" />
          <div className="hidden sm:block">Write a review</div>
        </PrimaryBg>
      </button>
    </>
  );
}
