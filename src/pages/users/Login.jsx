import React, { useState, useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'

// icons
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

// slices
// users 
import {usersDirectionSetter, userLogin, isUserRegisteringSelector, errorsSelector,resetErrors} from '../../features/users/usersSlice'

// components
import UsersSpinner from './UsersSpinner'

const Login = () => {
  // hooks
  // dispatch
  const dispatch = useDispatch()
  // states
  // states from slice
  const isUserRegistering = useSelector(isUserRegisteringSelector)
  const errors = useSelector(errorsSelector)
  // local states
  // is focus
  const [isFocus, setIsFocus] = useState("");
  // username
  const [username, setUsername] = useState("");
  // username error
  const [usernameError, setUsernameError] = useState("");
  // password
  const [password, setPassword] = useState("");
  // is password hide
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  // password error
  const [passwordError, setPasswordError] = useState("");

   // effects
   useEffect(()=>{
    if(errors?.username){
      setUsernameError(errors?.username)
    }
    if(errors?.password){
      setPasswordError(errors?.password)
    }
  },[errors])
 

  // form submit handler
  const formSubmitHandler = () => {
    if (!username?.trim()) {
      setUsernameError("username required");
    } else {
      setUsernameError("");
    }
    
    if (!password) {
      setPasswordError("password required");
    } else if (password.length < 3) {
      setPasswordError("too short password");
    } else {
      setPasswordError("");
    }

    

    if (
      username?.trim() &&
      password &&
      !usernameError &&
      !passwordError 
    ) {
      dispatch(userLogin({username,password}))
    }
  };

  if(isUserRegistering){
    return <UsersSpinner />
  }

 

  return (
    <div>
      <h3 className="my-3 text-3xl text-green-600">Login</h3>
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

        {/* forget password */}
        <div className="text-xs  font-medium text-green-600 flex items-center">
          <button className="hover:underline" onClick={()=>{
            dispatch(usersDirectionSetter("FORGET-PASSWORD"))
          }}>Forget password</button>
        </div>
        
        {/* button */}
        <button
          className="my-4 w-full flex items-center justify-center py-2 bg-green-600 text-white rounded-md transition-colors ease-in-out duration-150 hover:bg-green-500"
          onClick={formSubmitHandler}
        >
          Login
        </button>
        {/* or have an account */}
        <div className="flex items-center justify-center gap-x-3 mt-7">
          <div className="w-[75%] h-[1px] bg-green-600 rounded-full"></div>
          <div className="w-[18px] aspect-square border border-green-600 rounded-full overflow-hidden"></div>
          <div className="w-[75%] h-[1px] bg-green-700 rounded-full"></div>
        </div>
        <div>
          <p className="text-center mt-5 text-sm text-green-600">
            don't have an{" "}
            <button className="font-bold hover:underline" onClick={()=>{
              dispatch(usersDirectionSetter("REGISTER"))
              dispatch(resetErrors())
            }}>account</button> ?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login