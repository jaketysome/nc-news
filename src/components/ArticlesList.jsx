import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";

const Home = () => {
    const [articles, setArticles] = useState();
    
    useEffect(() => {
        api.getArticles().then((data) => setArticles(data.articles))
    }, [])

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

export default Home;