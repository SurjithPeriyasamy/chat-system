import { JSX } from "react";
import UserInfo from "./UserInfo";
import ChatList from "./ChatList";
import Search from "./Search";

const List = (): JSX.Element => {
  return (
    <div className="w-1/4 flex flex-col gap-5">
      <UserInfo />
      <Search />
      <ChatList />
    </div>
  );
};

export default List;
