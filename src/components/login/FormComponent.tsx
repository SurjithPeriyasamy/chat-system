import { ChangeEvent, FormEvent, JSX, useActionState, useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { toast } from "react-toastify";
import { auth, db } from "../../lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth/web-extension";
import { doc, setDoc } from "firebase/firestore";
import { upload } from "../../utils/upload";
interface Props {
  isSignUp: boolean;
}
// interface FormState {
//     username:string;
//     password:string;
//     email:string;
//     profileURL:string

// }
const FormComponent = ({ isSignUp }: Props): JSX.Element => {
  const [avatar, setAvatar] = useState<{
    file: {
      lastModified: number;
      name: string;
      size: number;
      type: string;
      webkitRelativePath: string;
    } | null;
    url: string;
  }>({
    file: null,
    url: "",
  });
  const [loading, setLoading] = useState(false);
  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    const file = e.target.files?.[0];
    if (!file) return;

    setAvatar({
      file: file,
      url: URL.createObjectURL(file),
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const { username, password, email } = Object.fromEntries(formData) as {
      username: string;
      password: string;
      email: string;
    };
    console.log(username, email, password);

    if (isSignUp) {
      try {
        setLoading(true);
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log(res);
        const imageUrl = await upload(avatar.file);
        await setDoc(doc(db, "users", res.user.uid), {
          username,
          avatar: imageUrl,
          email,
          id: res.user.uid,
          blocked: [],
        });
        await setDoc(doc(db, "userchats", res.user.uid), {
          chats: [],
        });

        form.reset();
        setLoading(false);
      } catch (error: any) {
        console.log(error);
        setLoading(false);
        toast.error(error.message);
      }
    } else {
      try {
        setLoading(true);
        const res = await signInWithEmailAndPassword(auth, email, password);
        console.log("signin", res);
        setLoading(false);
      } catch (error: any) {
        console.error(error);
        setLoading(false);
        toast.error(error.message);
      }
    }
  };
  return (
    <div className="space-y-5">
      <h2 className="font-bold text-lg">
        {isSignUp ? "Create an account" : "Welcome back,"}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {isSignUp && (
          <>
            <div className="flex gap-2 items-center">
              <div className="size-11">
                {avatar.url ? (
                  <img
                    src={avatar.url}
                    alt="Avatar"
                    className="size-full rounded-full object-fill"
                  />
                ) : (
                  <BiSolidUserCircle className="size-full" />
                )}
              </div>
              <div>
                <label
                  htmlFor="file"
                  className="text-sm underline cursor-pointer"
                >
                  Upload an image
                </label>
                <input
                  type="file"
                  name="profileURL"
                  accept="image/*"
                  id="file"
                  onChange={handleAvatarChange}
                  className="hidden input"
                />
              </div>
            </div>
            <input
              type="text"
              placeholder="Username"
              className="input"
              name="username"
            />
          </>
        )}
        <input type="text" placeholder="Email" className="input" name="email" />
        <input
          type="text"
          placeholder="Password"
          className="input"
          name="password"
        />
        <button
          disabled={loading}
          className={
            (loading && "opacity-40") +
            " bg-blue-600 p-2 rounded-lg cursor-pointer"
          }
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
    </div>
  );
};
export default FormComponent;
