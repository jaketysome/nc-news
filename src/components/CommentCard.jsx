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
            <div className="Card__Banner">
                {user && <img className="User__Avatar" src={user.avatar_url} alt="User Avatar"></img>}
                <div>{author}<br></br>{formatDate(created_at)}</div>
            </div>
            <p><BiLike/> {votes}</p>
            <p className="Comment__Body">{body}</p>
        </div>
    )
}

export default CommentCard;