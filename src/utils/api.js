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

export const getCommentsByArticleId = (articleId) => {
  return ncNewsAPI
    .get(`/articles/${articleId}/comments`)
    .then((res) => res.data);
};

export const patchArticleByArticleId = (articleId, voteValue) => {
  const patchBody = {
    inc_votes: voteValue,
  };
  return ncNewsAPI
    .patch(`/articles/${articleId}`, patchBody)
    .then((res) => res.data);
};

export const postCommentByArticleId = (articleId, username, comment) => {
  const postBody = {
    username: username,
    body: comment,
  };
  
  return ncNewsAPI
  .post(`/articles/${articleId}/comments`, postBody)
  .then((res) => res.data);
};

export const getTopics = () => {
  return ncNewsAPI.get("/topics").then((res) => res.data);
}