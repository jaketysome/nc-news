import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <nav className="Nav">
            <Link to="/" className="Nav__link" >HOME</Link>
            <Link >TOPICS</Link>
            <Link className="Nav__link" >USERS</Link>
        </nav>
    )
} 

export default Nav;