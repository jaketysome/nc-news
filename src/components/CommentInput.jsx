import { useState } from "react";

const CommentInput = () => {
    const [newComment, setNewComment] = useState();

    console.log(newComment)

    return (
        <form className="Comment__Form">
            <label htmlFor="comment-input"></label>
            <textarea className="Comment__Input" id="comment-input" placeholder="Enter Comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)}></textarea>
            <br></br>
            <button>Post Comment</button>
        </form>
    )
}

export default CommentInput;