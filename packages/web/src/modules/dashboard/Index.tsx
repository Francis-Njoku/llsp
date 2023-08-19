import React from "react";
// import { Link } from "react-router-dom";
import { 
    ViewMe,
    FindEnrollments,
    CompletedEnrollments,
    TestedEnrollments
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
                                        <div className="surname playfairdisplay-bold-cello-26px">Hello, {data.match.firstname ? data.match.firstname : data.match.email}</div>
                                        <div className="heres-your-schedule-for-the-day sen-normal-fuscous-gray-18px">
                                            Here's your schedule for the day
                                        </div>
                                    </div>

                                    <a 
                                    href={ROUTES.MY_COURSES} 
                                    className="frame-13904">
                                        <div className="join-live-class sen-normal-white-16px">Join Live Classes</div>
                                    </a>
                                </div>

                                <div className="group-14803">
                                    <FindEnrollments variables={{ limit: 0, offset: 0 }}>
                                        {data => {
                                            if (!data.enrollments) {
                                                return <div>Loading...</div>;
                                            }

                                            return(
                                                <div className="group-14802">
                                                    <div className="group-14307">
                                                        <div className="total-no-of-courses sen-normal-gray-16px">Courses Enrolled</div>
                                                        <div className="number-1 sen-bold-fuscous-gray-32px">{data.enrollments.length}</div>
                                                    </div>
                                                    <div className="group-14310">
                                                        <img className="frame" src="../../assets/img/frame-39@2x.svg" alt="" />
                                                    </div>
                                                </div>
                                            );
                                        }}
                                    </FindEnrollments>

                                    <CompletedEnrollments variables={{ limit: 0, offset: 0 }}>
                                        {data => {
                                            if (!data.enrollments) {
                                                return <div>Loading...</div>;
                                            }

                                            return(
                                                <div className="group-container-1">
                                                    <div className="group-14314">
                                                        <div className="completed-modules sen-normal-gray-16px">Completed Courses</div>
                                                        <div className="text-1 sen-bold-fuscous-gray-32px">
                                                            {data.enrollments.length}
                                                        </div>
                                                    </div>
                                                    <div className="group-14311">
                                                        <img className="frame" src="../../assets/img/frame-40@2x.svg" alt="" />
                                                    </div>
                                                </div>
                                            );
                                        }}
                                    </CompletedEnrollments>

                                    <TestedEnrollments variables={{ limit: 0, offset: 0 }}>
                                        {data => {
                                            if (!data.enrollments) {
                                                return <div>Loading...</div>;
                                            }

                                            return(
                                                <div className="group-container-2">
                                                    <div className="group-14315">
                                                        <div className="completed-tests sen-normal-gray-16px">Completed Tests</div>
                                                        <div className="text-2 sen-bold-fuscous-gray-32px">{data.enrollments.length}</div>
                                                    </div>
                                                    <div className="group-14312">
                                                        <img className="frame" src="../../assets/img/frame-41@2x.svg" alt="" />
                                                    </div>
                                                </div>
                                            );
                                        }}
                                    </TestedEnrollments>    
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
                                                                {/* <div className="frame-13895">
                                                                    <div className="module-1 sen-normal-fuscous-gray-16px">Module 1</div>
                                                                    <div className="frame-13894">
                                                                        <div className="pending sen-normal-hot-toddy-14px">Pending</div>
                                                                    </div>
                                                                </div> */}

                                                                <div className="group-13987">
                                                                    <p className="fundamentals-of-public-relations-pr01 sen-bold-cello-16px">
                                                                        {c.course.title}
                                                                    </p>
                                                                    <p className="learn-how-to-create sen-normal-gray-14px">
                                                                        {parse(c.course.description.substring(0, 300))}...
                                                                    </p>
                                                                </div>

                                                                {/* <div className="group-13997">
                                                                    <div className="rectangle-696"></div>
                                                                    <div className="percent sen-normal-fuscous-gray-16px">0%</div>
                                                                </div> */}
                                                            </div>

                                                            <div className="frame-13901">
                                                                <div className="frame-13991">
                                                                    <img className="frame-7" src="../../assets/img/frame-42@2x.svg" alt="" />
                                                                    <div className="date sen-normal-cello-14px">{c.course.trainingDates}</div>
                                                                </div>
                                                                <div className="frame-13990">
                                                                    <img className="frame-8" src="../../assets/img/frame-43@2x.svg" alt="" />
                                                                    <div className="x00-pm-wat sen-normal-cello-14px">02:00PM WAT</div>
                                                                </div>
                                                            </div>

                                                            <a href={c.course.link ? c.course.link : "/"} target="_blank" rel="noreferrer">
                                                                <div className="frame-13892">
                                                                    <div className="join-live-class sen-normal-white-16px">Join Live Class</div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )}
                                                </>
                                            );
                                        }}
                                    </FindEnrollments>
                                </div>

                                {/* <div className="overlap-group6">
                                    <div className="ongoing-assessment playfairdisplay-bold-fuscous-gray-18px">Ongoing Assessment</div>
                                    <div className="overlap-group9">
                                        <div className="group-14 border-1px-gray-nurse">
                                            <div className="frame-13895">
                                                <div className="module-2-1 sen-normal-fuscous-gray-16px">Module 2</div>
                                                <div className="frame-13894-1"><div className="ongoing sen-normal-azure-radiance-14px">Ongoing</div></div>
                                            </div>
                                            <div className="group-13987">
                                                <p className="fundamentals-of-public-relations-pr01 sen-bold-cello-16px">
                                                Fundamentals of Public Relations (PR01)
                                                </p>
                                                <p className="learn-how-to-create sen-normal-gray-14px">
                                                Learn how to create communication campaigns, manage strong brands, create a cohesive corporate
                                                identity. Also, how to predict and reduce risk, create a crisis plan and risk management strategy.
                                                </p>
                                            </div>
                                            <div className="group-14021">
                                                <div className="overlap-group-1">
                                                    <div className="rectangle-698"></div>
                                                </div>
                                                <div className="percent-1 sen-normal-fuscous-gray-16px">50%</div>
                                            </div>
                                        </div>

                                        <a href="/">
                                            <div className="frame-13903-1">
                                                <div className="continue sen-normal-white-16px">Continue</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="group-14301">
                                    <div className="overlap-group4">
                                        <div className="rectangle-636"></div>
                                        <div className="recommeded-courses playfairdisplay-bold-fuscous-gray-18px">Recommeded Courses</div>
                                        <div className="individual sen-bold-cello-18px">Individual</div>
                                        <div className="place sen-normal-gray-18px">Enterprise</div>
                                        <img className="vector-285" src="../../assets/img/vector-285-2@1x.svg" alt="" />
                                        <img className="vector-286" src="../../assets/img/vector-285@2x.svg" alt="" />
                                        <img className="frame-13178" src="../../assets/img/frame-13178-1@1x.svg" alt="" />
                                        <img className="frame-13894-2" src="../../assets/img/frame-13894-1@1x.svg" alt="" />
                                        <img className="frame-13895-1" src="../../assets/img/frame-13895-1@1x.svg" alt="" />
                                    </div>
                                </div> */}
                            </div>
                        );
                    }}
                </ViewMe>
            </TemplateAuth>
        );
    }
};

export const Dashboard = (C);
