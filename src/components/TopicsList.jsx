import { Link } from "react-router-dom";

const TopicsList = ({ topicsList, currTopic, setCurrTopic }) => {

    return (
        <nav className="Topics__nav">
            {topicsList?.map((topic) => {
                return (
                    <Link className={currTopic === topic.slug ? "Nav__link__selected" : "Nav__link"} key={topic.slug} onClick={() => {setCurrTopic(topic.slug)}}>{topic.slug.toUpperCase()}</Link>
                )
            })}
        </nav>
    )
}

export default TopicsList;