import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";

function App() {
  const [user, setUser] = useState({username: "grumpy19", name: "Paul Grump", avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"});
  const [currTopic, setCurrTopic] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  return (
    <div className="App">
      <Header />
      <Nav currTopic={currTopic} setCurrTopic={setCurrTopic} setSortBy={setSortBy}/>
      <Routes>
        <Route path={currTopic !== null ? `/articles/${currTopic}` : "/"} element={<ArticlesList currTopic={currTopic} setCurrTopic={setCurrTopic} sortBy={sortBy} />}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle user={user} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
