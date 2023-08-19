import * as React from "react";
// import { Link } from "react-router-dom";
import { Button } from "antd";
import { loginSchema } from "@lspr/common";
import { NormalizedErrorMap } from "@lspr/controller";
import { withFormik, FormikProps, Field, Form } from "formik";

import { InputField } from "../../../shared/InputField";

import "../../../../assets/css/login-page.css";

import * as ROUTES from "../../../../constants/routes";

// const FormItem = AntForm.Item;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  onFinish: () => void;
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <div className="container-center-horizontal">
        <div className="login-page screen">
          <a href={ROUTES.LANDING}>
            <img className="lspr-ng-white-01" src="../../../../assets/img/lspr-ng-white-01-29@2x.png" alt="" />
          </a>

          <div className="overlap-group1">
            <Form>
              <div className="sign-in-to-your-account playfairdisplay-bold-cello-24px">Sign in to your account</div>
              
              <div className="overlap-group1-item sen-normal-fuscous-gray-16px">Registered Email Address</div>
              <Field
                name='email'
                placeholder='johnmusa@example.com'
                component={InputField}
                readOnly="readOnly"
                onFocus={(e: any) => e.target.removeAttribute("readOnly")}
                className="overlap-group border-1px-greybebebe enter-your-registered-email-address sen-normal-silver-16px"
              />

              <div className="overlap-group1-item sen-normal-fuscous-gray-16px">Password</div>
              <Field
                name='password'
                type='password'
                placeholder='Your Password'
                component={InputField}
                autoComplete="new-password"
                readOnly="readOnly"
                onFocus={(e: any) => e.target.removeAttribute("readOnly")}
                className="overlap-group border-1px-greybebebe enter-your-password sen-normal-silver-16px"
              />

              <div className="align-self-flex-end">
                <div className="group-77">
                  <Button
                  type='primary'
                  htmlType='submit'
                  className="overlap-group-1">
                    <div className="sign-in sen-normal-white-16px">Sign In</div>
                  </Button>
                </div>
              </div>

              <img className="vector-4" src="../../../../assets/img/vector-4@1x.svg" alt="" />
              <p className="having-issues-signin sen-normal-white-16px-2">
                <span className="sen-normal-gray-16px">Having issues signing in?</span>
                <span className="sen-normal-cello-16px">&nbsp;</span>
                <a href={ROUTES.RECOVER_PASSWORD}>
                  <span className="sen-bold-cello-16px">Reset password</span>
                </a>
              </p>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export const LoginView = withFormik<Props, FormValues>({
  validationSchema: loginSchema,
  validateOnChange: false,
  validateOnBlur: false,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  },
})(C);
