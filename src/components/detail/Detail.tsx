import { JSX } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const Detail = (): JSX.Element => {
  return (
    <div className="w-1/5 border-none space-y-10">
      <div className="flex flex-col items-center gap-2">
        <BiSolidUserCircle size={90} />
        <span className="text-xl font-medium">Ashok kumar</span>
        <span className="tracking-wide text-sm text-gray-400 font-medium">
          Grateful for sunrise and sunset🌄
        </span>
      </div>
      <div className="*:flex *:justify-between *:items-center flex flex-col gap-5">
        <div>
          <span>Chat settings</span>
          <FaAngleUp size={20} className="bg-gray-600 rounded-full p-1.5" />
        </div>
        <div>
          <span>Privacy & help</span>
          <FaAngleUp size={20} className="bg-gray-600 rounded-full p-1.5" />
        </div>
        <div>
          <span>Shared Photos</span>{" "}
          <FaAngleUp size={20} className="bg-gray-600 rounded-full p-1.5" />
        </div>
        <div>
          <span>Shared files</span>{" "}
          <FaAngleUp size={20} className="bg-gray-600 rounded-full p-1.5" />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <button className="bg-[rgba(255,0,0,0.40)] p-2 rounded-lg ">
          Block User
        </button>
        <button className="bg-[rgba(0,32,255,0.45)] p-2 rounded-lg">
          Log out
        </button>
      </div>
    </div>
  );
};

export default Detail;
