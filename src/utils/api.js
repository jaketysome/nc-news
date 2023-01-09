import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://nc-news-api-service.onrender.com/api",
});

export const getArticles = () => {
  return ncNewsAPI.get("/articles").then((res) => res.data);
};
