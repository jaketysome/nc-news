import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import CommentInput from "./CommentInput";

const CommentsList = ({ user }) => {
    const [comments, setComments] = useState();
    const [commentPosted, setCommentPosted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { article_id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        api.getCommentsByArticleId(article_id).then((data) => {
            setComments(data.comments);
            setIsLoading(false);
        })
    }, [article_id, commentPosted]);

    if (isLoading) return <ClipLoader color="#36D7B7"/>

    return (
        <div className="Comments__List">
            <CommentInput articleId={article_id} user={user} setComments={setComments} commentPosted={commentPosted} setCommentPosted={setCommentPosted}/>
            {comments && comments.map((comment) => {
                return (
                        <CommentCard key={comment.comment_id} comment={comment}/>
                )
            })}
        </div>
    )
}

export default CommentsList;