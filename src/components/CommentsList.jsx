import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import SingleArticle from "./SingleArticle";

const CommentsList = () => {
    const [comments, setComments] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const { article_id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        api.getCommentsByArticleId(article_id).then((data) => {
            setComments(data.comments);
            setIsLoading(false);
            setShowComments(true);
        })
    }, [article_id]);

    if (isLoading) return <ClipLoader color="#36D7B7"/>

    return (
        <div className="Comments__List">
                <SingleArticle showComments={showComments}/>
            {comments && comments.map((comment) => {
                return (
                        <CommentCard key={comment.comment_id} comment={comment}/>
                )
            })}
        </div>
    )
}

export default CommentsList;