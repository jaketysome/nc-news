import { Link } from "react-router-dom";

const TopicsList = ({ topics }) => {

    return (
        <nav className="Topics__nav">
            {topics?.map((topic) => {
                return (
                    <Link className="Nav__link" key={topic.slug}>{topic.slug.toUpperCase()}</Link>
                )
            })}
        </nav>
    )
}

export default TopicsList;