import Link from "next/link";
import style from "./subpages.module.css";

const SubPagesLinks = () => {
  return (
    <div className={style.container}>
      <Link className={style.subbutton} href="server">
        User(Server)
      </Link>
      <Link className={style.subbutton} href="client">
        User(Client)
      </Link>
    </div>
  );
};

export default SubPagesLinks;
