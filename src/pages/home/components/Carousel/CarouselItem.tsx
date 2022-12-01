import { makeStyles } from "@material-ui/core";
import React from "react";

interface Props {
  item: {
    title: string;
    imgSrc: string;
  };
}

const useStyles = makeStyles((theme) => ({
  carouselItem: ({ imgSrc }: { imgSrc: string }) => ({
    height: 350,
    display: "flex",
    alignItems: "center",
    background: `url(${imgSrc})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
  }),
  carouselItemText: {
    fontFamily: "New Rocker",
    fontSize: 40,
    color: "white",
    textAlign: "center",
    cursor: "default",
    [theme.breakpoints.down(750)]: {
      fontSize: 30,
    },
    width: "inherit",
  },
}));

export const CarouselItem = ({ item }: Props) => {
  const classes = useStyles({ imgSrc: item.imgSrc });
  return (
    <div className={classes.carouselItem}>
      <div className={classes.carouselItemText}>{item.title}</div>
    </div>
  );
};
