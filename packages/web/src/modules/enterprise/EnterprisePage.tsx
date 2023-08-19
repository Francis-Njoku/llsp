import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { 
    FindCourses
} from "@lspr/controller";
import { Button } from "antd";
import parse from "html-react-parser";

import Template from "../../components/Layout/Template";

import "../../assets/css/home-page-enterprise.css";
import "../../assets/css/frame-13185.css";
import * as ROUTES from "../../constants/routes";

class C extends React.PureComponent <
    RouteComponentProps<{
        courseId: string;
    }>
> {
    render(){
        return (
            <Template page="6">
                <div className="home-page-enterprise screen">
                    <div className="overlap-group8">
                        <img className="group-13101" src="../../assets/img/group-13101-2@1x.svg" alt="" />
                        <img className="group-13222" src="../../assets/img/vector-283@1x.svg" alt="" />
                        
                        <div className="h-section">
                            <div className="frame-13159 border-1px-picton-blue">
                                <div className="text-148 sen-normal-white-18px">LSPR Nigeria for Enterprise</div>
                            </div>
                            <img className="rectangle-668" src="../../assets/img/rectangle-668@1x.png" alt="" />
                            <div className="text-145">Build Your Team's Critical PR Skills</div>
                            <div className="text-146">
                                Deliver on your strategic goals and beyond your clients' expectations by developing your team's core public
                                relations and reputation management skills.
                            </div>
                            <Link to={ROUTES.COURSES}>
                                <div className="group-13297">
                                    <div className="explore-courses sen-normal-white-16px">Explore Courses</div>
                                    <div className="iconly-bold-arrow-right-square">
                                        <div className="iconly-bold-arrow-right-square-1">
                                        <div className="arrow-right-square"></div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className="group-11">
                                <div className="overlap-group">
                                <img className="check-1-2" src="../../assets/img/check-1-13@2x.svg" alt="" />
                                <img className="rectangle-5" src="../../assets/img/rectangle-5-2@2x.svg" alt="" />
                                </div>
                                <div className="text-147">Classes are 100% virtual.</div>
                            </div>
                        </div>
                        
                        <div className="rectangle-12"></div>
                        <div className="h-text">
                            <div className="we-believe-that sen-bold-picton-blue-16px">WE BELIEVE THAT</div>
                            <div className="text-149 playfairdisplay-bold-cello-36px">Building the expertise of your team is essential</div>
                            <div className="group-13551">
                                <div className="group-13320">
                                    <img className="discount-1" src="../../assets/img/discount--1-@2x.svg" alt="" />
                                    <div className="group-13">
                                        <div className="discounted-rate playfairdisplay-bold-cello-20px">Discounted Rate</div>
                                        <p className="text-15 sen-normal-fuscous-gray-16px">
                                            Get discounts on courses for companies when you enrol at least eight (8) team members.
                                        </p>
                                    </div>
                                </div>

                                <div className="group-13550">
                                    <img className="group" src="../../assets/img/group@2x.svg" alt="" />
                                    <div className="group-13301">
                                        <div className="flexible-learning playfairdisplay-bold-cello-20px">Flexible Learning</div>
                                        <p className="text-150 sen-normal-fuscous-gray-16px">
                                            LSPR Nigeria’s learning system is flexible enough to fit into team members’ work schedules and
                                            lifestyles.
                                        </p>
                                    </div>
                                </div>

                                <div className="group-13324">
                                    <img className="teacher-at-the-blackboard" src="../../assets/img/teacher-at-the-blackboard@2x.svg" alt="" />
                                    <div className="group-13">
                                        <div className="text-153 playfairdisplay-bold-cello-20px">Expert Mentors &amp; Instructors</div>
                                        <p className="text-15 sen-normal-fuscous-gray-16px">
                                            Realize your PR team's full potential through training by industry-leading experts.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="rectangle-13"></div>
                        </div>

                        <div className="course-section">
                            <div className="text-159 sen-bold-picton-blue-16px">POPULAR COURSES FOR ENTERPRISE</div>
                            <div className="text-160 playfairdisplay-bold-cello-36px">
                                Our courses are curated for team excellence and business growth
                            </div>
                            <Link to={ROUTES.COURSES}>
                                <div className="frame-13160 border-1px-primary-colour1f365d">
                                <div className="view-all-courses sen-normal-cello-16px">View All Courses</div>
                                </div>
                            </Link>

                            <FindCourses variables={{ limit: 3, offset: 0 }}>
                                {data => {
                                    if (!data.courses) {
                                        return <div>Loading...</div>;
                                    }

                                    return(
                                        <>
                                            {data.courses.map(c =>
                                                c.bespokeAvailability === true &&
                                                <div className="frame-13162" key={c.id}>
                                                    <div className="frame-13178">
                                                        <div className="frame-13177-1">
                                                            <div className="frame-13176">
                                                                <div className="frame-13175">
                                                                    <div 
                                                                    className="group-13399"
                                                                    style={{
                                                                        backgroundImage: `url('${c.pictureUrl || `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`}')`,
                                                                    }}></div>
                                                                    <div className="frame-13056">
                                                                        <div className="x-day-course sen-normal-fuscous-gray-16px">{c.duration}</div>
                                                                        <div className="frame-13053">
                                                                            <div className="n60000 sen-normal-silver-18px">{`₦${c.price}`.replace(/\B(?=(\d{3})+(?!\d))/g,",")}</div>
                                                                            <div className="n50000 sen-bold-picton-blue-24px">
                                                                                <span className="sen-bold-picton-blue-24px">{c.discount !== 0 ? `₦${c.discount}`.replace(/\B(?=(\d{3})+(?!\d))/g,",") : `₦${c.price}`.replace(/\B(?=(\d{3})+(?!\d))/g,",")}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <img className="vector-276" src="../../assets/img/vector-276@2x.svg" alt="" />
                                                            </div>
                                                            <div className="text-157 playfairdisplay-bold-cello-18px">{c.title}</div>
                                                        </div>
                                                        <p className="text-158 sen-normal-gray-16px">
                                                            {parse(c.summary!)}
                                                        </p>
                                                    </div>

                                                    <div className="frame-12303">
                                                        <div className="frame-12299">
                                                            <Button
                                                            type="link"
                                                            className="primary"
                                                            href={`${ROUTES.COURSES}/${c.id}/detail`}>
                                                                <div className="enrol-team-members sen-normal-white-16px">Enrol Team</div>
                                                            </Button>
                                                        </div>

                                                        <div className="frame-12302 border-1px-primary-colour1f365d">
                                                            <div className="add-to-cart sen-normal-cello-16px">Add to Cart</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    );
                                }}
                            </FindCourses>
                        </div>

                        <div className="group-13852">
                            <div className="overlap-group1-1">
                                <div className="get-in-touch playfairdisplay-bold-white-28px">Get In Touch</div>
                                <p className="text-165 sen-normal-white-16px">
                                    Are there courses that you want for your team that are not on our list of courses? We offer bespoke
                                    training for teams and organisations.
                                </p>
                                <Link to={ROUTES.CONTACT}>
                                    <div className="group-13325">
                                        <div className="overlap-group-3">
                                            <div className="contact-us-1 sen-normal-white-16px">Contact Us</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Template>
        );
    }
};

export const EnterprisePage = (C);
