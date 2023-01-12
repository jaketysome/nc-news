import {GiWireframeGlobe} from "react-icons/gi";

const Header = ({ user }) => {
    return (
        <header>
            <h1><GiWireframeGlobe className="Logo__Icon" /> NC News</h1>
            <div className="User__info">
                <img className="User__Avatar" src={user.avatar_url}></img>
                <p>{user.username}</p>
            </div>
        </header>
    )
}

export default Header;