import React from "react";
import { RouteComponentProps } from "react-router-dom";
// import { validUserSchema } from "@lspr/common";
import { ViewInstructor, FindCourses } from "@lspr/controller";
// import { Form, Formik, Field } from "formik";
import { Button } from "antd";
// import { toast } from 'react-toastify';
import parse from "html-react-parser";

import Template from "../../../components/Layout/Template";
// import { InputField } from "../../shared/InputField";

import "../../../assets/css/instructors-details.css";
import "../../../assets/css/frame-13185.css";
import * as ROUTES from "../../../constants/routes";

interface State {
    visible: boolean;
}

export interface PaymentValues {
    id: string;
    email: string;
    amount: number;
    reference: string;
}

class C extends React.PureComponent <
    RouteComponentProps<{
        instructorId: string;
    }> & 
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

    render(){
        const {
            match: {
                params: { instructorId },
            }
        } = this.props;

        return (
            <Template page="6">
                <div className="instructors-details screen">
                    <ViewInstructor instructorId={instructorId}>
                        {(data) => {
                            if (!data.match) {
                                return <div>...loading</div>;
                            }

                            const description = parse(data.match.description);

                            return (
                                <div className="overlap-group3">
                                    <a href={ROUTES.INSTRUCTORS}>
                                        <div className="our-instructors sen-normal-quill-gray-20px">Our Instructors</div>
                                    </a>
                                    <div className="instructors-details-1 sen-normal-white-20px">Instructors Details</div>
                                    <div className="iconly-light-arrow-right-2"></div>

                                    <img className="group-13178" src="../../../assets/img/group-13178@1x.svg" alt="" />
                                    <div className="rectangle-14"></div>

                                    <div 
                                    className="frame-11836"
                                    style={{
                                        backgroundImage: `url('${data.match.pictureUrl || `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`}')`,
                                    }}></div>

                                    <div className="group-13178-1">
                                        <div className="group-12901">
                                            <a href={data.match.linkedInUrl!} target="_blank" rel="noreferrer">
                                                <img className="frame-57" src="../../../assets/img/frame-57@2x.svg" alt="" />
                                            </a>
                                            <div className="text-225 playfairdisplay-bold-white-40px">{data.match.name}</div>
                                            <div className="text-224 valign-text-middle">{data.match.title}</div>
                                        </div>
                                    </div>

                                    <div className="text-226 sen-normal-fuscous-gray-18px">
                                        {description}
                                    </div>

                                    <div className="rel-courses">
                                        <div className="group-13347">
                                            <div className="playfairdisplay-bold-cello-36px">Related Courses</div>
                                            <img className="vector-277" src="../../../assets/img/vector-277@1x.svg" alt="" />
                                        </div>

                                        <div className="section">
                                            <FindCourses variables={{ limit: 0, offset: 0 }}>
                                                {data => {
                                                    if (!data.courses) {
                                                        return <div>Loading...</div>;
                                                    }

                                                    return(
                                                        <>
                                                            {data.courses.map(c =>
                                                                c.instructor.id === instructorId &&
                                                                <div className="frame-13173" key={c.id}>
                                                                    <div className="group-13339">
                                                                        <div className="frame-13164">
                                                                            <div className="frame-13163">
                                                                                <div 
                                                                                className="group-13338"
                                                                                style={{
                                                                                    backgroundImage: `url('${c.pictureUrl || `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`}')`,
                                                                                }}>
                                                                                    {/* <div className="ellipse-140"></div> */}
                                                                                </div>

                                                                                <div className="frame-13162">
                                                                                    <div className="x1-day-course sen-normal-fuscous-gray-16px">{c.duration}</div>
                                                                                    <div className="frame-13053">
                                                                                        <div className="n60000 sen-normal-silver-18px">{`₦${c.price}`.replace(/\B(?=(\d{3})+(?!\d))/g,",")}</div>
                                                                                        <div className="n50000 sen-bold-picton-blue-24px">
                                                                                            <span className="sen-bold-picton-blue-24px">{c.discount !== 0 ? `₦${c.discount}`.replace(/\B(?=(\d{3})+(?!\d))/g,",") : `₦${c.price}`.replace(/\B(?=(\d{3})+(?!\d))/g,",")}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <img className="vector-276" src="../../../assets/img/vector-276@2x.svg" alt="" />
                                                                        </div>

                                                                        <div className="frame-13161">
                                                                            <div className="text-227 playfairdisplay-bold-cello-18px">{c.title}</div>
                                                                            <p className="text-228 sen-normal-gray-16px">
                                                                                {parse(c.summary!)}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    <div className="frame-13166">
                                                                        <Button
                                                                        type="link"
                                                                        className="primary frame-12299"
                                                                        href={`${ROUTES.COURSES}/${c.id}/detail`}>
                                                                            <div className="enrol-now sen-normal-white-16px">Enrol now</div>
                                                                        </Button>

                                                                        <div className="frame-12302 border-1px-primary-colour1f365d">
                                                                            <div className="learn-more sen-normal-cello-16px">Learn More</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </>
                                                    );
                                                }}
                                            </FindCourses>
                                        </div>
                                    </div>
                                </div>
                            );
                        }}
                    </ViewInstructor>
                </div>
            </Template>
        );
    }
}

export const InstructorDetailPage = (C);
