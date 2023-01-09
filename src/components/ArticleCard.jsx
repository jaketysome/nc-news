import { formatDate } from "../utils/formatDate";
import { Link } from "react-router-dom";

const ArticleCard = ({article}) => {
    const {article_id, title, topic, author, created_at, comment_count, votes} = article;

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black'
    }

    return (
        <div className="Articles__Card">
            <Link to={`/${article_id}`} style={linkStyle}>
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