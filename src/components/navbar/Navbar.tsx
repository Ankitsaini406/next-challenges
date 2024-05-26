"use client";

import style from "./navbar.module.css";
import Links from "./Links";
import { useState } from "react";

const Navbar = () => {
  const [changeNav, setChangeNav] = useState(false);

  const changeNavBarColor = () => {
    if (window.scrollY > 50) {
      setChangeNav(true);
    } else {
      setChangeNav(false);
    }
  };

  if (typeof window !== "undefined") {
   window.addEventListener("scroll", changeNavBarColor);
  }

  return (
    <>
      {changeNav ? (
        <div className={`${style.navbar} ${style.navMask}`}>
          <h1>Logo</h1>
          <div className={style.subnav}>
            <Links />
          </div>
        </div>
      ) : (
        <div className={style.navbar}>
          <h1>Logo</h1>
          <div className={style.subnav}>
            <Links />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
