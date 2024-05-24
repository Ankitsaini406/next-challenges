import Link from "next/link";
import '@/src/components/navbar/navbar.css'

const Navbar = () => {
    return (
        <div className="nav-bar">
            <h1>Logo</h1>
            <div className="sub-nav">
                <Link className="button-box" href='/'>About</Link>
                <Link className="button-box" href='/'>Countact</Link>
                <Link className="button-box" href='/'>LogIn</Link>
                <button className="sun-light"></button>
                <button className="moon"></button>
            </div>
        </div>
    )
}

export default Navbar;