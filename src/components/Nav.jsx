import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../utils/api";

const Nav = () => {
    const [topics, setTopics] = useState();

    useEffect(() => {
        api.getTopics().then((data) => {
            console.log(data, "<<< topics")
        })
    })

    return (
        <nav className="Nav">
            <Link to="/" className="Nav__link" >HOME</Link>
            <Link >TOPICS</Link>
            <Link className="Nav__link" >USERS</Link>
        </nav>
    )
} 

export default Nav;