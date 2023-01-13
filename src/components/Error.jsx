import { useEffect } from "react";

const Error = ({ error, setIsHome }) => {
    const {data, status} = error;

    useEffect(() => {
        setIsHome(false);
    }, [error]);

    return (
        <div>
            {error !== null ? <p className="white-text">{`${status} - ${data.msg}`}</p> : <p className="white-text">404 - Nothing to see here!</p>}
        </div>
    )
}

export default Error;