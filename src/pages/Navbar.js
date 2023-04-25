import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">HELLO WORLD</Link>
            <ul className="active">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;