import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import ArticleCard from "./ArticleCard";
import TopicHeader from "./TopicHeader";
import * as api from "../utils/api";

const ArticlesList = ({  error, setError, setIsHome, currTopic, sortBy, order }) => {
    const [articles, setArticles] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        api.getArticles(currTopic, sortBy, order).then((data) => {
            setArticles(data.articles);
            setIsLoading(false);
            setError(null);
        }).catch((err) => {
            setIsHome(false);
            setError(err.response);
        })
    }, [setError, setIsHome, currTopic, sortBy, order]);

    if (isLoading) return <ClipLoader className="Loading-spinner" color="#36D7B7"/>

    return (
        <div className="Articles">
            {currTopic !== null && <TopicHeader currTopic={currTopic}/>}
            {articles && articles.map((article) => {
                return (
                    <ArticleCard setIsHome={setIsHome} article={article} key={article.article_id}/>
                )
            })}
        </div>
    )
}

export default ArticlesList;