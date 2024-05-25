import '@/src/components/navbar/navbar.css'
import Links from "./Links";

const Navbar = () => {
    return (
        <div className="nav-bar">
            <h1>Logo</h1>
            <div className="sub-nav">
                <Links />
            </div>
        </div>
    )
}

export default Navbar;