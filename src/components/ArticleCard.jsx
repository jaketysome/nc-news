import { formatDate } from "../utils/formatDate";

const ArticleCard = ({article}) => {
    const {title, topic, author, body, created_at, comment_count, votes} = article;

    return (
        <div className="Articles__Card">
            <p>{author}</p>
            <p>Topic: {topic}</p>
            <p>{formatDate(created_at)}</p>
            <p>{title}</p>
            <p>Comment count: {comment_count}</p>
            <p>Votes: {votes}</p>
        </div>
    )
}

export default ArticleCard;