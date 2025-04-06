import { JSX } from "react";
import FormComponent from "./FormComponent";

const Login = (): JSX.Element => {
  return (
    <div className="flex gap-5 w-full h-full divide-x-2 divide-gray-600 *:flex *:justify-center *:items-center *:flex-1/2">
      <div>
        <FormComponent isSignUp={false} />
      </div>
      <div>
        <FormComponent isSignUp={true} />
      </div>
    </div>
  );
};

export default Login;
