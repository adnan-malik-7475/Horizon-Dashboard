import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

const Login = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("data", event);
  };
  return (
    <div className="bg-gray-300 w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-lg">
        <form
          onSubmit={onSubmit}
          className="border border-gray-700 bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h1 className="font-bold text-center mb-3">Log In</h1>

          <Input
            label="User Name"
            name="username"
            id="username"
            placeholder="username"
          />

          <Input
            label="Password"
            name="password"
            id="password"
            placeholder="password"
          />
          <div className=" mt-2 flex items-center justify-between">
            <Button
              type="submit"
              size="medium"
              variant="danger"
              className="w-full "
            >
              Submit
            </Button>
          </div>
          <p className="text-center mt-3">
            If you don't have an account:
            <Link className="text-indigo-700" to={"/Register"}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
