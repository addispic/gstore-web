import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// icons
import { GoClockFill } from "react-icons/go";

// sub user components
import Login from "./Login";
import Register from "./Register";
import ForgetPassword from "./ForgetPassword";
import UsersSpinner from "./UsersSpinner";

// slices
// users
import { usersDirectionSelector } from "../../features/users/usersSlice";

const Users = () => {
  // states
  // slices
  // users
  const usersDirection = useSelector(usersDirectionSelector);

  return (
    <div className="w-full h-full py-10 px-3 sm:px-5 md:px-7 lg:px-10">
      <div className="max-w-[1024px] mx-auto flex items-center gap-x-3 sm:gap-x-6 lg:gap-x-12">
        {/* left */}
        <div className="hidden md:flex w-[55%] bg-green-600 rounded-md overflow-hidden py-5 px-3 sm:px-3 md:px-3 lg:px-5 xl:px-10 text-white h-[88vh] flex-col justify-between">
          {/* header */}
          <header>
            {/* logo */}
            <NavLink to={"/"}>
              <p className="text-lg font-black text-neutral-200">
                g<span className="text-xl">store</span>
              </p>
            </NavLink>
          </header>
          {/* middle text */}
          <div className="my-5">
            <h3 className="text-4xl font-semibold">Start Your</h3>
            <h3 className="text-4xl font-semibold">journey with us.</h3>

            <p className="mt-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              veritatis inventore maiores amet itaque eos debitis modi odio
              repudiandae sit delectus, nulla, fugiat minus?
            </p>
          </div>
          {/* footer */}
          <div>
            {/* latest post */}
            <div className="p-5 rounded-md bg-green-700">
              <div>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque nulla harum quo. Corrupti blanditiis eaque voluptatem
                  laborum ratione, maxime doloribus suscipit molestiae
                  distinctio similique?
                </p>
              </div>
              {/* author */}
              <div className="flex items-center gap-x-3 mt-3">
                {/* image */}
                <div className="w-[32px] aspect-square rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.2.566907491.1728623541&semt=ais_hybrid"
                    alt=""
                  />
                </div>
                {/* username */}
                <div>
                  <p className="font-semibold text-sm text-neutral-200">
                    Addis F.
                  </p>
                  <div className="flex items-center gap-x-1 text-neutral-300">
                    <GoClockFill className="text-xs" />
                    <span className="text-xs">3 minutes ago</span>
                  </div>
                </div>
              </div>
            </div>
            {/* navigator */}
            <div className="mt-5 lg:mt-10 flex items-center justify-center gap-x-0.5">
              {[...Array(3)].map((item, index) => {
                return (
                  <div className="w-[16px] aspect-square rounded-full overflow-hidden  cursor-pointer flex items-center justify-center">
                    <div className="w-[7px] aspect-square rounded-full overflow-hidden bg-neutral-300 "></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-full sm:w-[65%] mx-auto md:w-[50%] lg:w-[45%] py-5 px-3 sm:px-3 md:px-3 lg:px-5 xl:px-10">
          {true ? <UsersSpinner />  : (
            <>
              {usersDirection === "LOGIN" ? (
                <Login />
              ) : usersDirection === "REGISTER" ? (
                <Register />
              ) : usersDirection === "FORGET-PASSWORD" ? (
                <ForgetPassword />
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
