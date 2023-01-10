import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { BiCommentDetail, BiLike, BiHide } from "react-icons/bi";
import { formatDate } from "../utils/formatDate";
import * as api from "../utils/api"
import CommentsList from "./CommentsList";

const SingleArticle = () => {
    const [singleArticle, setSingleArticle] = useState();
    const [showComments, setShowComments] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { article_id } = useParams();

    useEffect((e) => {
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
                    <button onClick={(e) => setShowComments(true)}><BiCommentDetail/> {singleArticle.comment_count}</button>
                    <span>     </span>
                    <button><BiLike/> {singleArticle.votes}</button>
                    <br></br>
                    {showComments && 
                    <Link to={`/articles/${article_id}`}>
                        <button onClick={(e) => setShowComments(false)}><BiHide/> Hide Comments</button>
                    </Link>}
                    {showComments && <CommentsList/>}
                </div>
            </div>
        );
    }
}

export default SingleArticle;