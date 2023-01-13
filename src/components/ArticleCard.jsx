import { formatDate } from "../utils/formatDate";
import { Link } from "react-router-dom";
import { BiCommentDetail, BiLike } from "react-icons/bi";
import { useState, useEffect } from "react";
import * as api from "../utils/api";

const ArticleCard = ({ setIsHome, article }) => {
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
            <Link to={`/articles/${article_id}`} onClick={() => {setIsHome(false)}} style={linkStyle}>
                <div className="Card__Banner" >
                    {user && <img className="User__Avatar" src={user.avatar_url} alt="User Avatar"></img>}
                    <div>{author}<br></br>{formatDate(created_at)}</div>
                </div>
                <p className="small-caps">{topic.toUpperCase()}</p>
                <h2>{title}</h2>
                <p><BiCommentDetail/> {comment_count}<span> | </span><BiLike/> {votes}</p>
            </Link>
        </div>
    )
}

export default ArticleCard;