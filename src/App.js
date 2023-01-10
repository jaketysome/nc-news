import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import CommentsList from "./components/CommentsList";

function App() {

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ArticlesList />}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
        <Route path="/articles/:article_id/comments" element={<CommentsList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
