import "./navbar.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Navbar() {
    const { user } = useContext(AuthContext);
    return <div className="navbar">
        <div className="navContainer">
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                <span className="logo">Tourboard</span>
            </Link>
            {user ? user.username : <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>}
        </div>
    </div>;
}
