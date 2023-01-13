import { useEffect } from "react";

const Error = ({ error, setIsHome }) => {

    useEffect(() => {
        setIsHome(false);
    }, [error]);

    return (
        <div>
            {error !== null ? <p className="Error">{`${error.status} - ${error.data.msg}`}</p> : <p className="Error">404 - Nothing to see here!</p>}
        </div>
    )
}

export default Error;