import { useState, useEffect } from "react";
import { formatDate } from "../utils/formatDate";
import { BiLike } from "react-icons/bi";
import * as api from "../utils/api";

const CommentCard = ({ comment, currUser, setComments, setCommentDeleted }) => {
    const [commentAuthor, setCommentAuthor] = useState();
    const [deleteError, setDeleteError] = useState(false);
    const { author, created_at, votes, body, comment_id } = comment;

    useEffect(() => {
        api.getUserByUsername(author).then((data) => {
            setCommentAuthor(data.user);
        })
    }, [author])

    const deleteComment = (commentId) => {
        api.deleteCommentByCommentId(commentId).then((data) => {
            setCommentDeleted(true);
            setDeleteError(false);
            setComments((currComments) => {
                return currComments.filter((comment) => {
                    return comment.comment_id !== commentId;
                })
            })
        }).catch((err) => {
            setCommentDeleted(false);
            setDeleteError(true);
        })
    }

    return (
        <div className="Comment__Card">
            <div className="Card__Banner">
                {commentAuthor && <img className="User__Avatar" src={commentAuthor.avatar_url} alt="Author Avatar"></img>}
                <div>{author}<br></br>{formatDate(created_at)}</div>
            </div>
            <p className="Comment__Body">{body}</p>
            <p><BiLike/> {votes}</p>
            {commentAuthor?.username === currUser.username ? <button onClick={() => {deleteComment(comment_id)}}>Delete comment</button> : null}
            {deleteError && <p className="error-message">Oops! Comment not deleted! <br></br>Please try again...</p>}
        </div>
    )
}

export default CommentCard;