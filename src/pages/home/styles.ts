import { makeStyles } from "@material-ui/core";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(2),
    width: "100%",
  },
  home: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  poster: {
    width: 310,
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      width: 210,
    },
    [theme.breakpoints.down(500)]: {
      width: 150,
    },
    [theme.breakpoints.up(2000)]: {
      width: 400,
    },
    [theme.breakpoints.down(350)]: {
      width: 120,
    },
  },
  posterContainer: {
    position: "relative",
  },
  movieTitle: {
    position: "absolute",
    fontFamily: "New Rocker",
    fontSize: 25,
    top: 50,
    right: 0,
    background: "#00000060",
    color: "white",
    padding: theme.spacing(1),
    maxWidth: "80%",
    [theme.breakpoints.down(550)]: {
      fontSize: 17,
    },
    [theme.breakpoints.down(350)]: {
      fontSize: 12,
    },
  },
  movieUnderneath: {
    display: "flex",
    alignItems: "center",
    color: "white",
    fontFamily: "New Rocker",
    fontSize: 22,
    textAlign: "center",
    [theme.breakpoints.up(2000)]: {
      fontSize: 25,
    },
    [theme.breakpoints.down(550)]: {
      fontSize: 15,
    },
    [theme.breakpoints.down(350)]: {
      fontSize: 10,
    },
  },
  info: {
    position: "absolute",
    top: 10,
    left: 10,
    fontSize: 30,
    color: "white",
    stroke: "#00000060",
    cursor: "pointer",
  },
  infoContainer: {
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
  },
  infoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "New Rocker",
    fontSize: 18,
    lineHeight: 1,
    margin: theme.spacing(1, 0),
  },
  lowRating: {
    position: "absolute",
    right: 20,
    bottom: 20,
    fontSize: 60,
    color: "#ff000060",
    stroke: "red",
  },
  carousel: {
    width: "100%",
    maxHeight: 350,
    borderRadius: 10,
    marginTop: theme.spacing(2),
  },
}));
