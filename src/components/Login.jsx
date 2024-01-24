import { useRef, useState } from "react";
import { BACKGROUND_IMG } from "../utils/Constants";

import Navbar from "./Navbar";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/FireBase";

const Login = () => {
  const [isSignInform, setIsSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInform(!isSignInform);
  };

  const handleButtonClick = () => {
    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;
    const nameValue = !isSignInform ? name.current?.value : null;

    const message = checkValidData(emailValue, passwordValue, nameValue);
    console.log(message);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInform) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue,
          })
            .then(() => {})
            .catch((error) => {});
        })
        .catch((error) => {
          const errorCode = error.code;
          let errorMessage = error.message;
          if (errorCode === "auth/email-already-in-use") {
            errorMessage = "⚠️  Account Already Exists";
          }
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          let errorMessage = error.message;
          if (errorCode === "auth/invalid-credential") {
            errorMessage = "🔒Incorrect credentials.Try again.";
          }

          setErrorMessage(errorMessage);
        });
    }
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
              ref={name}
              type="text"
              placeholder="Full Name "
              className="p-3 my-2 w-full bg-[#333333] rounded-[5px] outline-none"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="p-3 my-2 w-full bg-[#333333] rounded-[5px] outline-none"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-2 w-full bg-[#333333] rounded-[5px] outline-none"
          />
          <p className="text-red-700 font-bold text-lg  ">{errorMessage}</p>
          <button
            className="p-3 my-7 bg-[#E50914] rounded-[5px] w-full text-center"
            onClick={handleButtonClick}
          >
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
