import { useState, useEffect } from "react";
import { formatDate } from "../utils/formatDate";
import { BiLike } from "react-icons/bi";
import * as api from "../utils/api";

const CommentCard = ({ comment, currUser }) => {
    const [commentAuthor, setCommentAuthor] = useState();
    const { author, created_at, votes, body } = comment;

    useEffect(() => {
        api.getUserByUsername(author).then((data) => {
            setCommentAuthor(data.user);
        })
    }, [author])

    return (
        <div className="Comment__Card">
            <div className="Card__Banner">
                {commentAuthor && <img className="User__Avatar" src={commentAuthor.avatar_url} alt="Author Avatar"></img>}
                <div>{author}<br></br>{formatDate(created_at)}</div>
            </div>
            <p className="Comment__Body">{body}</p>
            <p><BiLike/> {votes}</p>
            {commentAuthor?.username === currUser.username ? <button>Delete comment</button> : null}
        </div>
    )
}

export default CommentCard;