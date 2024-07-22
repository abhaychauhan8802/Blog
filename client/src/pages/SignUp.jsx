import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen  mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <div className="font-bold text-4xl dark:text-white select-none">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 mr-1 rounded-lg text-white">
              Blog
            </span>
            Posts
          </div>
          <p className="text-sm mt-5">
            This is a demo project. You can sing up with your email and password
            or with google
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-3">
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Enter your username"
                id="username"
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="text"
                placeholder="Enter your email"
                id="email"
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="text"
                placeholder="Enter a strong password"
                id="password"
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              className="mt-4"
            >
              Sing Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-4">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sing In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
