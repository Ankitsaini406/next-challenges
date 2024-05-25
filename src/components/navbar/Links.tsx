
import style from "./navbar.module.css";
import NavLinks from "./NavLinks";

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

  const session = false;
  const isAdmin = false;

  return (
    <>
      {links.map((link) => {
        return <NavLinks key={link.title} items={link} />;
      })}
      {session ? (
        <>
          {isAdmin && <NavLinks items={{ title: "Admin", path: "/admin" }} />}
          <button className={style.logutBtn}>Logout</button>
        </>
      ) : (
        <NavLinks items={{ title: "Login", path: "/login" }} />
      )}
    </>
  );
};

export default Links;
