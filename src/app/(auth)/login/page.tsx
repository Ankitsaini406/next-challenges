"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import style from "./login.module.css";

const Loginpage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const changeIcon = () => {
    setShowPassword(!showPassword);
  };
  return (
    <form className={style.loginContainer}>
      <h2>Log In</h2>
      <div>
        <label htmlFor="password">Password</label>
        <input className={style.passWord} type={showPassword ? "text" : "password"} />
        {showPassword ? (
          <span onClick={changeIcon}>
            <Visibility />
          </span>
        ) : (
          <span onClick={changeIcon}>
            <VisibilityOff />
          </span>
        )}
      </div>
    </form>
  );
};

export default Loginpage;
