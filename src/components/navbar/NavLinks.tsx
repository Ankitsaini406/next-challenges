"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./navbar.module.css";


const NavLinks = ({items} : {items : any}) => {

    const pathName = usePathname();

    return(
        <Link
            className={`${style.navLink} ${
              pathName === items.path && style.active
            }`}
            key={items.title}
            href={items.path}
          >
            {items.title}
          </Link>
    )
}

export default NavLinks;