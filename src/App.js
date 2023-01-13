import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";

function App() {
  const [currUser, setCurrUser] = useState({
    username: "grumpy19",
    name: "Paul Grump",
    avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"
    });
  const [loggedIn, setLoggedIn] = useState(false);
  const [currTopic, setCurrTopic] = useState(null);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  return (
    <div className="App">
      <Header currUser={currUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Nav currTopic={currTopic} setCurrTopic={setCurrTopic} sortBy={sortBy} setSortBy={setSortBy} order={order} setOrder={setOrder}/>
      <Routes>
        <Route path={currTopic !== null ? `/articles/${currTopic}` : "/"} element={<ArticlesList currTopic={currTopic} setCurrTopic={setCurrTopic} sortBy={sortBy} order={order}/>}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle currUser={currUser} loggedIn={loggedIn}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
