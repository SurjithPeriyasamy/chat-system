import { JSX } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { IoVideocam } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { FaEdit } from "react-icons/fa";
import { useAppSelector } from "../../hooks/reduxType";

const UserInfo = (): JSX.Element => {
  const { currentUser } = useAppSelector((store) => store.user);
  const { username, avatar } = currentUser;
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        {currentUser ? (
          <img
            src={avatar}
            alt="userProfile"
            className=" rounded-full size-12"
          />
        ) : (
          <BiSolidUserCircle size={60} />
        )}
        <span className="font-bold text-lg capitalize">{username}</span>
      </div>
      <div className="flex gap-4 items-center justify-between">
        <SlOptions size={23} />
        <IoVideocam size={23} />
        <FaEdit size={20} />
      </div>
    </div>
  );
};

export default UserInfo;
