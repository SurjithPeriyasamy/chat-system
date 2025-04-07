import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "../lib/firebase";
import { NavigateFunction } from "react-router-dom";

export type UserData = {
  avatar: string;
  blocked: string[]; // make it an array of strings (not just [])
  email: string;
  id: string;
  username: string;
};
export type UserType = {
  currentUser: UserData | null;
  isLoading: boolean;
  fetchUserInfo: (uid: string, navigate: NavigateFunction) => Promise<void>;
};

export const useUserStore = create<UserType>((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid, navigate) => {
    if (!uid) return set({ currentUser: null, isLoading: false });
    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({ isLoading: false, currentUser: docSnap.data() as UserData });
        navigate("/");
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        navigate("/login");
        set({ isLoading: false, currentUser: null });
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
      return set({ isLoading: false, currentUser: null });
    }
  },
}));
