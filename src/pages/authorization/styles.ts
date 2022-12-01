import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    fontFamily: "New Rocker",
  },
  formContainer: {
    borderRadius: 5,
    background: "#ffffff80",
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
    textAlign: "center",
    fontSize: 42,
  },
  fieldContainer: {
    fontSize: 28,
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
    alignItems: "center",
    width: "100%",
  },
  input: {
    marginLeft: "5px !important",
    "& .MuiOutlinedInput-input": {
      padding: theme.spacing(1),
      fontSize: 20,
      width: 200,
      fontFamily: "New Rocker",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  signInBtn: {
    fontSize: 14,
    width: 150,
    background: "#dadada",
    marginTop: theme.spacing(1),
    fontFamily: "New Rocker",
  },
  helperText: {
    position: "absolute",
    top: "90%",
    marginLeft: "5px !important",
    fontSize: "10px !important",
    zIndex: 10,
  },
  btnLabel: {
    fontFamily: "New Rocker",
  },
  errorMessage: {
    color: theme.palette.error.dark,
  },
}));
