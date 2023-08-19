import React from "react";
import { Link } from "react-router-dom";
// import { Button } from "antd";

import Template from "../../components/Layout/Template";

import "../../assets/css/faq-4.css";
import "../../assets/css/frame-13185.css";
import * as ROUTES from "../../constants/routes";

class C extends React.PureComponent {
    render(){
        return (
            <Template page="7">
                <div className="faq-4 screen">
                    <div className="overlap-group3">
                        <img className="group-13174" src="../../assets/img/group-13174-2@1x.svg" alt="" />
                        <div className="rectangle-14"></div>
                        
                        <div className="faq sen-normal-picton-blue-18px">FAQ</div>
                        <div className="text-445 playfairdisplay-bold-white-54px">Do You Have Questions?</div>

                        <div className="s-header">
                            <div className="about-lspr-nigeria sen-bold-cello-18px">About LSPR Nigeria</div>
                            <div className="courses sen-normal-gray-18px">Courses</div>
                            <div className="certificate sen-normal-gray-18px">Certificate</div>
                            <div className="account-and-profile sen-normal-gray-18px">Account and Profile</div>
                            <div className="payment-and-billing sen-normal-gray-18px">Payment and Billing</div>
                            <img className="vector-284" src="../../assets/img/vector-284-9@1x.svg" alt="" />
                            <img className="vector-285" src="../../assets/img/vector-285-1@2x.svg" alt="" />
                        </div>

                        <div className="c-section">
                            <div className="rectangle-672 border-1px-onahau"></div>
                            <div className="group-13432">
                                <div className="text-447 sen-bold-cello-18px">What is LSPR Nigeria</div>
                                {/* <img className="frame-2" src="../../assets/img/frame-82@2x.svg" alt="" /> */}
                            </div>
                            <div className="text-448">
                                LSPR Nigeria is a franchise of the prestigious London School of Public Relations. Much like the parent body,
                                LSPR Nigeria continues to uphold the sound level of training and tutoring clients to become professionals in
                                the public relations field.
                            </div>
                        </div>

                        <div className="group-13513">
                            <div className="group-13439">
                            <div className="text-449 playfairdisplay-bold-cello-32px">Still have a question?</div>
                            <p className="text-450 sen-normal-fuscous-gray-16px">
                                If you cant find your answer in our FAQ, you can always contact us and we’ll get back to you has soon
                                has we can.
                            </p>
                            </div>
                            <Link to={ROUTES.CONTACT}>
                                <div className="frame-13196">
                                    <div className="contact-us-1 sen-normal-white-16px">Contact Us</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Template>
        );
    }
}

export const FAQPage = C;