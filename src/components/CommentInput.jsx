import { useState } from "react";
import { postComment } from "../utils/postComment";

const CommentInput = ({articleId, username}) => {
    const [newComment, setNewComment] = useState();

    return (
        <form className="Comment__Form">
            <label htmlFor="comment-input"></label>
            <textarea className="Comment__Input" id="comment-input" placeholder="Enter Comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)}></textarea>
            <br></br>
            <button onClick={() => postComment(articleId, username, newComment)}>Post Comment</button>
        </form>
    )
}

export default CommentInput;