import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { auth, db } from "./lib/firebase.ts";
import { onAuthStateChanged } from "firebase/auth/web-extension";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { addUser, UserData } from "./utils/userSlice.ts";
import { RootState } from "./utils/appStore.ts";
import { useAppDispatch, useAppSelector } from "./hooks/reduxType.ts";
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
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAppSelector((store) => store.user);
  const fetchUserInfo = async (uid: string): Promise<void> => {
    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        dispatch(addUser(docSnap.data() as UserData));
        navigate("/");
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
        navigate("/login");
        // set({ isLoading: false, currentUser: null });
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (!currentUser) {
          fetchUserInfo(user?.uid);
        } else {
          navigate("/");
        }
      } else {
        // User is signed out
        navigate("/login");
      }
    });

    return unsubscribe;
  }, [fetchUserInfo]);
  return (
    <div className="h-[90vh] w-[90vw] bg-[rgb(17,25,40,0.75)] rounded-lg">
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default App;
