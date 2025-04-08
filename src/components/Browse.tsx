import List from "./list/List";
import Chat from "./chat/Chat";
import Detail from "./detail/Detail";
import { useAppSelector } from "../hooks/reduxType";

const Browse = () => {
  const { currentUser } = useAppSelector((store) => store.user);
  if (!currentUser) return;
  return (
    <div className="*:border-r-gray-600 *:border-r *:p-2 flex p-3 gap-5 h-full w-full">
      <List />
      <Chat />
      <Detail />
    </div>
  );
};

export default Browse;
