import * as React from "react";
import { FieldProps } from "formik";
import { Form, Slider } from "antd";

const FormItem = Form.Item;

export const SliderField: React.FC<
  FieldProps<any> & { 
    prefix: React.ReactNode;
    label?: string;
  }
> = ({
  field: { onChange, ...field },
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  ...props
}) => {
  const errorMsg = touched[field.name] && errors[field.name];

  return (
    <FormItem
      label={label}
      help={errorMsg}
      validateStatus={errorMsg ? "error" : undefined}
    >
      <Slider 
        {...field}
        {...props}
        onChange={(newValue: any) => setFieldValue(field.name, newValue)}
      />
    </FormItem>
  );
};