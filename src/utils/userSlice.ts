import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserData = {
  avatar: string;
  blocked: string[]; // make it an array of strings (not just [])
  email: string;
  id: string;
  username: string;
};
type UserState = {
  currentUser: UserData | null;
};

const initialState: UserState = {
  currentUser: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserData>) => {
      state.currentUser = action.payload;
    },
    removeUser: (state) => {
      state.currentUser = null;
    },
  },
});
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
