import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";

function App() {
  const [currUser, setCurrUser] = useState({
    username: "cooljmessy",
    name: "Peter Messy",
    avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002"
    });
    
  const [currTopic, setCurrTopic] = useState(null);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  return (
    <div className="App">
      <Header currUser={currUser}/>
      <Nav currTopic={currTopic} setCurrTopic={setCurrTopic} sortBy={sortBy} setSortBy={setSortBy} order={order} setOrder={setOrder}/>
      <Routes>
        <Route path={currTopic !== null ? `/articles/${currTopic}` : "/"} element={<ArticlesList currTopic={currTopic} setCurrTopic={setCurrTopic} sortBy={sortBy} order={order}/>}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle currUser={currUser} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
