import React from "react";
import { Browse } from "./components/Browse";
import { Carousel } from "./components/Carousel/Carousel";
import { useStyles } from "./styles";

export const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Carousel />
      <Browse />
    </div>
  );
};
