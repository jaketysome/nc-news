import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TopicsList from "./TopicsList";
import * as api from "../utils/api";

const Nav = () => {
    const [topics, setTopics] = useState();
    const [revealTopics, setRevealTopics] = useState(false);

    const currURL = useLocation().pathname;

    useEffect(() => {
        api.getTopics().then((data) => {
            setTopics(data.topics)
        })
    }, []);

    return (
        <div>
        <nav className="Nav">
            <Link to="/" className={currURL === "/" ? "Nav__link__selected" : "Nav__link"} >HOME</Link>
            <Link className={revealTopics ? "Nav__link__selected" : "Nav__link"} onClick={() => {revealTopics ? setRevealTopics(false) : setRevealTopics(true)}}>TOPICS</Link>
            <Link className="Nav__link" >USERS</Link>
        </nav>
        {revealTopics && <TopicsList topics={topics}/>}
        </div>
    )
} 

export default Nav;