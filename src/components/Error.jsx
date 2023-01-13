const Error = (err) => {
    return (
        <div>
            {err.msg ? err.msg : <p className="white-text">404 - Nothing to see here!</p>}
        </div>
    )
}

export default Error;