import { useEffect } from "react";
import { Link } from "react-router-dom";

const Error = ({ error, setIsHome }) => {

    useEffect(() => {
        setIsHome(false);
    }, [error]);

    return (
        <div>
            {error !== null ? <p className="Error">{`${error.status} - ${error.data.msg}`}</p> : <p className="Error">404 - Nothing to see here!</p>}
            <Link to="/" className="Error">Back to salvation</Link>
        </div>
    )
}

export default Error;