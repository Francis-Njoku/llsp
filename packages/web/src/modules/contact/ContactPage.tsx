import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { messageSchema } from "@lspr/common";
import { WithSendMessage, withSendMessage } from "@lspr/controller";
import { Form as AntForm, Button, Modal } from "antd";
import { Field, Form, Formik, FormikHelpers as FormikActions } from "formik";

import Template from "../../components/Layout/Template";

import "../../assets/css/contact-us-email-address.css";
import "../../assets/css/frame-13185.css";
// import * as ROUTES from "../../constants/routes";

import { InputField } from "../shared/InputField";
import { TextAreaField } from "../shared/TextAreaField";

import { Finish } from "./ui/finish";

interface State {
    visible: boolean;
}

const FormItem = AntForm.Item;

export interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
};

class C extends React.PureComponent<
    RouteComponentProps<{}> & 
    WithSendMessage,
    State
> {
    state = {
      visible: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    submit = async (
        values: FormValues,
        { setSubmitting, resetForm }: FormikActions<FormValues>
    ) => {
        this.props.sendMessage(values);
        setSubmitting(false);
        resetForm();
        this.showModal();
    };

    render(){
        return (
            <Formik<FormValues> 
            validationSchema={messageSchema}
            validateOnChange={false}
            validateOnBlur={true}
            initialValues={initialValues} 
            onSubmit={this.submit}>
                {({ isSubmitting, values }) => {
                    return (
                        <Template page="5">
                            <div className="contact-us-email-address screen">
                                <img className="vector-283" src="../../assets/img/vector-283-5@1x.svg" alt="" />
                                <div className="flex-row">
                                    <div className="flex-col">
                                        <div className="contact-us-1 sen-normal-picton-blue-18px">CONTACT US</div>
                                        <div className="text-166">How can we help you?</div>
                                        <p className="text-167 sen-normal-gray-16px">
                                            Did you go through our FAQs and didn’t find answers suitable to your enquiries? Then send us an email,
                                            text or call us. We’re happy to help and will reply to you promptly.
                                        </p>

                                        <div className="group-13511">
                                            <div className="frame-12296">
                                                <div className="frame border-1px-primary-colour45b5e3">
                                                    <img className="iconly-light" src="../../assets/img/iconly-light-home@21.329999923706055x.png" alt="" />
                                                </div>
                                                <div className="text-174 sen-normal-fuscous-gray-18px">
                                                    30B2, Reni-Fani Kayode, GRA,<br />Ikeja , Lagos State, Nigeria.
                                                </div>
                                            </div>
                                        
                                            <div className="frame-12295">
                                                <div className="frame border-1px-primary-colour45b5e3">
                                                    <img className="iconly-light" src="../../assets/img/iconly-light-calling@21.329999923706055x.png" alt="" />
                                                </div>
                                                <div className="phone sen-normal-fuscous-gray-18px">
                                                    +234 8136329875 <br />
                                                    +234 7069660271
                                                </div>
                                            </div>

                                            <div className="frame-12294">
                                                <div className="frame border-1px-primary-colour45b5e3">
                                                    <img className="iconly-light" src="../../assets/img/iconly-light-message@21.329999923706055x.png" alt="" />
                                                </div>
                                                <div className="text-173 sen-normal-fuscous-gray-18px">contact@lspr.ng</div>
                                            </div>
                                            <img className="group-12968" src="../../assets/img/group-12968@2x.svg" alt="" />
                                        </div>
                                    </div>

                                    <div className="overlap-group3 sen-normal-fuscous-gray-16px">
                                        <Form>
                                            <FormItem>
                                                <div className="group-42">
                                                    <div className="full-name sen-normal-fuscous-gray-16px">Full Name</div>
                                                    <Field
                                                    name="name"
                                                    className="overlap-group-3 border-1px-greybebebe text-168 sen-normal-silver-16px"
                                                    placeholder="Enter your full name"
                                                    component={InputField} 
                                                    useNumberComponent={false}/>
                                                </div>

                                                <p className="overlap-group3-item">How Do You Want Us To Contact You?</p>
                                                <div className="flex-row-1">
                                                    <div className="group-44">
                                                        <div className="group-43 border-1px-primary-colour1f365d">
                                                        <div className="rectangle-19"></div>
                                                        </div>
                                                        <div className="through-email sen-normal-gray-16px">Through Email</div>
                                                    </div>

                                                    {/* <a href="/"> */}
                                                        <div className="group-34">
                                                            <div className="rectangle-18 border-1px-greybebebe"></div>
                                                            <div className="through-phone sen-normal-gray-16px">Through Phone</div>
                                                        </div>
                                                    {/* </a> */}
                                                </div>

                                                <Field
                                                name="email"
                                                className="overlap-group border-1px-greybebebe text-171 sen-normal-silver-16px"
                                                placeholder="Email"
                                                component={InputField} 
                                                useNumberComponent={false}/>
                                            
                                                <div className="group-49">
                                                    <div className="subject sen-normal-fuscous-gray-16px">Subject</div>
                                                    <Field
                                                    name="subject"
                                                    placeholder="Your subject"
                                                    className="overlap-group border-1px-greybebebe text-169 sen-normal-silver-16px"
                                                    component={InputField} 
                                                    useNumberComponent={false}/>
                                                </div>

                                                <div className="overlap-group3-item">Message</div>
                                                <Field
                                                name="message"
                                                placeholder="Start typing message..."
                                                className="overlap-group4 border-1px-greybebebe text-170 sen-normal-silver-16px"
                                                component={TextAreaField} />

                                                <Button
                                                type="primary"
                                                htmlType="submit"
                                                className="group-51"
                                                loading={isSubmitting}>
                                                    <div className="send-message sen-normal-white-16px">Send Message</div>
                                                    <img className="iconly-bold-send" src="../../assets/img/iconly-bold-send@2x.svg" alt="" />
                                                </Button>
                                            </FormItem>
                                        </Form>
                                    </div>

                                    <Modal
                                    title="Message sent confirmation"
                                    visible={this.state.visible}
                                    onCancel={this.handleCancel}>
                                        <Finish />
                                    </Modal>
                                </div>
                            </div>
                        </Template>
                    );
                }}
            </Formik>
        );
    }
}

export const ContactPage = (
    withSendMessage
)(C);