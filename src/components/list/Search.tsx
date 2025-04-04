import { JSX, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Search = (): JSX.Element => {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  return (
    <div className="flex justify-between items-center *:bg-gray-800">
      <div className="rounded-xl w-4/5 flex items-center px-3 py-1 gap-2">
        <IoSearch />
        <input
          type="text"
          name="search"
          className="border-none placeholder:text-gray-400 placeholder:text-sm w-full outline-none p-1"
          placeholder="Search"
        />
      </div>
      <button
        onClick={() => setIsAddUserOpen((prev) => !prev)}
        className="py-2 px-3 rounded-lg cursor-pointer"
      >
        {isAddUserOpen ? <FaMinus size={15} /> : <FaPlus size={15} />}
      </button>
    </div>
  );
};

export default Search;
