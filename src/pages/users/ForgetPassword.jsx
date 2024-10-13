import React, { useState } from "react";
import {useDispatch} from 'react-redux'

// slices
// users
import {usersDirectionSetter} from '../../features/users/usersSlice'

const ForgetPassword = () => {
  // hooks
  // dispatch
  const dispatch = useDispatch()
  // states
  // local states
  // is focus
  const [isFocus, setIsFocus] = useState("");
  // email
  const [email, setEmail] = useState("");
  // email error
  const [emailError, setEmailError] = useState("");

  // email validator
  const emailValidator = (email) => {
    const emailPatter =
      /^([a-z\d-\.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    return emailPatter.test(email);
  };

  // form submit handler
  const formSubmitHandler = () => {
    if (!email?.trim()) {
      setEmailError("email address required");
    } else if (!emailValidator(email)) {
      setEmailError("invalid email address");
    } else {
      setEmailError("");
    }

    if (email?.trim() && !emailError) {
      console.log({ email });
    }
  };

  return (
    <div>
      <h3 className="my-3 text-3xl text-green-600">Reset password</h3>
      {/* form */}
      <div className="mt-10">
        {/* email */}
        <div className="mt-2.5">
          <div
            className={`border transition-all ease-in-out duration-150 px-3 py-1.5 relative ${
              emailError
                ? "border-red-500 rounded-md"
                : isFocus === "email" || email
                ? "border-green-600 rounded-md"
                : "border-neutral-400 rounded-sm"
            }`}
          >
            {/* label */}
            <div
              className={`absolute w-max h-max text-sm bg-white  z-10 left-2 px-1 transition-transform ease-in-out duration-300  top-[-.75rem] ${
                emailError
                  ? "text-red-500"
                  : isFocus === "email" || email
                  ? "text-green-600 scale-100"
                  : "scale-0"
              }`}
            >
              <span>Email</span>
            </div>
            {/* placeholder */}
            <div
              className={`absolute w-max h-max text-sm bg-white  z-10 left-2 px-1 top-1/2 -translate-y-1/2 text-neutral-500 ${
                isFocus === "email" || email || emailError
                  ? "scale-0 "
                  : "scale-100"
              }`}
            >
              <span>Email</span>
            </div>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              className="relative z-20 p-0 w-full focus:ring-0 focus:outline-none border-none bg-transparent text-sm"
              type="text"
              onFocus={() => {
                setIsFocus("email");
              }}
              onBlur={() => {
                setIsFocus("");
              }}
            />
          </div>
          {/* email error */}
          <div className="h-[14px]">
            <p className="text-xs text-red-500 text-end">{emailError}</p>
          </div>
        </div>

        {/* button */}
        <button
          className="my-4 w-full flex items-center justify-center py-2 bg-green-600 text-white rounded-md transition-colors ease-in-out duration-150 hover:bg-green-500"
          onClick={formSubmitHandler}
        >
          Reset password
        </button>
        {/* or have an account */}
        <div className="flex items-center justify-center gap-x-3 mt-7">
          <div className="w-[75%] h-[1px] bg-green-600 rounded-full"></div>
          <div className="w-[18px] aspect-square border border-green-600 rounded-full overflow-hidden"></div>
          <div className="w-[75%] h-[1px] bg-green-700 rounded-full"></div>
        </div>
        <div>
          <p className="text-center mt-5 text-sm text-green-600">
            already have an{" "}
            <button className="font-bold hover:underline" onClick={()=>{
              dispatch(usersDirectionSetter("LOGIN"))
            }}>account</button> ?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
