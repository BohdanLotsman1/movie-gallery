import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/authorization/components/Login";
import { Register } from "../pages/authorization/components/Register";
import { Container } from "@material-ui/core";
import { Home } from "../pages/home/Home";
import { useStyles } from "./styles";

export const Wrapper = () => {
  const classes = useStyles();

  return (
    <Container className={classes.wrapper} maxWidth={"md"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};
