import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { 
    WithFindInstructors, 
    withFindInstructors 
} from "@lspr/controller";
import { Button } from "antd";

import Template from "../../components/Layout/Template";

import "../../assets/css/instructors.css";
import "../../assets/css/frame-13185.css";
import * as ROUTES from "../../constants/routes";

class C extends React.PureComponent<
    RouteComponentProps<{
        instructorId: string;
    }> & 
    WithFindInstructors
> {
    render(){
        // const nav = {
        //     currentPage: page
        // }
        const { instructors, loading } = this.props;

        return (
            <Template page="6">
                <div className="instructors screen">
                    <div className="overlap-group3">
                        <img className="group-13174" src="../../assets/img/group-13178@1x.svg" alt="" />
                        <div className="our-instructors playfairdisplay-bold-white-54px">Our Instructors</div>
                        <div className="rectangle-14"></div>
                        
                        <div className="instr-block">
                            {(loading || !instructors.length) && <tr style={{"textAlign": "center"}}><td colSpan={10}>No instructors available.</td></tr>}
                            {instructors.map(i => (
                                <div 
                                className="frame-12264" 
                                style={{
                                    backgroundImage: `url('${i.pictureUrl || `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`}')`,
                                }}
                                key={i.id}>
                                    <div className="frame-12286">
                                        <div className="frame-12311">
                                            <div className="text-5 valign-text-middle playfairdisplay-bold-cello-18px">{i.name}</div>
                                            <img className="vector-284" src="../../assets/img/vector-284@2x.svg" alt="" />
                                        </div>
                                        <a href={`${i.linkedInUrl}`} target="_blank" rel="noreferrer">
                                            <img className="frame-12255" src="../../assets/img/frame-12255-18@2x.svg" alt="" />
                                        </a>
                                    </div>
                                    <div className="frame-13115">
                                        <div className="text-5-1 valign-text-middle sen-normal-gray-16px">{i.title}</div>
                                        
                                        <div className="frame-12262 border-1px-primary-colour1f365d">
                                            <Button
                                            type="link"
                                            className="primary"
                                            href={`${ROUTES.INSTRUCTORS}/${i.id}/detail`}>
                                                <div className="read-bio sen-normal-cello-12px">Read Bio</div>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        

                        {/* <div className="group-13510">
                            <div className="overlap-group2">
                                <div className="enrol-now sen-normal-picton-blue-18px">ENROL NOW</div>
                                <div className="flex-row">
                                    <div className="text-560 playfairdisplay-bold-cello-30px">Have you decided to take our course?</div>
                                    <div className="text-559 sen-normal-fuscous-gray-18px">
                                    Level up your career and upskill your workforce with any of our world-class courses and authentic
                                    learning experience.
                                    </div>
                                </div>
                            
                                <div className="frame-12247">
                                    <div className="explore-courses sen-normal-white-16px">Explore courses</div>
                                </div>
                            </div>

                            <div className="component-2">
                                <div className="flex-row-1">
                                    <div className="flex-col">
                                    <img className="lspr-ng-white-01-1" src="../../assets/img/lspr-ng-white-01-28@2x.png" alt="" />
                                    <p className="text-562 sen-normal-white-14px">
                                        Become an expert in Public Relations and Business Branding. Learn the value and strategies of public
                                        relations, crisis management, and corporate social responsibility.
                                    </p>
                                    <img className="group-13515" src="../../assets/img/group-13515-23@2x.svg" alt="" />
                                    </div>
                                    <div className="flex-col-1">
                                    <div className="our-links playfairdisplay-normal-white-16px">Our Links</div>
                                    <img className="vector-2" src="../../assets/img/vector-2@2x.svg" alt="" />
                                    <div className="place-2 sen-normal-quill-gray-16px">Home</div>
                                    <div className="flex-col-item sen-normal-quill-gray-16px">About us</div>
                                    <div className="flex-col-item sen-normal-quill-gray-16px">LSPR NG for Enterprise</div>
                                    <div className="flex-col-item sen-normal-quill-gray-16px">Instructors</div>
                                    <div className="flex-col-item sen-normal-quill-gray-16px">Blog</div>
                                    </div>
                                    <div className="flex-col-2">
                                        <div className="group-6">
                                            <div className="support playfairdisplay-normal-white-16px">Support</div>
                                            <img className="vector-2" src="../../assets/img/vector-2@2x.svg" alt="" />
                                        </div>
                                        <a href="/">
                                            <div className="faq sen-normal-quill-gray-16px">F.A.Q</div>
                                        </a>
                                        <div className="contact-us-1 sen-normal-quill-gray-16px">Contact Us</div>
                                    </div>
                                    <div className="flex-col-3 sen-normal-quill-gray-16px">
                                        <div className="group-6">
                                            <div className="place-3 playfairdisplay-normal-white-16px">Legal</div>
                                            <img className="vector-2" src="../../assets/img/vector-2@2x.svg" alt="" />
                                        </div>
                                        <div className="policy-privacy">Policy Privacy</div>
                                        <div className="terms-and-condition">Terms and Condition</div>
                                    </div>
                                </div>
                                <div className="group-13218">
                                    <img className="vector-3" src="../../assets/img/vector-3@1x.svg" alt="" />
                                    <p className="address sen-normal-white-16px">2021 LSPR Nigeria. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </Template>
        );
    }
};

export const InstructorsPage = (withFindInstructors)(C);
