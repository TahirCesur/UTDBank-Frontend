import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "../context";
import { isUserEmployee, isUserManager } from "../utils/auth";

const PrivateRoute = ({ children, admin }) => {
  const { userState } = useContext();
  const { isUserLogin, user } = userState;

  if (!isUserLogin) return <Navigate to="/login" />;

  if (admin && !(isUserManager(user.roles) || isUserEmployee(user.roles))) return <Navigate to="/not-authorized" />;

  return children;
};

export default PrivateRoute;
