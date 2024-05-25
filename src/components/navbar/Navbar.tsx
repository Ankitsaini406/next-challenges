import style from'./navbar.module.css'
import Links from "./Links";

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <h1>Logo</h1>
            <div className={style.subnav}>
                <Links />
            </div>
        </div>
    )
}

export default Navbar;