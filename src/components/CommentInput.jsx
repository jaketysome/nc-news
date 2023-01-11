const CommentInput = () => {
    return (
        <form className="Comment__Form">
            <label htmlFor="comment-input"></label>
            <textarea className="Comment__Input" type="text" id="comment-input" placeholder="Enter Comment..."></textarea>
            <br></br>
            <button>Post Comment</button>
        </form>
    )
}

export default CommentInput;