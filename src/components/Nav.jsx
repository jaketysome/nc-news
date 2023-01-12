import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopicsList from "./TopicsList";
import * as api from "../utils/api";

const Nav = () => {
    const [topics, setTopics] = useState();
    const [revealTopics, setRevealTopics] = useState(false);

    useEffect(() => {
        api.getTopics().then((data) => {
            setTopics(data.topics)
        })
    }, []);

    return (
        <div>
        <nav className="Nav">
            <Link to="/" className="Nav__link" >HOME</Link>
            <Link className="Nav__link" onClick={() => {revealTopics ? setRevealTopics(false) : setRevealTopics(true)}}>TOPICS</Link>
            <Link className="Nav__link" >USERS</Link>
        </nav>
        {revealTopics && <TopicsList topics={topics}/>}
        </div>
    )
} 

export default Nav;