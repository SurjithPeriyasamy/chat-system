import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { JSX, useEffect, useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { db } from "../../lib/firebase";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/appStore";
import { UserData } from "../../utils/userSlice";

type ChatItem = {
  recieverId: string;
  lastMessage: string;
  updatedAt: number;
  user: {
    id: string;
    username: string;
    avatar?: string;
    email?: string;
  };
};
const ChatList = (): JSX.Element => {
  const { currentUser } = useSelector((store: RootState) => store.user);
  const [chats, setChats] = useState<ChatItem[]>([]);
  useEffect(() => {
    if (!currentUser) return;
    const unSub = onSnapshot(
      doc(db, "userchats", (currentUser as UserData).id),
      async (res) => {
        const items = res?.data()?.chats;

        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.recieverId);
          const userDocSnap = await getDoc(userDocRef);
          const user = userDocSnap.data();
          return { ...item, user };
        });

        const chatData = await Promise.all(promises);

        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
        console.log("Current data: ", res.data());
      }
    );
    return unSub;
  }, [currentUser?.id]);
  console.log(chats);

  return (
    <div className="flex flex-col gap-3">
      {chats.map((chat) => (
        <div className="flex items-center gap-4 space-y-1 border-b border-b-gray-600">
          {chat.user.avatar ? (
            <img
              src={chat.user.avatar}
              alt="userProfile"
              className=" rounded-full size-10"
            />
          ) : (
            <BiSolidUserCircle size={60} />
          )}
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
