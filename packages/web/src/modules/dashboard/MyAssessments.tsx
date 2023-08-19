import React from "react";
// import { Link } from "react-router-dom";
import { 
    ViewMe,
    FindEnrollments
} from "@lspr/controller";
import parse from "html-react-parser";

import TemplateAuth from "../../components/Layout/TemplateAuth";

import "../../assets/css/macbook-pro-234.css";

import * as ROUTES from "../../constants/routes";
// import { Button } from "antd";

class C extends React.PureComponent {
    render(){

        return (
            <TemplateAuth page={1}>
                <ViewMe>
                    {data => {
                        if (!data.match) {
                            return <div>Loading...</div>;
                        }

                        return (
                            <div className="macbook-pro-234 screen">
                                <div className="flex-row">
                                    <div className="group-14303">
                                        <div className="surname playfairdisplay-bold-cello-26px">Assessments</div>
                                        <div className="heres-your-schedule-for-the-day sen-normal-fuscous-gray-18px">
                                            Here are details about your tests and projects
                                        </div>
                                    </div>

                                    <a href={ROUTES.MY_COURSES} className="frame-13904">
                                        <div className="join-live-class sen-normal-white-16px">Join Live Classes</div>
                                    </a>
                                </div>

                                <div className="overlap-group5">
                                <div className="todays-schedule playfairdisplay-bold-fuscous-gray-18px">Available Assessments</div>
                                    <FindEnrollments variables={{ limit: 7, offset: 0 }}>
                                        {data => {
                                            if (!data.enrollments) {
                                                return <div>Loading...</div>;
                                            }

                                            return(
                                                <>
                                                    {data.enrollments.map(c =>
                                                        <div className="overlap-group8" key={c.id}>
                                                            <div className="group-14 border-1px-gray-nurse">
                                                                <div className="group-13987">
                                                                    <p className="fundamentals-of-public-relations-pr01 sen-bold-cello-16px">
                                                                        {c.course.title}
                                                                    </p>
                                                                    <p className="learn-how-to-create sen-normal-gray-14px">
                                                                        {parse(c.course.summary!)}
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <a href={c.course.link ? c.course.link : "/"} target="_blank" rel="noreferrer">
                                                                <div className="frame-13892">
                                                                    <div className="join-live-class sen-normal-white-16px">Begin this Test</div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )}
                                                </>
                                            );
                                        }}
                                    </FindEnrollments>
                                </div>
                            </div>
                        );
                    }}
                </ViewMe>
            </TemplateAuth>
        );
    }
};

export const MyAssessments = (C);
