import React from "react";
import { Tooltip } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { MovieInfo } from "./MovieInfo";
import { useStyles } from "../../styles";

export const MovieInfoIcon = () => {
  const classes = useStyles();
  return (
    <Tooltip title={<MovieInfo />} placement="left-start">
      <InfoIcon className={classes.info} />
    </Tooltip>
  );
};
