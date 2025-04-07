import List from "./components/list/List";
import Detail from "./components/detail/Detail";
import Chat from "./components/chat/Chat";
import { useEffect, useState } from "react";
import { Outlet, RouterProvider, useNavigate } from "react-router-dom";
import { appRouter } from "./utils/appRouter.ts";
import { ToastContainer } from "react-toastify";
import { auth } from "./lib/firebase.ts";
import { onAuthStateChanged } from "firebase/auth/web-extension";
import { UserType, useUserStore } from "./utils/userStore.ts";
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

  const navigate = useNavigate();
  const { currentUser, isLoading, fetchUserInfo } = useUserStore(
    (state) => state
  );
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        if (currentUser) {
          navigate("/");
        }
        fetchUserInfo(user.uid, navigate);

        // ...
      } else {
        // User is signed out
        // ...
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [fetchUserInfo]);
  return (
    <div className="h-[90vh] w-[90vw] bg-[rgb(17,25,40,0.75)] rounded-lg">
      {isLoading ? <div className="text-xl">Loading......</div> : <Outlet />}
      <ToastContainer />
    </div>
  );
}

export default App;
