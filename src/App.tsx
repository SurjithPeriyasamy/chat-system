import List from "./components/list/List";
import Detail from "./components/detail/Detail";
import Chat from "./components/chat/Chat";
import { useEffect, useState } from "react";

function App() {
  //   const [online, setOnline] = useState(navigator.onLine);
  //   console.log(navigator);

  // useEffect(() => {
  //     const updateStatus = () => {
  //       if (!navigator.onLine || document.hidden) {
  //         setOnline(false);
  //         console.log("Offline or hidden");
  //       } else {
  //         setOnline(true);
  //         console.log("Online and visible");
  //       }
  //     };

  //     window.addEventListener("online", updateStatus);
  //     window.addEventListener("offline", updateStatus);
  //     document.addEventListener("visibilitychange", updateStatus);

  //     updateStatus();
  //     const handleUnload = () => {
  //       alert("hello"); // Notify backend before closing
  //     };

  //     window.addEventListener("beforeunload", handleUnload);
  //     return () => {
  //       window.removeEventListener("online", updateStatus);
  //       window.removeEventListener("offline", updateStatus);
  //       document.removeEventListener("visibilitychange", updateStatus);
  //     };
  //   }, []);

  return (
    <div className="flex p-3 gap-5 h-[90vh] w-[90vw] bg-[rgb(17,25,40,0.75)] rounded-lg *:border-r-gray-600 *:border-r *:p-2">
      <List />
      <Chat />
      <Detail />
    </div>
  );
}

export default App;
