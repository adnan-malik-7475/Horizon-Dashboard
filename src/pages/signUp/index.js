import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/googleLogo.jpg";

const SignUp = () => {
  return (
    <div className="flex  flex-row border-16  font-sans text-sm ml-44 ">
      <div className="flex flex-row justify-center items-center py-8  md:h-screen lg:py-0 w-1/2 ">
        <div className="w-full rounded-lg  sm:max-w-md xl:p-0 ">
          <h1 className="text-3xl font-bold   text-blue-950">Sign In</h1>
          <div className=" mt-2 ">
            <p className="text-sm  text-gray-400   mb-4 ">
              Enter Your E-mail and Password to Login
            </p>
            <form className="space-y-4 md:space-y-8" action="#">
              <div>
                <button
                  type="button"
                  className="bg-slate-100 rounded-2xl w-96 p-2.5 mt-4 h-12 z-200  hover:bg-gray-300 "
                >
                  <div className="flex flex-row justify-center ">
                    <img src={logo} className=" bg-white" />{" "}
                    <p className="ml-4"> Continue with Google</p>
                  </div>{" "}
                </button>
              </div>
              <div className="flex flex-row">
                <hr className="w-40 mt-[10px]" />
                <p className="ml-4">OR</p>
                <hr className="w-40 ml-4 mt-[10px] " />
              </div>
              <div className="flex flex-col">
                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-white rounded-2xl w-96 p-2.5 h-12  border border-gray-300 z-200 hover:bg-slate-50 "
                  placeholder="malixspam123@gmail.com"
                />
              </div>
              <div className="flex flex-col">
                <label>Password*</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Min 8 Characters "
                  className="bg-white rounded-2xl w-96 p-2.5 h-12  border border-gray-300 z-200 hover:bg-slate-50 "
                />
              </div>

              <div className=" flex flex-row justify-between">
                <div className="flex flex-row">
                  <input type="checkbox"></input>
                  <p className="ml-2 text-sm">Keep me logged In</p>
                </div>

                <div>
                  <Link to="/forgot">
                    {" "}
                    <button className="text-sm font-medium text-primary-600  hover:underline dark:text-primary-500  mr-16 ">
                      Forgot password?
                    </button>
                  </Link>
                </div>
              </div>

              <Link to="/mainDashboard">
                <button
                  type="submit"
                  className=" w-96 h-10 rounded-xl text-white bg-black  mt-4 "
                >
                  <p> Sign in</p>
                </button>
              </Link>

              <p className="text-md  text-black">
                Not registered yet?
                <Link to="/register">
                  {" "}
                  <button className="text-md font-bold">
                    Create An Account
                  </button>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
