import * as api from "./api";

export const postComment = (articleId, username, comment) => {
    api.postCommentByArticleId(articleId, username, comment).then((data) => {
        console.log(data.comment, "<<<< new comment")
    })
}