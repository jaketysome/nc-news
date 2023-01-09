import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://nc-news-api-service.onrender.com/api",
});

export const getArticles = () => {
  return ncNewsAPI.get("/articles").then((res) => res.data);
};

export const getSingleArticleById = (articleId) => {
  return ncNewsAPI.get(`/articles/${articleId}`).then((res) => res.data);
};

export const getUserByUsername = (username) => {
  return ncNewsAPI.get(`/users/${username}`).then((res) => res.data);
};
