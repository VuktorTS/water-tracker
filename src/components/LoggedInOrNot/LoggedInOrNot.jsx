import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../../redux/auth/authSelectors";

const LoggedInOrNot = ({ component: Component, redirectTo = '/' }) => {
    const isLogged = useSelector(isLoggedIn);

    return isLogged ? <Navigate to={redirectTo}/> : Component;
};

export default LoggedInOrNot;