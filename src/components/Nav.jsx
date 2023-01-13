import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopicsList from "./TopicsList";
import * as api from "../utils/api";

const Nav = ({ isHome, setIsHome, currTopic, setCurrTopic, sortBy, setSortBy, order, setOrder }) => {
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
            <Link to="/" className={isHome ? "Nav__link__selected" : "Nav__link"} onClick={() => {
                setIsHome(true);
                setCurrTopic(null) 
                setRevealTopics(false)
                }}>HOME</Link>
            <Link className={revealTopics ? "Nav__link__selected" : "Nav__link"} onClick={() => {
                setIsHome(false);
                revealTopics ? setRevealTopics(false) : setRevealTopics(true);
                }}>TOPICS</Link>
            <Link className="Nav__link" >USERS</Link>
            <div className="Sort-by">
                <label htmlFor="sort-by">Sort by: </label> 
                <select 
                    id="sort-by"
                    value={`${sortBy}/${order}`}
                    onChange={(e) => {
                        setSortBy(e.target.value.split("/")[0])
                        setOrder(e.target.value.split("/")[1])
                    }}
                    >
                    <option value="created_at/desc">Date (newest first)</option>
                    <option value="created_at/asc">Date (oldest first)</option>
                    <option value="comment_count/desc">Comment Count (highest first)</option>
                    <option value="comment_count/asc">Comment Count (lowest first)</option>
                    <option value="votes/desc">Votes (highest first)</option>
                    <option value="votes/asc">Votes (lowest first)</option>
                </select>
            </div>
        </nav>
        {revealTopics && <TopicsList topicsList={topicsList} currTopic={currTopic} setCurrTopic={setCurrTopic}/>}
        </div>
    )
} 

export default Nav;