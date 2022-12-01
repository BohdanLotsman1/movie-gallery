import React, { ChangeEvent } from "react";
import { useFormikContext, FormikValues } from "formik";
import { useStyles } from "../styles";
import { TextField } from "@material-ui/core";

interface Props {
  fieldName: string;
  label: string;
  inputType?: string;
  onChange?: (text: string, fieldName: string) => void;
}

export const FormInput = ({
  fieldName,
  label,
  inputType = "text",
  onChange,
}: Props) => {
  const classes = useStyles();
  const { setFieldValue, errors, values } = useFormikContext<FormikValues>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setFieldValue(fieldName, text);
    onChange && onChange(text, fieldName);
  };

  return (
    <div className={classes.fieldContainer}>
      {label}
      <TextField
        className={classes.input}
        variant="outlined"
        type={inputType}
        value={values[fieldName] ?? ""}
        error={Boolean(errors[fieldName])}
        helperText={errors[fieldName] as string}
        placeholder={`Enter ${fieldName}`}
        FormHelperTextProps={{
          classes: { root: classes.helperText },
        }}
        onChange={handleChange}
      />
    </div>
  );
};
