import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { BiCommentDetail, BiLike, BiDislike, BiHide } from "react-icons/bi";
import { formatDate } from "../utils/formatDate";
import * as api from "../utils/api"
import CommentsList from "./CommentsList";

const SingleArticle = ({ currUser, loggedIn }) => {
    const [singleArticle, setSingleArticle] = useState();
    const [showComments, setShowComments] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [voteError, setVoteError] = useState(false);
    const { article_id } = useParams();

    useEffect((e) => {
        setIsLoading(true);
        api.getSingleArticleById(article_id).then((data) => {
            setSingleArticle(data.article);
            setIsLoading(false);
        })
    }, [article_id])

    const vote = (articleId, voteValue) => {
        setVoteError(false);
        setSingleArticle((currSingleArticle) => {
            return {...currSingleArticle, votes: currSingleArticle.votes += voteValue};
        });
        api.patchArticleByArticleId(articleId, voteValue).catch((err) => {
        setVoteError(true);
        setSingleArticle((currSingleArticle) => {
            return {...currSingleArticle, votes: currSingleArticle.votes -= voteValue};
        });
        })
    }

    if (isLoading) return <ClipLoader color="#36D7B7"/>

    if (singleArticle) {
        return (
            <div className="Single__Article">
                <div className="Article__Content">
                    <p className="small-caps">{singleArticle.topic.toUpperCase()}</p>
                    <h2>{singleArticle.title}</h2>
                    <div className="Article__Banner">{singleArticle.author}<br></br>{formatDate(singleArticle.created_at)}</div>
                    <p className="Article__Body">{singleArticle.body}</p>
                    <div className="Article__Interactions">
                        <button onClick={(e) => setShowComments(true)}><BiCommentDetail/> {singleArticle.comment_count}</button>
                        <button onClick={() => vote(article_id, 1)}><BiLike/></button>
                        <span>{singleArticle.votes}</span>
                        <button onClick={() => vote(article_id, -1)}><BiDislike/></button>
                        {voteError && <p className="error-message">Oops! Something went wrong with your vote! <br></br>Please try again...</p>}
                    </div>
                    <br></br>
                    {showComments && 
                    <Link to={`/articles/${article_id}`}>
                        <button onClick={(e) => setShowComments(false)}><BiHide/> Hide Comments</button>
                    </Link>}
                    <br></br>
                    {showComments && <CommentsList articleId={article_id} currUser={currUser} loggedIn={loggedIn}/>}
                </div>
            </div>
        );
    }
}

export default SingleArticle;