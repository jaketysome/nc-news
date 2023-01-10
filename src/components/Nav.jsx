import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="Nav">
            <Link to="/" >Home</Link>
            <Link >Users</Link>
            <Link >Coding</Link>
            <Link >Football</Link>
            <Link >Cooking</Link>
        </nav>
    )
} 

export default Nav;