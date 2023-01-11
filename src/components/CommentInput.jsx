import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { TiTick } from "react-icons/ti";
import * as api from "../utils/api";

const CommentInput = ({ articleId, user }) => {
    const [newComment, setNewComment] = useState();
    const [postingComment, setPostingComment] = useState(false);
    const [commentPosted, setCommentPosted] = useState(false);
    const { username } = user;

    const handleSubmit = (e) => {
        setPostingComment(true);
        e.preventDefault();
        api.postCommentByArticleId(articleId, username, newComment).then((data) => {
            setPostingComment(false);
            setCommentPosted(true);
        })
    }

    if (postingComment) return <div><ClipLoader color="#36D7B7"/> Posting comment...</div>

    return (
        <form className="Comment__Form" onSubmit={handleSubmit}>
            <label htmlFor="comment-input"></label>
            <textarea className="Comment__Input" id="comment-input" placeholder="Enter comment..." value={newComment} onChange={(e) => {
                setCommentPosted(false);
                setNewComment(e.target.value);
                }}>
            </textarea>
            <br></br>
            <button type="submit">Post Comment</button>
            {commentPosted && <p>Comment successfully posted!! <TiTick/></p>}
        </form>
    )
}

export default CommentInput;