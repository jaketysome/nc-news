import { useState, useEffect } from "react";
import { formatDate } from "../utils/formatDate";
import { BiLike } from "react-icons/bi";
import * as api from "../utils/api";

const CommentCard = ({comment}) => {
    const [user, setUser] = useState();
    const { author, created_at, votes, body } = comment;

    useEffect(() => {
        api.getUserByUsername(author).then((data) => {
            setUser(data.user);
        })
    }, [author])

    return (
        <div className="Comment__Card">
            {user && <img className="User__Avatar" src={user.avatar_url} alt="User Avatar"></img>}
            <p>{author}</p>
            <p>{formatDate(created_at)}</p>
            <p><BiLike/> {votes}</p>
            <p className="Comment__Body">{body}</p>
        </div>
    )
}

export default CommentCard;