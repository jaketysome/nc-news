import { formatDate } from "../utils/formatDate";
import { Link } from "react-router-dom";
import { BiCommentDetail, BiLike } from "react-icons/bi";
import { useState, useEffect } from "react";
import * as api from "../utils/api";

const ArticleCard = ({ article }) => {
    const [user, setUser] = useState();
    const {article_id, title, topic, author, created_at, comment_count, votes} = article;

    useEffect(() => {
        api.getUserByUsername(author).then((data) => {
            setUser(data.user);
        })
    }, [author])

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
    }

    return (
        <div className="Articles__Card">
            <Link to={`/articles/${article_id}`} style={linkStyle}>
                {user && <img className="User__Avatar" src={user.avatar_url} alt="User Avatar"></img>}
                <p>{author}</p>
                <p>Topic: {topic}</p>
                <p>{formatDate(created_at)}</p>
                <h2>{title}</h2>
                <p><BiCommentDetail/> {comment_count}<span> | </span><BiLike/> {votes}</p>
            </Link>
        </div>
    )
}

export default ArticleCard;