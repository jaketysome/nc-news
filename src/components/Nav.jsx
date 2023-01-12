import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopicsList from "./TopicsList";
import * as api from "../utils/api";

const Nav = ({ currTopic, setCurrTopic, setSortBy }) => {
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
            <div className="Sort-by">
                <label htmlFor="sort-by">Sort by: </label> 
                <select id="sort-by">
                    <option onClick={() => {setSortBy("created_at")}}>Date</option>
                    <option onClick={() => {setSortBy("comment_count")}}>Comment Count</option>
                    <option onClick={() => {setSortBy("votes")}}>Votes</option>
                </select>
            </div>
        </nav>
        {revealTopics && <TopicsList topicsList={topicsList} currTopic={currTopic} setCurrTopic={setCurrTopic}/>}
        </div>
    )
} 

export default Nav;