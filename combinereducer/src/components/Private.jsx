import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Private = ({ children }) => {
    const status = useSelector(store => store.auth.isLoggedIn);
    if (status === false && children.type.name === "Login") {
        return children;
    }
    if (status === false) {
        return <Navigate to={"/login"} />;
    }
    if (status === true && children.type.name === "Login") {
        // if user is already logged in and is trying to access the login page
        return <Navigate to={"/"} />;
    }
    return children;
}