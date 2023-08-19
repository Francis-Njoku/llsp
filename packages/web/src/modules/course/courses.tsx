import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { 
    FindCourses 
} from "@lspr/controller";
import { Button, Tabs } from "antd";
import parse from "html-react-parser";

import Template from "../../components/Layout/Template";

import "../../assets/css/course.css";
import "../../assets/css/frame-13185.css";
import * as ROUTES from "../../constants/routes";

const { TabPane } = Tabs;

class C extends React.PureComponent<
    RouteComponentProps<{
        courseId: string;
    }>
> {
    render(){
        return (
            <Template page="4">
                <div className="course screen">
                    <div className="overlap-group2">
                        {/* Hero */}
                        <img className="ellipse-46" src="../../assets/img/ellipse-46-3@2x.svg" alt="" />
                        <img className="group-13154" src="../../assets/img/group-13154@1x.svg" alt="" />
                        <div className="our-courses playfairdisplay-bold-white-54px">Our Courses</div>
                        
                        {/* Courses */}
                        <div className="rectangle-14"></div>
                        
                        <div className="t-section">
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="Individual" key="1">
                                    <div className="section">
                                        <FindCourses variables={{ limit: 6, offset: 0 }}>
                                            {data => {
                                                if (!data.courses) {
                                                    return <div>Loading...</div>;
                                                }

                                                return(
                                                    <>
                                                        {data.courses.map(c =>
                                                            <div className="frame-13159" key={c.id}>
                                                                <div className="frame-13178">
                                                                    <div className="frame-13177-1">
                                                                        <div className="frame-13176">
                                                                            <div className="frame-13175">
                                                                                <div 
                                                                                className="group-13399"
                                                                                style={{
                                                                                    backgroundImage: `url('${c.pictureUrl || `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`}')`,
                                                                                }}>
                                                                                    <div className="frame-12303-2">
                                                                                        <div className="surname sen-normal-white-12px">Best seller</div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="frame-13056">
                                                                                    <div className="x-day-course sen-normal-fuscous-gray-16px">{c.duration}</div>
                                                                                    <div className="frame-13053">
                                                                                        <div className="n60000 sen-normal-silver-18px">{`₦${c.price}`.replace(/\B(?=(\d{3})+(?!\d))/g,",")}</div>
                                                                                        <div className="n50000 sen-bold-picton-blue-24px">
                                                                                            <span className="sen-bold-picton-blue-24px">
                                                                                                {
                                                                                                    c.discount !== 0 ? `₦${c.discount}`.replace(/\B(?=(\d{3})+(?!\d))/g,",") : `${c.price === 0}` ? "FREE" : `₦${c.price}`.replace(/\B(?=(\d{3})+(?!\d))/g,",")
                                                                                                }
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        <img className="vector-276" src="../../assets/img/vector-276@2x.svg" alt="" />
                                                                    </div>

                                                                    <a href={`${ROUTES.COURSES}/${c.id}/detail`}>
                                                                        <div className="text-213 playfairdisplay-bold-cello-18px">{c.title}</div>
                                                                    </a>
                                                                </div>
                                                                <div className="text-2 sen-normal-gray-16px">
                                                                    {parse(c.summary!)}
                                                                </div>
                                                                </div>

                                                                <div className="frame-12303-1">
                                                                    <Button
                                                                    type="link"
                                                                    className="primary"
                                                                    href={`${ROUTES.COURSES}/${c.id}/detail`}>
                                                                        <div className="frame-12299">
                                                                            <div className="enrol-now sen-normal-white-16px">Enrol Now</div>
                                                                        </div>
                                                                    </Button>
                                                                    <div className="frame-12302-1 border-1px-primary-colour1f365d">
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
                                </TabPane>
                                <TabPane tab="Enterprise" key="2">
                                    <div className="section">
                                        <FindCourses variables={{ limit: 6, offset: 0 }}>
                                            {data => {
                                                if (!data.courses) {
                                                    return <div>Loading...</div>;
                                                }

                                                return(
                                                    <>
                                                        {data.courses.map(c =>
                                                            c.bespokeAvailability === true &&
                                                            <div className="frame-13159" key={c.id}>
                                                                <div className="frame-13178">
                                                                    <div className="frame-13177-1">
                                                                        <div className="frame-13176">
                                                                            <div className="frame-13175">
                                                                                <div 
                                                                                className="group-13399"
                                                                                style={{
                                                                                    backgroundImage: `url('${c.pictureUrl || `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`}')`,
                                                                                }}>
                                                                                    <div className="frame-12303-2">
                                                                                        <div className="surname sen-normal-white-12px">Best seller</div>
                                                                                    </div>
                                                                                </div>

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

                                                                    <a href={`${ROUTES.COURSES}/${c.id}/detail`}>
                                                                        <div className="text-213 playfairdisplay-bold-cello-18px">{c.title}</div>
                                                                    </a>
                                                                </div>
                                                                <p className="text-2 sen-normal-gray-16px">
                                                                    {parse(c.summary!)}
                                                                </p>
                                                                </div>

                                                                <div className="frame-12303-1">
                                                                    <Button
                                                                    type="link"
                                                                    className="primary"
                                                                    href={`${ROUTES.COURSES}/${c.id}/detail`}>
                                                                        <div className="frame-12299">
                                                                            <div className="enrol-now sen-normal-white-16px">Enrol Now</div>
                                                                        </div>
                                                                    </Button>
                                                                    <div className="frame-12302-1 border-1px-primary-colour1f365d">
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
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </Template>
        );
    }
};

export const CoursesPage = (C);
