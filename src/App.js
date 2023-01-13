import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Error from "./components/Error";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";

function App() {
  const [currUser, setCurrUser] = useState({
    username: "grumpy19",
    name: "Paul Grump",
    avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"
    });
  const [loggedIn, setLoggedIn] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [error, setError] = useState(null);
  const [currTopic, setCurrTopic] = useState(null);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  return (
    <div className="App">
      <Header currUser={currUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Nav isHome={isHome} setIsHome={setIsHome} currTopic={currTopic} setCurrTopic={setCurrTopic} sortBy={sortBy} setSortBy={setSortBy} order={order} setOrder={setOrder}/>
      <Routes>
        <Route path="/articles" element={<ArticlesList setIsHome={setIsHome} error={error} setError={setError} sortBy={sortBy} order={order}/>}></Route>
        <Route path={currTopic !== null ? `/topics/${currTopic}` : "/"} element={<ArticlesList  setIsHome={setIsHome} error={error} setError={setError} currTopic={currTopic} setCurrTopic={setCurrTopic} sortBy={sortBy} order={order}/>}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle setIsHome={setIsHome} currUser={currUser} loggedIn={loggedIn} error={error} setError={setError}/>}></Route>
        <Route path="/*" element={<Error error={error} setIsHome={setIsHome}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
