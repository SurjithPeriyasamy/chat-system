import { ChangeEvent, FormEvent, JSX, useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { toast } from "react-toastify";

interface Props {
  isSignUp: boolean;
}

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
  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    const file = e.target.files?.[0];
    if (!file) return;

    setAvatar({
      file: file,
      url: URL.createObjectURL(file),
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.warn("hello", { position: "bottom-right", autoClose: 1000 });
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
                  name="file"
                  accept="image/*"
                  id="file"
                  onChange={handleAvatarChange}
                  className="hidden input"
                />
              </div>
            </div>
            <input type="text" placeholder="Username" className="input" />
          </>
        )}
        <input type="text" placeholder="Email" className="input" />
        <input type="text" placeholder="Password" className="input" />
        <button className="bg-blue-600 p-2 rounded-lg">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
    </div>
  );
};
export default FormComponent;
