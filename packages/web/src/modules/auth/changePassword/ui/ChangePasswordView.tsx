import * as React from "react";
import { changePasswordSchema } from "@lspr/common";
import { 
  NormalizedErrorMap,
  ForgotPasswordChangeMutationVariables 
} from "@lspr/controller";
import { Button } from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";

import { InputField } from "../../../shared/InputField";

import "../../../../assets/css/reset-password-1.css";

import * as ROUTES from "../../../../constants/routes";

// const FormItem = AntForm.Item;

interface FormValues {
  newPassword: string;
}

interface Props {
  onFinish: () => void;
  token: string;
  submit: (
    values: ForgotPasswordChangeMutationVariables
  ) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
    render() {
      return (
        <div className="container-center-horizontal">
          <div className="reset-password-1 screen">
            <a href={ROUTES.LANDING}>
              <img className="lspr-ng-white-01" src="../../../../assets/img/lspr-ng-white-01-29@2x.png" alt="" />
            </a>

            <Form>
              <div className="overlap-group2 border-1px-onahau">
                <div className="reset-password playfairdisplay-bold-cello-24px">Reset password</div>
                <p className="enter-a-new-password sen-normal-white-16px-2">
                  <span className="sen-normal-gray-16px">
                    Enter a new password below. Please use a password that is secure and you can easily remember.
                  </span>
                  <span className="sen-bold-cello-16px"></span>
                </p>

                <div className="new-password sen-normal-fuscous-gray-16px">New Password</div>
                <Field
                name="newPassword"
                type="password"
                placeholder="New Password"
                component={InputField}
                readOnly="readOnly"
                onFocus={(e: any) => e.target.removeAttribute("readOnly")}
                className="overlap-group3 border-1px-greybebebe" />

                {/* <div className="overlap-group4">
                  <div className="group-99">
                    <div className="confirm-new-password sen-normal-fuscous-gray-16px">Confirm New Password</div>
                    <div className="overlap-group border-1px-greybebebe">
                      <div className="confirm-new-password sen-normal-silver-16px">Confirm new password</div>
                    </div>
                  </div>
                  <div className="show-1 sen-normal-cello-16px">Show</div>
                </div> */}

                <div className="align-self-flex-center">
                  <Button
                  type="primary"
                  htmlType="submit"
                  className="overlap-group1 group-100">
                    <div className="reset-password-2 sen-normal-white-16px">Reset Password</div>
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      );
    }
  }

  export const ChangePasswordView = withFormik<Props, FormValues>({
    validationSchema: changePasswordSchema,
    mapPropsToValues: () => ({ newPassword: "" }),
    handleSubmit: async ({ newPassword }, { props, setErrors }) => {
      const errors = await props.submit({ newPassword, key: props.token });
      if (errors) {
        setErrors(errors);
      } else {
        props.onFinish();
      }
    }
  })(C);