import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { TiTick } from "react-icons/ti";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import CommentInput from "./CommentInput";

const CommentsList = ({ currUser, loggedIn }) => {
    const [comments, setComments] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [commentDeleted, setCommentDeleted] = useState(false);
    const [commentPosted, setCommentPosted] = useState(false);
    const { article_id } = useParams();

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
            <CommentInput loggedIn={loggedIn} articleId={article_id} currUser={currUser} setComments={setComments} setCommentDeleted={setCommentDeleted} commentPosted={commentPosted} setCommentPosted={setCommentPosted}/>
            {commentDeleted && <p><TiTick/> Comment deleted! <TiTick/></p>}
            {comments && comments.map((comment) => {
                return (
                        <CommentCard key={comment.comment_id} comment={comment} currUser={currUser} loggedIn={loggedIn} setComments={setComments} setCommentDeleted={setCommentDeleted} setCommentPosted={setCommentPosted}/>
                )
            })}
        </div>
    )
}

export default CommentsList;