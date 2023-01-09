import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Nav from "./components/Nav"
import ArticlesList from "./components/ArticlesList"

function App() {
  return (
    <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<ArticlesList />}></Route>
        </Routes>
    </div>
  );
}

export default App;
