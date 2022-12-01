import React, { ReactNode } from "react";
import { useStyles } from "../styles";

interface Props {
  children: ReactNode;
  title: string;
}

export const AuthWrapper = ({ children, title }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.formContainer}>
        <div className={classes.title}>{title}</div>
        {children}
      </div>
    </div>
  );
};
