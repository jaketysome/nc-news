import { useEffect } from "react";

const Error = ({ error, setIsHome }) => {

    useEffect(() => {
        setIsHome(false);
    }, []);

    return (
        <div>
            {error !== null ? <p>{error.msg}</p> : <p className="white-text">404 - Nothing to see here!</p>}
        </div>
    )
}

export default Error;