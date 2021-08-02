import { Link } from "react-router-dom";

const NotFound = () => {
    return (  <div className="notFound">
        <p>
            This page is not found
        </p>
        <Link to ='/'>Please Go to <span>Home Page</span> </Link>
    </div>
    );
}
 
export default NotFound;