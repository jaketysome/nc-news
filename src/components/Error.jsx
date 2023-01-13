import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowReturnLeft } from "react-icons/bs";

const Error = ({ error, setIsHome }) => {

    useEffect(() => {
        setIsHome(false);
    }, [error, setIsHome]);

    return (
        <div>
            {error !== null ? <p className="Error">{`${error.status} - ${error.data.msg}`}</p> : <p className="Error">404 - Nothing to see here!</p>}
            <Link to="/" className="Error">Back to salvation <BsArrowReturnLeft/></Link>
        </div>
    )
}

export default Error;