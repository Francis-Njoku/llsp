import React from "react";
// import { Link } from "react-router-dom";
import { 
    ViewMe,
    FindEnrollments
} from "@lspr/controller";

import TemplateAuth from "../../components/Layout/TemplateAuth";

import "../../assets/css/macbook-pro-234.css";

// import * as ROUTES from "../../constants/routes";
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
                                        <div className="surname playfairdisplay-bold-cello-26px">My Certificate</div>
                                        <div className="heres-your-schedule-for-the-day sen-normal-fuscous-gray-18px">
                                            Congratulations on completing your course!
                                        </div>
                                    </div>
                                </div>

                                <div className="overlap-group5">
                                    <div className="todays-schedule playfairdisplay-bold-fuscous-gray-18px">Recent Schedules</div>
                                    <FindEnrollments variables={{ limit: 3, offset: 0 }}>
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
                                                                        {c.course.description}
                                                                    </p>
                                                                </div>

                                                                <div className="frame-13894">
                                                                    <div className="date-registered-15-october2021 sen-normal-fuscous-gray-12px">Date Registered: {c.createdOn}</div>
                                                                </div>
                                                            </div>

                                                            <a href={c.course.link ? c.course.link : "/"} target="_blank" rel="noreferrer">
                                                                <div className="frame-13892">
                                                                    <div className="join-live-class sen-normal-white-16px">Download Now</div>
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

export const MyCertificates = (C);
