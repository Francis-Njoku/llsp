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
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
}

interface Props {
    initialValues?: FormValues;
    submit: (
        data: FormValues,
        actions: FormikActions<FormValues>
    ) => Promise<void>;
}

export const defaultFormValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: ""
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
                                                    <div className="frame-13882">
                                                        <img className="frame" src="../../assets/img/frame-58@2x.svg" alt="" />
                                                        <div className="personal-information sen-normal-fuscous-gray-16px">Personal Information</div>
                                                    </div>

                                                    <Link to={`${ROUTES.SETTING}/update-password`}>
                                                        <div className="frame-13880">
                                                            <img className="frame" src="../../assets/img/frame-59@2x.svg" alt="" />
                                                            <div className="password sen-normal-gray-16px">Update Password</div>
                                                        </div>
                                                    </Link>

                                                    <Link to={`${ROUTES.SETTING}/deactivate`}>
                                                        <div className="frame-13879">
                                                            <img className="frame" src="../../assets/img/frame-60@2x.svg" alt="" />
                                                            <div className="delete-account sen-normal-gray-16px">Delete Account</div>
                                                        </div>
                                                    </Link>
                                                </div>

                                                <div className="overlap-group3">
                                                    <div className="personal-information-1 playfairdisplay-bold-cello-18px">Personal Information</div>
                                                    <img className="vector-284" src="../../assets/img/vector-284-11@1x.svg" alt="" />
                                                    <div className="group-14922">
                                                        <div className="overlap-group-2">
                                                            <div className="ad-1">
                                                                {data.match?.firstname ?
                                                                    data.match.firstname.substring(0,2) : data.match?.email.substring(0,2)
                                                                }
                                                            </div>
                                                        </div>

                                                        {/* <div className="frame-64">
                                                            <div className="add-profile-picture sen-normal-white-16px">Add Profile Picture</div>
                                                        </div> */}
                                                    </div>

                                                    <div className="st-name-container sen-normal-fuscous-gray-16px">
                                                        <div className="first-name">First Name</div>
                                                        <div className="last-name">Last Name</div>
                                                    </div>

                                                    <div className="overlap-group-container-1">
                                                        <Field
                                                        name="firstname"
                                                        placeholder="Firstname"
                                                        component={InputField}
                                                        useNumberComponent={false} 
                                                        className="overlap-group6 border-1px-bon-jour-2" />
                                                        
                                                        <Field
                                                        name="lastname"
                                                        placeholder="Lastname"
                                                        component={InputField}
                                                        useNumberComponent={false} 
                                                        className="overlap-group5 border-1px-bon-jour-2" 
                                                        />
                                                    </div>

                                                    <div className="group-14623">
                                                        <div className="email-address sen-normal-fuscous-gray-16px">Email Address</div>
                                                        <Field
                                                        name="email"
                                                        placeholder="Email"
                                                        component={InputField}
                                                        useNumberComponent={false} 
                                                        className="overlap-group2 border-1px-bon-jour-2" />
                                                    </div>

                                                    <div className="phone-number sen-normal-fuscous-gray-16px">Phone Number</div>
                                                    <div className="x-container">
                                                        <div className="group-13889">
                                                            <div className="group-13884">
                                                                <img className="nigeria-1" src="../../assets/img/nigeria-1@2x.svg" alt="" />
                                                                <div className="text-8 sen-normal-gray-16px">+234</div>
                                                            </div>
                                                            <img className="iconly-light-arrow-down-2" src="../../assets/img/iconly-light-arrow---down-2@21.329999923706055x.png" alt="" />
                                                        </div>

                                                        <Field
                                                        name="phone"
                                                        placeholder="Phone"
                                                        component={InputField}
                                                        useNumberComponent={false} 
                                                        className="frame-13884 border-1px-bon-jour-2 phone sen-normal-silver-16px" />
                                                    </div>

                                                    <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    className="frame-12298 align-self-flex-end save-information sen-normal-white-16px"
                                                    loading={isSubmitting}>
                                                        Update Information
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

export const Setting = (C);
