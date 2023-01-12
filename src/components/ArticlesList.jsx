import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import ArticleCard from "./ArticleCard";
import TopicHeader from "./TopicHeader";
import * as api from "../utils/api";

const ArticlesList = ({ currTopic, sortBy }) => {
    const [articles, setArticles] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        api.getArticles(currTopic, sortBy).then((data) => {
            setArticles(data.articles);
            setIsLoading(false)
        })
    }, [currTopic, sortBy]);

    if (isLoading) return <ClipLoader className="Loading-spinner"color="#36D7B7"/>

    return (
        <div className="Articles">
            {currTopic !== null && <TopicHeader currTopic={currTopic}/>}
            {articles && articles.map((article) => {
                return (
                    <ArticleCard article={article} key={article.article_id}/>
                )
            })}
        </div>
    )
}

export default ArticlesList;