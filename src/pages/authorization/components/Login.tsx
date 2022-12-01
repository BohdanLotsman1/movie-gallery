import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { AuthWrapper } from "../common/AuthWrapper";
import { useStyles } from "../styles";
import { Formik, Form } from "formik";
import { LoginFormValues } from "../types";
import { FormInput } from "../common/FormInput";
import { loginValidationSchema } from "../../../libs/utilities/validation/validations";
import lodash from "lodash";
import { REGISTRED_USER } from "../../../libs/utilities/constants/sessionStorage";
import { useDispatch } from "react-redux";
import { login } from "../../../libs/utilities/store/actions.ts/actions";
import { ERROR_MESSAGE } from "../../../libs/utilities/constants/constants";

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

export const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState<string>("");

  const registredUser = JSON.parse(
    sessionStorage.getItem(REGISTRED_USER) ?? "{}"
  );

  const handleSubmit = (values: LoginFormValues) => {
    const checkData = {
      email: registredUser.email,
      password: registredUser.password,
    };
    if (lodash.isEqual(checkData, values)) {
      dispatch(login(registredUser));
    } else {
      setLoginError(ERROR_MESSAGE);
      setTimeout(() => {
        setLoginError("");
      }, 3000);
    }
  };

  return (
    <AuthWrapper title={"Login"}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginValidationSchema}
      >
        {() => (
          <Form className={classes.form}>
            <FormInput fieldName="email" label={"Email:"} inputType={"email"} />
            <FormInput
              fieldName="password"
              label={"Password:"}
              inputType={"password"}
            />
            {Boolean(loginError) && (
              <div className={classes.errorMessage}>{loginError}</div>
            )}
            <Button className={classes.signInBtn} type="submit">
              sign in
            </Button>
          </Form>
        )}
      </Formik>
    </AuthWrapper>
  );
};
