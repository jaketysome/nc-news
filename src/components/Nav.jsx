import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TopicsList from "./TopicsList";
import * as api from "../utils/api";

const Nav = ({ currTopic, setCurrTopic }) => {
    const [topicsList, setTopicsList] = useState();
    const [revealTopics, setRevealTopics] = useState(false);

    useEffect(() => {
        api.getTopics().then((data) => {
            setTopicsList(data.topics)
        })
    }, []);

    return (
        <div>
        <nav className="Nav">
            <Link to="/" className={currTopic === null ? "Nav__link__selected" : "Nav__link"} onClick={() => {
                setCurrTopic(null) 
                setRevealTopics(false)
                }}>HOME</Link>
            <Link className={revealTopics ? "Nav__link__selected" : "Nav__link"} onClick={() => {revealTopics ? setRevealTopics(false) : setRevealTopics(true)}}>TOPICS</Link>
            <Link className="Nav__link" >USERS</Link>
        </nav>
        {revealTopics && <TopicsList topicsList={topicsList} currTopic={currTopic} setCurrTopic={setCurrTopic}/>}
        </div>
    )
} 

export default Nav;