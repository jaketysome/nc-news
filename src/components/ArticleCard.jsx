import { formatDate } from "../utils/formatDate";

const ArticleCard = ({article}) => {
    const {article_id, title, topic, author, body, created_at} = article;

    return (
        <div className="Articles__Card">
            <p>{author}</p>
            <p>Topic: {topic}</p>
            <p>{formatDate(created_at)}</p>
            <h2>{title}</h2>
            <p>Comment count: 0</p>
            <p>Votes: 0</p>
        </div>
    )
}

export default ArticleCard;