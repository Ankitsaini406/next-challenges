"use client";

import { useState } from "react";
import Links from "./Links";
import style from "./navbar.module.css";

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
        <div className={`${style.navbar} ${style.navMask}`} style={{ clipPath: changeNav ? 'polygon(0px 0px, 100% 0px, 100% 100%, 0% 100%)' : 'polygon(0px 0px, 100% 0px, 100% 0px, 0px 0px)'}}>
          <h1>Logo</h1>
          <div className={style.subnav}>
            <Links />
          </div>
        </div>
      ) : (
        <div className={style.navbar} 
        // style={{ clipPath: changeNav ? 'polygon(0px 0px, 100% 0px, 100% 0px, 0px 0px)' : 'polygon(0px 0px, 100% 0px, 100% 100%, 0% 100%)'}}
        >
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
