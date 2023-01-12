import {GiWireframeGlobe} from "react-icons/gi";

const Header = ({ currUser }) => {
    return (
        <header>
            <h1><GiWireframeGlobe className="Logo__Icon" /> NC News</h1>
            <div className="User__info">
                <img className="User__Avatar" src={currUser.avatar_url}></img>
                <p>{currUser.username}</p>
            </div>
        </header>
    )
}

export default Header;