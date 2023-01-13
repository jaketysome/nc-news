import { GiWireframeGlobe } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";

const Header = ({ currUser, loggedIn, setLoggedIn }) => {
    return (
        <header>
            <h1><GiWireframeGlobe className="Logo__Icon" /> NC News</h1>
            <div className="User__info">
                {loggedIn ? <img className="User__Avatar" src={currUser.avatar_url}></img> : <FaUserCircle className="User__Avatar__loggedOut"></FaUserCircle>}
                {loggedIn ? <p className="white-text">{currUser.username}</p> : <p className="white-text">Please login: </p>}
                <button onClick={() => {
                    loggedIn ? setLoggedIn(false) : setLoggedIn(true);
                }}>{loggedIn ? "Logout" : "Login"}</button>
            </div>
        </header>
    )
}

export default Header;