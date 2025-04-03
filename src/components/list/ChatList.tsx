import { JSX } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
const ChatList = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-3">
      {[...new Array(8)].map((user) => (
        <div className="flex items-center gap-4 space-y-1 border-b border-b-gray-600">
          <BiSolidUserCircle size={50} />
          <div className="flex flex-col gap-1 text-sm font-medium">
            <span>Ashok</span>
            <span className="text-xs">Hi, there!</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
