import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/googleLogo.jpg";
import SVG from "../../components/SVG";

const SignUp = () => {
  return (
    <div className="flex  flex-row border-16  font-sans text-sm ml-44  ">
      <div className="flex flex-row justify-center items-center py-8  md:h-screen lg:py-0 w-[52%]">
        <div className="w-full rounded-lg  sm:max-w-md xl:p-0 ">
          <h1 className="text-3xl font-bold   text-blue-950">Sign In</h1>
          <div className=" mt-2 ">
            <p className="text-sm  text-gray-400   mb-4 ">
              Enter Your E-mail and Password to Login
            </p>
            <form className="space-y-4 md:space-y-6" action="#">
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

      <div className="w-1/2 h-screen  rounded-bl-[180px] bg-[url('https://s3-alpha-sig.figma.com/img/cc6f/992d/a23f25d992a4db354584463d19897b48?Expires=1701648000&Signature=EXZiA7mu~xV9zsDY5P0C9XruYwZBG1gn-8fvJ7fy8kB37H-UbHIcVnKMFradshnAFXzbRuS62ad~62~UhGECExpl4h2NbC3zahEkFkywk-yMqcIKVNxuZ0~sk7XQSL35yq0UzKQBKzZalf8r2YrPHSwiAe6j4dK3PVwon0IweADzrZNi-z7CgRgxP-8ZHfSKyEcJYZiCT5iwpe8BxFKn8a~nW9jO2fyW121i9CzZgcOzUn9gDksxSCCu~TnwdiFN3yQyShmpMVQs3X~nvG-xwXy5J6W1WGPrTiuykxO1uG9IjHtf8wXj6if1frU8edjfrL~6JJLUDB~iu2w0hmaY6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] ">


      <SVG
            width={64}
            height={64}
            pathName="vector"
            viewBox="0 0 24 24"
            strokeColor="black"
            strokeLinecap="round"
            strokeWidth="1.5"
            fill="black"
          />
      </div>
    </div>
  );
};

export default SignUp;
