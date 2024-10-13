import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// slices
// user slice
import { isUserAuthenticated, userSelector } from "./features/users/usersSlice";

// components
// header
import Header from "./components/Header";

// pages
// home
import Home from "./pages/Home";
// user
import Users from "./pages/users/Users";

const App = () => {
  // hooks
  // pathname
  const pathname = useLocation().pathname;
  // dispatch
  const dispatch = useDispatch();

  // states
  // states from slice
  const user = useSelector(userSelector);

  // effects
  useEffect(() => {
    dispatch(isUserAuthenticated());
  }, [pathname]);

  return (
    <div className="w-[100vw] h-[100vh]">
      {!pathname?.startsWith("/users") && <Header />}
      <Routes>
        {/* home */}
        <Route path="/" element={<Home />}></Route>
        {/* user */}
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </div>
  );
};

export default App;
