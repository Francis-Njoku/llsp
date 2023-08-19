import * as React from "react";
// import { Link } from "react-router-dom";
import { Button } from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";
import { NormalizedErrorMap } from "@lspr/controller";

import { InputField } from "../../../shared/InputField";

import "../../../../assets/css/forget-password.css";

import * as ROUTES from "../../../../constants/routes";

// const FormItem = AntForm.Item;

interface FormValues {
  email: string;
}

interface Props {
  onFinish: () => void;
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <div className="container-center-horizontal">
        <div className="forget-password screen">
          <a href={ROUTES.LANDING}>
            <img className="lspr-ng-white-01" src="../../../../assets/img/lspr-ng-white-01-29@2x.png" alt="" />
          </a>
          {/* <div className="logo">Logo</div> */}
          <Form>
            <div className="overlap-group1 border-1px-onahau">
              <div className="forgot-your-password playfairdisplay-bold-cello-24px">Forgot your password?</div>
              <p className="enter-your-registere sen-normal-gray-16px">
                Enter your registered email address and we'll send you a link to reset your password.
              </p>
              
              <div className="registered-email-address sen-normal-fuscous-gray-16px">Registered Email Address</div>
              <Field
              name="email"
              placeholder="Enter your registered email address"
              component={InputField}
              readOnly="readOnly"
              onFocus={(e: any) => e.target.removeAttribute("readOnly")}
              className="overlap-group2 border-1px-greybebebe enter-your-registered-email-address sen-normal-silver-16px" />
              
              <div className="group-77">
                <Button
                type='primary'
                htmlType='submit'
                className="overlap-group">
                  <div className="continue sen-normal-white-16px">Continue</div>
                </Button>
              </div>
              
              <img className="vector-4" src="../../../../assets/img/vector-4@1x.svg" alt="" />
              <a href={ROUTES.SIGNIN} className="return-to-sign-in-page">Return to SignIn page</a>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export const ForgotPasswordView = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  }
})(C);