import { JSX } from "react";
import { BiSolidUserCircle } from "react-icons/bi";

const AddUser = (): JSX.Element => {
  return (
    <div className="absolute z-10 px-5 py-7 bg-[rgb(17,25,40,0.75)] left-1/2 top-1/2 -translate-1/2 rounded-lg flex flex-col items-center gap-9">
      <form className="space-x-2.5">
        <input
          type="text"
          name=""
          id=""
          placeholder="Username"
          className="p-2 placeholder:text-gray-500 placeholder:text-sm bg-gray-400 outline-none rounded-lg"
        />
        <button className="bg-blue-600 p-2 rounded-lg text-sm">Search</button>
      </form>
      <div className="flex gap-5 justify-between w-full">
        <div className="flex items-center gap-2">
          <BiSolidUserCircle size={30} /> <span>Surjith</span>
        </div>
        <button className="bg-blue-600 p-2 rounded-lg text-sm">Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
