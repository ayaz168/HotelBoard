import "./navbar.css"

export default function Navbar() {
    return <div className="navbar">
        <div className="navContainer">
            <span className="logo">Tourboard</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>;
}
