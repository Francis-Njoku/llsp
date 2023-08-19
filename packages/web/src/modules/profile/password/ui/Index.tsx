import React from "react";
import { Link } from "react-router-dom";
import { ViewMe } from "@lspr/controller";
import { Form, Field, Formik, FormikHelpers as FormikActions } from "formik";
import { Button } from "antd";

import TemplateAuth from "../../../../components/Layout/TemplateAuth";

import "../../../../assets/css/macbook-pro-269.css";

import * as ROUTES from "../../../../constants/routes";

import { InputField } from "../../../shared/InputField";

export interface FormValues {
    password: string;
}

interface Props {
    initialValues?: FormValues;
    submit: (
        data: FormValues,
        actions: FormikActions<FormValues>
    ) => Promise<void>;
}

export const defaultFormValues = {
    password: "",
    password2: ""
};

class C extends React.PureComponent<
    Props
> {
    render(){
        const {
            submit,
            initialValues = defaultFormValues
        } = this.props;

        return (
            <TemplateAuth page={15}>
                <ViewMe>
                    {data => {
                        if (!data.match) {
                            return <div>Loading...</div>;
                        }

                        return (
                            <Formik<FormValues>
                            initialValues={initialValues}
                            onSubmit={submit}>
                                {({ isSubmitting, values }) => (
                                    <Form style={{ display: "flex" }}>
                                        <div className="macbook-pro-269 screen">
                                            <div className="account-settings playfairdisplay-bold-cello-26px">Account Settings</div>
                                            <div className="change-your-profile sen-normal-fuscous-gray-18px">Change your profile and account settings</div>
                                        
                                            <div className="overlap-group-container">
                                                <div className="frame-container">
                                                    <Link to={ROUTES.SETTING}>
                                                        <div className="frame-13882">
                                                            <img className="frame" src="../../assets/img/frame-215@2x.svg" alt="" />
                                                            <div className="personal-information sen-normal-gray-16px">Personal Information</div>
                                                        </div>
                                                    </Link>

                                                    <div className="frame-13880">
                                                        <img className="frame" src="../../assets/img/frame-327@2x.svg" alt="" />
                                                        <div className="password sen-normal-fuscous-gray-16px">Update Password</div>
                                                    </div>

                                                    <Link to={`${ROUTES.SETTING}/deactivate`}>
                                                        <div className="frame-13879">
                                                        <img className="frame" src="../../assets/img/frame-60@2x.svg" alt="" />
                                                        <div className="delete-account sen-normal-gray-16px">Delete Account</div>
                                                        </div>
                                                    </Link>
                                                </div>

                                                <div className="overlap-group3">
                                                    <div className="personal-information-1 playfairdisplay-bold-cello-18px">Update Password</div>
                                                    <img className="vector-284" src="../../assets/img/vector-284-11@1x.svg" alt="" />

                                                    <div className="st-name-container sen-normal-fuscous-gray-16px">
                                                        <div className="first-name">New Password</div>
                                                        <div className="last-name">Re-Enter New Password</div>
                                                    </div>

                                                    <div className="overlap-group-container-1">
                                                        <Field
                                                        name="password"
                                                        type="password"
                                                        component={InputField}
                                                        className="overlap-group6 border-1px-bon-jour-2" />
                                                        
                                                        <Field
                                                        name="password2"
                                                        type="password"
                                                        component={InputField}
                                                        className="overlap-group5 border-1px-bon-jour-2" />
                                                    </div>

                                                    <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    className="frame-12298 align-self-flex-end save-information sen-normal-white-16px"
                                                    loading={isSubmitting}>
                                                        Update Password
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        );
                    }}
                </ViewMe>
            </TemplateAuth>
        );
    }
};

export const Password = (C);
