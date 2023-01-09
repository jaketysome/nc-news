import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Nav from "./components/Nav"
import ArticlesList from "./components/ArticlesList"
import SingleArticle from './components/SingleArticle';

function App() {
  return (
    <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<ArticlesList />}></Route>
          <Route path="/:article_id" element={<SingleArticle />}></Route>
        </Routes>
    </div>
  );
}

export default App;
