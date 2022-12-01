import React from "react";
import { Button } from "@material-ui/core";
import { AuthWrapper } from "../common/AuthWrapper";
import { useStyles } from "../styles";
import { Formik, Form } from "formik";
import { RegisterFormValues } from "../types";

import { FormInput } from "../common/FormInput";
import { registerValidationSchema } from "../../../libs/utilities/validation/validations";
import {
  IS_LOGGED,
  REGISTER_EMAIL,
  REGISTER_NAME,
  REGISTER_PASSWORD,
  REGISTRED_USER,
} from "../../../libs/utilities/constants/sessionStorage";

export const Register = () => {
  const classes = useStyles();

  const initialValues: RegisterFormValues = {
    name: sessionStorage.getItem(REGISTER_NAME) ?? "",
    email: sessionStorage.getItem(REGISTER_EMAIL) ?? "",
    password: sessionStorage.getItem(REGISTER_PASSWORD) ?? "",
  };

  const handleSubmit = (values: RegisterFormValues) => {
    Object.keys(values).map((key) => sessionStorage.removeItem(key));
    sessionStorage.setItem(REGISTRED_USER, JSON.stringify(values));
    sessionStorage.removeItem(IS_LOGGED);
    window.location.pathname = "/login";
  };

  const onChange = (text: string, fieldName: string) => {
    sessionStorage.setItem(fieldName, text);
  };

  return (
    <AuthWrapper title={"Register"}>
      <Formik
        initialValues={initialValues}
        validationSchema={registerValidationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={classes.form}>
            <FormInput fieldName="name" label={"Name:"} onChange={onChange} />
            <FormInput fieldName="email" label={"Email:"} onChange={onChange} />
            <FormInput
              fieldName="password"
              label={"Password:"}
              onChange={onChange}
            />
            <Button
              classes={{ root: classes.signInBtn, label: classes.btnLabel }}
              type="submit"
            >
              sign up
            </Button>
          </Form>
        )}
      </Formik>
    </AuthWrapper>
  );
};
