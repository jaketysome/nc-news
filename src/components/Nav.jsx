import { Link } from "react-router-dom";

const linkStyle = {
    textDecoration: "none",
    fontSize: "small",
}

const Nav = () => {
    return (
        <nav className="Nav">
            <Link to="/" style={linkStyle}>HOME</Link>
            <Link style={linkStyle} >USERS</Link>
            <Link style={linkStyle} >CODING</Link>
            <Link style={linkStyle} >FOOTBALL</Link>
            <Link style={linkStyle} >COOKING</Link>
        </nav>
    )
} 

export default Nav;