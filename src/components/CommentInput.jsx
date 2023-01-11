import { useState } from "react";
import * as api from "../utils/api";

const CommentInput = ({articleId, user}) => {
    const [newComment, setNewComment] = useState();
    const { username } = user;

    const handleSubmit = (e) => {
        e.preventDefault();
        api.postCommentByArticleId(articleId, username, newComment).then((data) => {
            console.log(data.comment, "<<<< new comment")
        })
    }

    return (
        <form className="Comment__Form" onSubmit={handleSubmit}>
            <label htmlFor="comment-input"></label>
            <textarea className="Comment__Input" id="comment-input" placeholder="Enter Comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)}></textarea>
            <br></br>
            <button type="submit">Post Comment</button>
        </form>
    )
}

export default CommentInput;