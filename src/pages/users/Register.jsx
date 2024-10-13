import React, { useState, useEffect } from "react";
import {NavLink, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

// icons
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

// slices
// users
import {
  usersDirectionSetter,
  userRegister,
  isUserRegisteringSelector,
  errorsSelector,
  resetErrors,
  isAuthorizedSelector,
} from "../../features/users/usersSlice";

// components
// user spinner
import UsersSpinner from "./UsersSpinner";

const Register = () => {
  // hooks
  // dispatch
  const dispatch = useDispatch();
  // navigate
  const navigate = useNavigate()
  // states
  // states from slice
  // users slice
  const isUserRegistering = useSelector(isUserRegisteringSelector);
  const errors = useSelector(errorsSelector);
  const isAuthorized = useSelector(isAuthorizedSelector)
  // local states
  // is focus
  const [isFocus, setIsFocus] = useState("");
  // username
  const [username, setUsername] = useState("");
  // username error
  const [usernameError, setUsernameError] = useState("");
  // email
  const [email, setEmail] = useState("");
  // email error
  const [emailError, setEmailError] = useState("");
  // password
  const [password, setPassword] = useState("");
  // is password hide
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  // password error
  const [passwordError, setPasswordError] = useState("");
  // confirm password
  const [confirmPassword, setConfirmPassword] = useState("");
  // is password confirm hide
  const [isPasswordConfirmHide, setIsPasswordConfirmHide] = useState(true);
  // is password confirm error
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  // effect
  useEffect(() => {
    if (errors?.username) {
      setUsernameError(errors?.username);
    }
    if (errors?.email) {
      setEmailError(errors?.email);
    }
    if (errors?.password) {
      setPasswordError(errors?.password);
    }
  }, [errors]);
  useEffect(()=>{
    if(isAuthorized){
      navigate("/")
    }
  },[isAuthorized])

  // email validator
  const emailValidator = (email) => {
    const emailPatter =
      /^([a-z\d-\.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    return emailPatter.test(email);
  };

  // form submit handler
  const formSubmitHandler = () => {
    if (!username?.trim()) {
      setUsernameError("username required");
    } else {
      setUsernameError("");
    }
    if (!email?.trim()) {
      setEmailError("email address required");
    } else if (!emailValidator(email)) {
      setEmailError("invalid email address");
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("password required");
    } else if (password.length < 3) {
      setPasswordError("too short password");
    } else {
      setPasswordError("");
    }

    if (!confirmPassword) {
      setPasswordConfirmError("confirm password required");
    } else if (password && password !== confirmPassword) {
      setPasswordConfirmError("passwords not match");
    } else {
      setPasswordConfirmError("");
    }

    if (
      username?.trim() &&
      email?.trim() &&
      password &&
      confirmPassword &&
      !usernameError &&
      !emailError &&
      !passwordError &&
      !passwordConfirmError
    ) {
      dispatch(userRegister({ username, email, password }));
    }
  };

  if (isUserRegistering) {
    return <UsersSpinner />;
  }

  return (
    <div>
      <h3 className="my-3 text-3xl text-green-600">Create account</h3>
      {/* form */}
      <div className="mt-10">
        {/* username */}
        <div>
          <div
            className={`border transition-all ease-in-out duration-150 px-3 py-1.5 relative ${
              usernameError
                ? "border-red-500 rounded-md"
                : isFocus === "username" || username
                ? "border-green-600 rounded-md"
                : "border-neutral-400 rounded-sm"
            }`}
          >
            {/* label */}
            <div
              className={`absolute w-max h-max text-sm bg-white  z-10 left-2 px-1 transition-transform ease-in-out duration-300  top-[-.75rem] ${
                usernameError
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
                isFocus === "username" || username || usernameError
                  ? "scale-0 "
                  : "scale-100"
              }`}
            >
              <span>Username</span>
            </div>
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setUsernameError("");
              }}
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
            <p className="text-xs text-red-500 text-end">{usernameError}</p>
          </div>
        </div>
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
        {/* password */}
        <div className="mt-2.5">
          <div
            className={`border flex items-center gap-x-3 transition-all ease-in-out duration-150 px-3 py-1.5 relative ${
              passwordError
                ? "border-red-500 rounded-md"
                : isFocus === "password" || password
                ? "border-green-600 rounded-md"
                : "border-neutral-400 rounded-sm"
            }`}
          >
            {/* label */}
            <div
              className={`absolute w-max h-max text-sm bg-white  z-10 left-2 px-1 transition-transform ease-in-out duration-300  top-[-.75rem] ${
                passwordError
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
                isFocus === "password" || password || passwordError
                  ? "scale-0 "
                  : "scale-100"
              }`}
            >
              <span>Password</span>
            </div>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              className="relative flex-grow z-20 p-0 w-full focus:ring-0 focus:outline-none border-none bg-transparent text-sm"
              type={isPasswordHide ? "password" : "text"}
              onFocus={() => {
                setIsFocus("password");
              }}
              onBlur={() => {
                setIsFocus("");
              }}
            />
            <button
              className={`${
                passwordError
                  ? "text-red-500"
                  : isFocus === "password" || password
                  ? "text-green-600"
                  : "text-neutral-400"
              }`}
              onClick={() => {
                setIsPasswordHide(!isPasswordHide);
              }}
            >
              {isPasswordHide ? <GoEyeClosed /> : <GoEye />}
            </button>
          </div>
          {/* password error */}
          <div className="h-[14px]">
            <p className="text-xs text-red-500 text-end">{passwordError}</p>
          </div>
        </div>
        {/* confirm password */}
        <div className="mt-2.5">
          <div
            className={`border flex items-center gap-x-3  transition-all ease-in-out duration-150 px-3 py-1.5 relative ${
              passwordConfirmError
                ? "border-red-500 rounded-md"
                : isFocus === "confirm-password" || confirmPassword
                ? "border-green-600 rounded-md"
                : "border-neutral-400 rounded-sm"
            }`}
          >
            {/* label */}
            <div
              className={`absolute w-max h-max text-sm bg-white  z-10 left-2 px-1 transition-transform ease-in-out duration-300  top-[-.75rem] ${
                passwordConfirmError
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
                isFocus === "confirm-password" ||
                confirmPassword ||
                passwordConfirmError
                  ? "scale-0 "
                  : "scale-100"
              }`}
            >
              <span>Confirm password</span>
            </div>
            <input
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setPasswordConfirmError("");
              }}
              className="relative flex-grow z-20 p-0 w-full focus:ring-0 focus:outline-none border-none bg-transparent text-sm"
              type={isPasswordConfirmHide ? "password" : "text"}
              onFocus={() => {
                setIsFocus("confirm-password");
              }}
              onBlur={() => {
                setIsFocus("");
              }}
            />
            <button
              className={`${
                passwordConfirmError
                  ? "text-red-500"
                  : isFocus === "confirm-password" || confirmPassword
                  ? "text-green-600"
                  : "text-neutral-400"
              }`}
              onClick={() => {
                setIsPasswordConfirmHide(!isPasswordConfirmHide);
              }}
            >
              {isPasswordConfirmHide ? <GoEyeClosed /> : <GoEye />}
            </button>
          </div>
          {/* confirm password error */}
          <div className="h-[14px]">
            <p className="text-xs text-red-500 text-end">
              {passwordConfirmError}
            </p>
          </div>
        </div>
        {/* button */}
        <button
          className="my-4 w-full flex items-center justify-center py-2 bg-green-600 text-white rounded-md transition-colors ease-in-out duration-150 hover:bg-green-500"
          onClick={formSubmitHandler}
        >
          Create account
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
            <button
              className="font-bold hover:underline"
              onClick={() => {
                dispatch(usersDirectionSetter("LOGIN"));
                dispatch(resetErrors());
              }}
            >
              account
            </button>{" "}
            ?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
