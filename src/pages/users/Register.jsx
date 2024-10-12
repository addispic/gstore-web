import React, { useState } from "react";

const Register = () => {
  // states
  // local states
  // is focus
  const [isFocus, setIsFocus] = useState("");
  // username
  const [username, setUsername] = useState("");
  // email
  const [email, setEmail] = useState("");
  // password
  const [password, setPassword] = useState("");
  // confirm password
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div>
      <h3 className="my-3 text-3xl text-green-600">Create account</h3>
      {/* form */}
      <div className="mt-10">
        {/* username */}
        <div>
          <div
            className={`border transition-all ease-in-out duration-150 px-3 py-1.5 relative ${
              !true
                ? "border-red-500 rounded-md"
                : isFocus === "username" || username
                ? "border-green-600 rounded-md"
                : "border-neutral-400 rounded-sm"
            }`}
          >
            {/* label */}
            <div
              className={`absolute w-max h-max text-sm bg-white  z-10 left-2 px-1 transition-transform ease-in-out duration-300  top-[-.75rem] ${
                !true
                  ? "text-red-500"
                  : isFocus === "username" || username
                  ? "text-green-600 scale-100"
                  : "scale-0"
              }`}
            >
              <span>Username</span>
            </div>
            {/* placeholder */}
            <div
              className={`absolute w-max h-max text-sm bg-white  z-10 left-2 px-1 top-1/2 -translate-y-1/2 text-neutral-500 ${
                isFocus === "username" || username ? "scale-0 " : "scale-100"
              }`}
            >
              <span>Username</span>
            </div>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="relative z-20 p-0 w-full focus:ring-0 focus:outline-none border-none bg-transparent text-sm"
              type="text"
              onFocus={() => {
                setIsFocus("username");
              }}
              onBlur={() => {
                setIsFocus("");
              }}
            />
          </div>
          {/* username error */}
          <div className="h-[14px]">
            <p className="text-xs text-red-500 text-end"></p>
          </div>
        </div>
        {/* email */}
        <div className="mt-2.5">
          <div
            className={`border transition-all ease-in-out duration-150 px-3 py-1.5 relative ${
              !true
                ? "border-red-500 rounded-md"
                : isFocus === "email" || email
                ? "border-green-600 rounded-md"
                : "border-neutral-400 rounded-sm"
            }`}
          >
            {/* label */}
            <div
              className={`absolute w-max h-max text-sm bg-white  z-10 left-2 px-1 transition-transform ease-in-out duration-300  top-[-.75rem] ${
                !true
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
                isFocus === "email" || email ? "scale-0 " : "scale-100"
              }`}
            >
              <span>Email</span>
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <p className="text-xs text-red-500 text-end"></p>
          </div>
        </div>
        {/* password */}
        <div className="mt-2.5">
          <div
            className={`border transition-all ease-in-out duration-150 px-3 py-1.5 relative ${
              !true
                ? "border-red-500 rounded-md"
                : isFocus === "password" || password
                ? "border-green-600 rounded-md"
                : "border-neutral-400 rounded-sm"
            }`}
          >
            {/* label */}
            <div
              className={`absolute w-max h-max text-sm bg-white  z-10 left-2 px-1 transition-transform ease-in-out duration-300  top-[-.75rem] ${
                !true
                  ? "text-red-500"
                  : isFocus === "password" || password
                  ? "text-green-600 scale-100"
                  : "scale-0"
              }`}
            >
              <span>Password</span>
            </div>
            {/* placeholder */}
            <div
              className={`absolute w-max h-max text-sm bg-white  z-10 left-2 px-1 top-1/2 -translate-y-1/2 text-neutral-500 ${
                isFocus === "password" || password ? "scale-0 " : "scale-100"
              }`}
            >
              <span>Password</span>
            </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="relative z-20 p-0 w-full focus:ring-0 focus:outline-none border-none bg-transparent text-sm"
              type="text"
              onFocus={() => {
                setIsFocus("password");
              }}
              onBlur={() => {
                setIsFocus("");
              }}
            />
          </div>
          {/* password error */}
          <div className="h-[14px]">
            <p className="text-xs text-red-500 text-end"></p>
          </div>
        </div>
        {/* confirm password */}
        <div className="mt-2.5">
          <div
            className={`border  transition-all ease-in-out duration-150 px-3 py-1.5 relative ${
              !true
                ? "border-red-500 rounded-md"
                : isFocus === "confirm-password" || confirmPassword
                ? "border-green-600 rounded-md"
                : "border-neutral-400 rounded-sm"
            }`}
          >
            {/* label */}
            <div
              className={`absolute w-max h-max text-sm bg-white  z-10 left-2 px-1 transition-transform ease-in-out duration-300  top-[-.75rem] ${
                !true
                  ? "text-red-500"
                  : isFocus === "confirm-password" || confirmPassword
                  ? "text-green-600 scale-100"
                  : "scale-0"
              }`}
            >
              <span>Confirm password</span>
            </div>
            {/* placeholder */}
            <div
              className={`absolute w-max h-max text-sm bg-white  z-10 left-2 px-1 top-1/2 -translate-y-1/2 text-neutral-500 ${
                isFocus === "confirm-password" || confirmPassword
                  ? "scale-0 "
                  : "scale-100"
              }`}
            >
              <span>Confirm password</span>
            </div>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="relative z-20 p-0 w-full focus:ring-0 focus:outline-none border-none bg-transparent text-sm"
              type="text"
              onFocus={() => {
                setIsFocus("confirm-password");
              }}
              onBlur={() => {
                setIsFocus("");
              }}
            />
          </div>
          {/* confirm password error */}
          <div className="h-[14px]">
            <p className="text-xs text-red-500 text-end"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
