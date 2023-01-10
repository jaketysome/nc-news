import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { BiCommentDetail, BiLike, BiHide } from "react-icons/bi";
import { formatDate } from "../utils/formatDate";
import * as api from "../utils/api"

const SingleArticle = ({showComments}) => {
    const [singleArticle, setSingleArticle] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const { article_id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        api.getSingleArticleById(article_id).then((data) => {
            setSingleArticle(data.article);
            setIsLoading(false);
        })
    }, [article_id])

    if (isLoading) return <ClipLoader color="#36D7B7"/>

    if (singleArticle) {
        return (
            <div className="Single__Article">
                <div className="Article__Content">
                    <p>{singleArticle.topic}</p>
                    <h2>{singleArticle.title}</h2>
                    <p>{singleArticle.author}</p>
                    <p>{formatDate(singleArticle.created_at)}</p>
                    <p className="Article__Body">{singleArticle.body}</p>
                    <button><BiLike/> {singleArticle.votes}</button>
                    <span>     </span>
                    <Link to={`/articles/${article_id}/comments`}>
                        <button><BiCommentDetail/> {singleArticle.comment_count}</button>
                    </Link>
                    <br></br>
                    {showComments && 
                    <Link to={`/articles/${article_id}`}>
                        <button><BiHide/> Hide Comments</button>
                    </Link>}      
                </div>
            </div>
        );
    }
}

export default SingleArticle;