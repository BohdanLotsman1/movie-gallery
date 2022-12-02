import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  IS_AUTHORIZED,
  REGISTER_EMAIL,
  REGISTER_NAME,
  REGISTER_PASSWORD,
} from "../libs/utilities/constants/sessionStorage";
import { logout } from "../libs/utilities/store/actions.ts/actions";
import { userSelector } from "../libs/utilities/store/selectors";
import { useStyles } from "./styles";

export const Header = () => {
  const classes = useStyles();
  const location = useLocation();
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const isAuthorized = sessionStorage.getItem(IS_AUTHORIZED);
  const isRegisterStarted =
    (sessionStorage.getItem(REGISTER_NAME) ||
      sessionStorage.getItem(REGISTER_EMAIL) ||
      sessionStorage.getItem(REGISTER_PASSWORD)) &&
    location.pathname !== "/register";

  const handleLogout = () => {
    dispatch(logout());
  };
  console.log();

  return (
    <div className={classes.header}>
      <Link to={"/"} className={classes.link}>
        Browse
      </Link>
      <div className={classes.authContainer}>
        {isAuthorized && user.email ? (
          <Button onClick={handleLogout} className={classes.btn}>
            Logout
          </Button>
        ) : (
          <>
            <Link to={"/login"} className={classes.link}>
              Sign in
            </Link>
            <Link to={"/register"} className={classes.link}>
              {isRegisterStarted ? "Resume sign up" : "Sign up"}
            </Link>
          </>
        )}
        {user.email && (
          <div className={classes.welcome}>
            Welcome <span className={classes.userName}>{user.name}</span>!
          </div>
        )}
      </div>
    </div>
  );
};
