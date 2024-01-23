import { useState } from "react";
import { BACKGROUND_IMG } from "../utils/Constants";

import Navbar from "./Navbar";

const Login = () => {
  const [isSignInform, setIsSignInform] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInform(!isSignInform);
  };
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="absolute w-full h-full">
        <img
          src={BACKGROUND_IMG}
          alt="background-img"
          className=" w-screen h-screen object-cover "
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-12  w-full md:w-3/12 text-white flex flex-col rounded-[5px] bg-opacity-80 justify-center"
        >
          <h1 className="text-3xl font-bold my-6">
            {isSignInform ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInform && (
            <input
              type="text"
              placeholder="Full Name "
              className="p-3 my-2 w-full bg-[#333333] rounded-[5px] outline-none"
            />
          )}
          <input
            type="text"
            placeholder="Email"
            className="p-3 my-2 w-full bg-[#333333] rounded-[5px] outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 my-2 w-full bg-[#333333] rounded-[5px] outline-none"
          />
          <button className="p-3 my-7 bg-[#E50914] rounded-[5px] w-full text-center">
            {isSignInform ? "Sign In" : "Sign Up"}
          </button>
          <span className="flex gap-1 ">
            {isSignInform ? (
              <>
                <p className="py-4 font-sans">New to Netflix?</p>
                <button
                  type="button"
                  className="font-bold"
                  onClick={toggleSignInForm}
                >
                  Sign up now.
                </button>
              </>
            ) : (
              <>
                <p className="py-4 font-sans">Already Registered?</p>
                <button
                  type="button"
                  className="font-bold"
                  onClick={toggleSignInForm}
                >
                  Sign In.
                </button>
              </>
            )}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
