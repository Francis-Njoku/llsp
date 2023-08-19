import React from "react";
import { Link } from "react-router-dom";
import { ViewMe, WithDeleteAccount, withDeleteAccount } from "@lspr/controller";
import { Form, Formik, FormikHelpers as FormikActions } from "formik";
import { Button } from "antd";

import TemplateAuth from "../../../components/Layout/TemplateAuth";

import "../../../assets/css/macbook-pro-194.css";

import * as ROUTES from "../../../constants/routes";

export interface FormValues {
    id: string;
}

class C extends React.PureComponent<
    WithDeleteAccount
> {
    deleteAccount = async (
        values: FormValues,
        { setSubmitting }: FormikActions<FormValues>
      ) => {
        this.props.deleteAccount(values);
        setSubmitting(false);
    };

    render(){
        return (
            <TemplateAuth page={15}>
                <ViewMe>
                    {data => {
                        if (!data.match) {
                            return <div>Loading...</div>;
                        }  

                        return (
                            <Formik<FormValues>
                            initialValues={{ id: data.match.id }}
                            onSubmit={this.deleteAccount}>
                                {({ isSubmitting }) => (
                                    <Form style={{ display: "flex" }}>
                                        <div className="macbook-pro-194 screen">
                                            <div className="account-settings playfairdisplay-bold-cello-26px">Account Settings</div>
                                            <div className="change-your-profile sen-normal-fuscous-gray-18px">Change your profile and account settings</div>
                                        
                                            <div className="overlap-group-container">
                                                <div className="overlap-group2">
                                                    <Link to={ROUTES.SETTING}>
                                                        <div className="frame-13882">
                                                            <img className="frame" src="../../assets/img/frame-215@2x.svg" alt="" />
                                                            <div className="personal-information sen-normal-gray-16px">Personal Information</div>
                                                        </div>
                                                    </Link>

                                                    <Link to={`${ROUTES.SETTING}/update-password`}>
                                                        <div className="flex-row">
                                                            <img className="frame" src="../../assets/img/frame-59@2x.svg" alt="" />
                                                            <div className="password sen-normal-gray-16px">Update Password</div>
                                                        </div>
                                                    </Link>

                                                    <div className="flex-row">
                                                        <img className="frame" src="../../assets/img/frame-214@2x.svg" alt="" />
                                                        <div className="delete-account sen-normal-fuscous-gray-16px">Delete Account</div>
                                                    </div>
                                                </div>

                                                <div className="overlap-group-1">
                                                    <div className="delete-account-1 playfairdisplay-bold-cello-18px">Delete Account</div>
                                                    <img className="vector-284" src="../../assets/img/vector-284-11@1x.svg" alt="" />
                                                    <p className="before-deleting-your sen-normal-gray-16px">
                                                        Before deleting your account, please read the information below
                                                    </p>

                                                    <div className="group-13939">
                                                        <div className="ellipse-149"></div>
                                                        <p className="if-you-delete-your-a sen-normal-fuscous-gray-16px">
                                                            If you delete your account, all your personal information, courses taken, assessments and
                                                            cerifiticate(s) will be deleted.
                                                        </p>
                                                    </div>

                                                    <div className="group-13940">
                                                        <div className="ellipse-1"></div>
                                                        <p className="you-will-immediately sen-normal-fuscous-gray-16px">
                                                            You will immediately lose access to your account and be unable to log in.
                                                        </p>
                                                    </div>

                                                    <div className="group-13941">
                                                        <div className="ellipse-1"></div>
                                                        <p className="this-action-is-irrev sen-normal-fuscous-gray-16px">
                                                            This action is irreversible - once your data has been deleted, we cannot recover it again.
                                                        </p>
                                                    </div>

                                                    <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    className="frame-12298 align-self-flex-end delete-account-2 sen-normal-white-16px"
                                                    loading={isSubmitting}>
                                                        Delete Account
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

export const DeleteAccount = (withDeleteAccount)(C);
