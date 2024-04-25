import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getToken } from "../../redux/auth/authSelectors";

const HasTokenOrNot = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(getToken);

  return token ? <Navigate to={redirectTo}/> : Component;
};

export default HasTokenOrNot;