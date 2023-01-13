import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { TiTick } from "react-icons/ti";
import { RxCrossCircled } from "react-icons/rx";
import * as api from "../utils/api";

const CommentInput = ({ articleId, currUser, setComments, setCommentDeleted, commentPosted, setCommentPosted }) => {
    const [newComment, setNewComment] = useState("");
    const [validComment, setValidComment] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [postingComment, setPostingComment] = useState(false);
    const { username } = currUser;

    const isValidComment = (targetValue) => {
        if (/\w|\d/g.test(targetValue)) {
            setValidComment(true);
        } else {
            setValidComment(false);
            setCommentPosted(false);
            setShowErrorMessage(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validComment) {
            setPostingComment(true);
            api.postCommentByArticleId(articleId, username, newComment).then((data) => {
                setPostingComment(false);
                setCommentPosted(true);
                setComments((currComments) => {
                    return [data.comment, ...currComments];
                })
                setNewComment("");
                });
        } else {
            setShowErrorMessage(true);
        }
    };

    if (postingComment) return <div><ClipLoader color="#36D7B7"/> Posting comment...</div>

    return (
        <form className="Comment__Form" onSubmit={handleSubmit}>
            <label htmlFor="comment-input"></label>
            {!validComment && showErrorMessage && <p className="error-message"><RxCrossCircled/> Please enter a valid comment! <RxCrossCircled/><br></br>A comment should contain at least one letter, number or symbol.</p>}
            {commentPosted && <p><TiTick/> Comment posted!! <TiTick/></p>}
            <textarea className="Comment__Input" id="comment-input" placeholder="Enter comment..." value={newComment} 
                onBlur={(e) => {isValidComment(e.target.value)}} 
                onChange={(e) => {
                isValidComment(e.target.value);  
                setCommentDeleted(false); 
                setCommentPosted(false);
                setNewComment(e.target.value);
                }}>
            </textarea>
            <br></br>
            <button type="submit" >Post Comment</button>
        </form>
    )
}

export default CommentInput;