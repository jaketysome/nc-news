import { formatDate } from "../utils/formatDate";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import * as api from "../utils/api";

const ArticleCard = ({ article }) => {
    const [user, setUser] = useState();
    const {article_id, title, topic, author, created_at, comment_count, votes} = article;

    useEffect(() => {
        api.getUserByUsername(author).then((data) => {
            setUser(data.user);
        })
    }, [])

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black'
    }

    return (
        <div className="Articles__Card">
            <Link to={`/articles/${article_id}`} style={linkStyle}>
                {user && <img className="User__Avatar" src={user.avatar_url} alt="Author Avatar URL"></img>}
                <p>{author}</p>
                <p>Topic: {topic}</p>
                <p>{formatDate(created_at)}</p>
                <h2>{title}</h2>
                <p>Comment count: {comment_count}</p>
                <span></span>
                <p>Votes: {votes}</p>
            </Link>
        </div>
    )
}

export default ArticleCard;