import { useState } from "react";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData?.email || !formData?.password) {
      return setErrorMessage("Please fill out all fields");
    }

    try {
      setIsLoading(true);
      setErrorMessage(null);

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        setIsLoading(false);
        return setErrorMessage(data.message);
      }

      setIsLoading(false);

      if (res.ok) {
        navigate("/");
      }
    } catch (err) {
      setErrorMessage(err.message);
      setIsLoading(false);
    }
  };

  console.log(isLoading);

  return (
    <div className="min-h-[80vh]  mt-20">
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
            This is a demo project. You can sing in with your email and password
            or with google
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="Enter your email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Enter a strong password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              className="mt-4"
              disabled={isLoading}
            >
              {!isLoading ? (
                "Sing In"
              ) : (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-4">
            <span>Dont Have an account?</span>
            <Link to="/sign-up" className="text-blue-500">
              Sing Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-4" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
