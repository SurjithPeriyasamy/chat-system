import List from "./components/list/List";
import Detail from "./components/detail/Detail";
import Chat from "./components/chat/Chat";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./utils/appRouter.ts";
import { ToastContainer } from "react-toastify";
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
    <div className="h-[90vh] w-[90vw] bg-[rgb(17,25,40,0.75)] rounded-lg">
      <RouterProvider router={appRouter} />
      <ToastContainer />
    </div>
  );
}

export default App;
