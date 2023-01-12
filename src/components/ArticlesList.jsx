import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";

const ArticlesList = ({ currTopic }) => {
    const [articles, setArticles] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        api.getArticles(currTopic).then((data) => {
            setArticles(data.articles);
            setIsLoading(false)
        })
    }, []);

    if (isLoading) return <ClipLoader color="#36D7B7"/>

    return (
        <div className="Articles">
            {articles && articles.map((article) => {
                return (
                    <ArticleCard article={article} key={article.article_id}/>
                )
            })}
        </div>
    )
}

export default ArticlesList;