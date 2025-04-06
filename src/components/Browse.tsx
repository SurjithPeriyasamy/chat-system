import React from "react";
import List from "./list/List";
import Chat from "./chat/Chat";
import Detail from "./detail/Detail";

const Browse = () => {
  return (
    <div className="*:border-r-gray-600 *:border-r *:p-2 flex p-3 gap-5 h-full w-full">
      <List />
      <Chat />
      <Detail />
    </div>
  );
};

export default Browse;
