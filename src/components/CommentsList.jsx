import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import CommentInput from "./CommentInput";

const CommentsList = ({ currUser }) => {
    const [comments, setComments] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const { article_id } = useParams();

    console.log(comments, "<<<<<")

    useEffect(() => {
        setIsLoading(true);
        api.getCommentsByArticleId(article_id).then((data) => {
            setComments(data.comments);
            setIsLoading(false);
        })
    }, [article_id]);

    if (isLoading) return <ClipLoader color="#36D7B7"/>

    return (
        <div className="Comments__List">
            <CommentInput articleId={article_id} currUser={currUser} setComments={setComments}/>
            {comments && comments.map((comment) => {
                return (
                        <CommentCard key={comment.comment_id} comment={comment} currUser={currUser} setComments={setComments}/>
                )
            })}
        </div>
    )
}

export default CommentsList;