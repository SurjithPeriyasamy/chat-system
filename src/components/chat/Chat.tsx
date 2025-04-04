import React, { JSX, useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { BiSolidUserCircle } from "react-icons/bi";
import { IoVideocam } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";
import { AiFillPicture } from "react-icons/ai";
import { FaCamera } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";

const Chat = (): JSX.Element => {
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const handleEmojiClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    setIsEmojiOpen(false);
  };

  const endRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    endRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const messages = [
    { user: "me", text: "lorem50kdkvlkdvkfkdfkdl", time: "1min ago" },
    { user: "other", text: "hi", time: "3min ago" },
    { user: "me", text: "lorem50kdkvlkdvkfkdfkdl", time: "1min ago" },
    { user: "other", text: "hi", time: "1min ago" },
    { user: "me", text: "lorem50kdkvlkdvkfkdfkdl", time: "1min ago" },
    { user: "other", text: "hi", time: "1min ago" },
    { user: "me", text: "lorem50kdkvlkdvkfkdfkdl", time: "1min ago" },
    { user: "other", text: "hi", time: "1min ago" },
    { user: "me", text: "lorem50kdkvlkdvkfkdfkdl", time: "1min ago" },
    { user: "other", text: "hi", time: "1min ago" },
  ];
  const buttonRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).closest(".attachment-toggle")
      ) {
        setIsEmojiOpen(false);
      }
    };

    if (isEmojiOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isEmojiOpen]);
  return (
    <div className="w-1/2 py-2.5 px-1.5 relative  flex flex-col">
      <div className="flex items-center justify-between border-b border-b-slate-500 pb-2">
        <div className="flex items-center gap-4">
          <BiSolidUserCircle size={50} />
          <div className="flex flex-col font-medium">
            <span className="">Ashok kumar</span>
            <span className="text-gray-400 tracking-wide text-sm">
              Grateful for sunrise and sunset🌄
            </span>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <IoCall size={20} />
          <IoVideocam size={20} />
          <IoIosInformationCircle size={20} />
        </div>
      </div>
      <div className="h-full overflow-y-scroll p-2 flex flex-col gap-3 border-b border-b-slate-500 pb-2">
        {messages.map((message) => (
          <div
            className={`${
              message.user === "me" ? "place-self-end " : "text-left"
            } `}
          >
            <p
              className={`rounded-lg p-3 w-fit ${
                message.user === "me" ? " bg-blue-600" : " bg-slate-600"
              }`}
            >
              {message.text}
            </p>
            <span className="text-xs text-slate-400">{message.time}</span>
          </div>
        ))}
        <div ref={endRef}></div>
      </div>
      <div className="flex justify-around items-center w-full pr-2 pt-2">
        <AiFillPicture size={20} />
        <FaCamera size={20} />
        <MdKeyboardVoice size={20} />

        <input
          type="text"
          placeholder="Type a message"
          className="bg-gray-700 w-3/5 py-2 px-3 rounded-lg outline-none"
        />
        <div className="attachment-toggle">
          <MdEmojiEmotions
            className="cursor-pointer"
            size={23}
            onClick={() => setIsEmojiOpen((prev) => !prev)}
          />
          <div ref={buttonRef} className="absolute bottom-12 right-10">
            <EmojiPicker
              height={400}
              width={300}
              open={isEmojiOpen}
              onEmojiClick={handleEmojiClick}
            />
          </div>
        </div>
        <button className="bg-blue-500 rounded-lg px-3 py-2">Send</button>
      </div>
    </div>
  );
};

export default Chat;
