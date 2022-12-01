import * as Yup from "yup";
const required = "This field is required";

export const registerValidationSchema = () =>
  Yup.object({
    name: Yup.string().required(required).max(50).label("Name"),
    email: Yup.string().email().required(required).label("Email"),
    password: Yup.string()
      .length(6)
      .matches(/^(?=.*[!@#$%^&*,.]).+$/, "Field must contain special character")
      .matches(/^(?=.*[A-Z]).+$/, "Field must contain uppercase character")
      .matches(/\d/, "Password must contain at least 1 number")
      .label("Password"),
  });

export const loginValidationSchema = () =>
  Yup.object({
    email: Yup.string().email().required(required).label("Email"),
    password: Yup.string().required(required).length(6).label("Password"),
  });
