import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  header: {
    height: 64,
    width: "calc(100% - 80px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 5),
    position: "fixed",
    background: "#00000060",
    fontFamily: "New Rocker",
    zIndex: 10,
    [theme.breakpoints.down(600)]: {
      fontSize: 10,
    }
  },
  authContainer: {
    display: "flex",
    alignItems: 'center',
  },
  link: {
    margin: theme.spacing(1),
    textDecoration: "none",
    textTransform: "uppercase",
    color: "white",
    padding: theme.spacing(0.5, 1),
    borderRadius: 5,
    border: "1px solid white",
    "&:hover": {
      background: "#616161",
    },
  },
  wrapper: {
    paddingTop: 64,
    height: "100vh",
  },
  welcome: {
    display: 'flex',
    fontSize: 25,
    color: "white",
    [theme.breakpoints.down(600)]: {
      fontSize: 15,
    }
  },
  userName: {
    display: 'inline-block',
    width: 250,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginLeft: '1ch'
  },
}));
