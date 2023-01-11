import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";

function App() {
  const [user, setUser] = useState({username: "testUser123", name: "Test User", avatar_url: "https://www.deviantart.com/isaaclee126/art/Assassin-s-Creed-Anonymous-Icon-IsaacLee126-491907406"});

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ArticlesList />}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle user={user} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
