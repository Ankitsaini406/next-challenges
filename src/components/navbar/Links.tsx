"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./navbar.module.css";

const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const pathName = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            className={`${style.navLink} ${
              pathName === link.path && style.active
            }`}
            key={link.title}
            href={link.path}
          >
            {link.title}
          </Link>
        );
      })}
    </>
  );
};

export default Links;
