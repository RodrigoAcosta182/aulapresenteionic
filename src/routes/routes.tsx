import { Redirect } from "react-router";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

export const routes = [
  { path: "/login", component: <Login />, exact: true },
  { path: "/home", component: <Home />, exact: true },
  { path: "/", component: <Redirect to="/login" />, exact: true },
];
