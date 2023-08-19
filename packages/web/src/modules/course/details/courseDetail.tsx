import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { validUserSchema } from "@lspr/common";
import { 
    ViewCourse,
    WithInitiatePayment, 
    withInitiatePayment 
} from "@lspr/controller";
import { Form, Formik, Field } from "formik";
import { Button, Modal, Select } from "antd";
import { usePaystackPayment } from 'react-paystack';
import parse from "html-react-parser";

import Template from "../../../components/Layout/Template";
import { InputField } from "../../shared/InputField";
import { SelectField } from "../../shared/SelectField";

import "../../../assets/css/course-details3.css";
import "../../../assets/css/frame-13185.css";
import * as ROUTES from "../../../constants/routes";

const { Option } = Select;

interface State {
    visible: boolean;
}

export interface PaymentValues {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    phone: string;
    amount: number;
    reference: string;
}

class C extends React.PureComponent <
    RouteComponentProps<{
        courseId: string;
    }> &
    WithInitiatePayment,
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
                params: { courseId },
            }
        } = this.props;

        return (
            <Template page="4">
                <div className="course-details3 screen">
                    <ViewCourse courseId={courseId}>
                        {(data) => {
                            if (!data.match) {
                                return <div>...loading</div>;
                            }

                            const learningObjectives = parse(data.match.learningObjectives);
                            const courseSummary = parse(data.match?.summary!);
                            // const courseDescription = parse(data.match.description.substr(0, 300));

                            return (
                                <div className="overlap-group3">
                                    <div className="group-13390">
                                        <Link to={ROUTES.COURSES}>
                                            <div className="courses sen-normal-quill-gray-20px">Courses</div>
                                        </Link>
                                        <div className="iconly-light-arrow-right-2"></div>
                                        <div className="course-details sen-normal-white-20px">Course Details</div>
                                    </div>

                                    <div className="group-13406">
                                        <div className="frame-13159 border-1px-picton-blue">
                                            <div className="text-628 sen-normal-white-18px">LSPR Nigeria Course</div>
                                        </div>
                                        
                                        <div className="group-13405">
                                            <div className="text-625 playfairdisplay-bold-white-40px">{data.match.title}</div>
                                            <p className="text-627 sen-normal-white-16px">
                                                {courseSummary}
                                            </p>
                                            <div className="overlap-group-2">
                                                <div className="group-13403">
                                                    <div className="frame-12303">
                                                        <div className="bestseller sen-normal-white-12px">Bestseller</div>
                                                    </div>
                                                </div>
                                                <a href={`${ROUTES.INSTRUCTORS}/${data.match.id}/detail`}>
                                                    <div className="text-626 valign-text-middle sen-bold-white-18px">{data.match.instructor.name}</div>
                                                </a>
                                                <div className="instructor valign-text-middle sen-normal-bon-jour-16px">Lead Instructor</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="frame-13113">
                                        <div className="share sen-normal-white-14px">Share</div>
                                        <img className="frame-1" src="../../assets/img/frame-13@2x.svg" alt="" />
                                    </div>
                                    
                                    {/* Course description */}
                                    <div className="rectangle-642"></div>
                                    <div className="content">
                                        <div className="group-12896">
                                            <div className="group-128">
                                                <div className="course-description playfairdisplay-bold-cello-22px">Course Description</div>
                                                <img className="vector-2" src="../../assets/img/vector-278@1x.svg" alt="" />
                                            </div>

                                            <div className="text-595 sen-normal-fuscous-gray-18px">
                                                {parse(data.match.description)}
                                            </div>

                                            {/* What you'll learn */}
                                            <div className="group-128">
                                                <div className="course-description playfairdisplay-bold-cello-22px">What You'll Learn</div>
                                                <img className="vector-2" src="../../assets/img/vector-278@1x.svg" alt="" />
                                            </div>
                                            
                                            <div className="text-595 sen-normal-fuscous-gray-18px">
                                                {learningObjectives}
                                            </div>
                                            
                                            {/* Industry Expertise */}
                                            <div className="group-128">
                                                <div className="course-description playfairdisplay-bold-cello-22px">Industry Expertise</div>
                                                <img className="vector-2" src="../../assets/img/vector-278@1x.svg" alt="" />
                                            </div>
                                            
                                            <div className="text-595 sen-normal-fuscous-gray-18px">
                                                <p>
                                                    LSPR has been delivering training since 1992 and has extensive experience in delivering training to a
                                                    broad range of clients: PR and communications agencies, financial, consumer, oil &amp; gas, and
                                                    multiple other sectors and industries.
                                                </p>
                                                <p>
                                                    All of our courses are led by industry experts who all share a common purpose: to deliver the best of
                                                    their knowledge, expertise and ideas to others. Our mantra is that transparency and ethics build the
                                                    brand's reputation. Beyond achieving the training objectives, our courses motivate individuals to
                                                    enhance their performance and add value to their organisation by understanding their team's roles
                                                    and responsibilities.
                                                </p>
                                            </div>

                                            {/* Tailored Training */}
                                            <div className="group-128">
                                                <div className="course-description playfairdisplay-bold-cello-22px">Tailored Training</div>
                                                <img className="vector-2" src="../../assets/img/vector-278@1x.svg" alt="" />
                                            </div>

                                            <div className="text-595 sen-normal-fuscous-gray-18px">
                                                <p>
                                                    All LSPR programmes are tailored to each participant's needs. Before each session, we take the
                                                    time to get to know you, providing a detailed Training Needs Analysis questionnaire that enables us to
                                                    understand your skills, level of experience, potential knowledge gaps and expectations of the
                                                    training. This means that no two sessions are the same, and your needs will always be met when
                                                    choosing our training.
                                                </p>
                                            </div>

                                            {/* Practical Learning */}
                                            <div className="group-128">
                                                <div className="course-description playfairdisplay-bold-cello-22px">Pratical Learning</div>
                                                <img className="vector-2" src="../../assets/img/vector-278@1x.svg" alt="" />
                                            </div>

                                            <div className="text-595 sen-normal-fuscous-gray-18px">
                                                With an engaging, supportive facilitation style, our training approach enables practical tools for
                                                skills transfer, improvements and real results.
                                            </div>

                                            {/* Award &amp; Recognition */}
                                            <div className="group-128">
                                                <div className="course-description playfairdisplay-bold-cello-22px">Award &amp; Regonition</div>
                                                <img className="vector-2" src="../../assets/img/vector-278@1x.svg" alt="" />
                                            </div>

                                            <div className="text-595 sen-normal-fuscous-gray-18px">
                                                LSPR Professional Development Certificate. The Certificate is recognised by the: Continuing
                                                Professional Development (CPD) Certification Service: www.cpduk.co.uk
                                            </div>

                                            {/* Assessment */}
                                            <div className="group-128">
                                                <div className="course-description playfairdisplay-bold-cello-22px">Assessment</div>
                                                <img className="vector-2" src="../../assets/img/vector-278@1x.svg" alt="" />
                                            </div>
                                            
                                            <div className="text-595 sen-normal-fuscous-gray-18px">
                                                <p>
                                                    The final award will be awarded on <b>{data.match.assessmentType}</b> set and completed during the training - a series 
                                                    of practical exercises are set for each session for the delegates to work on during their training. This is an 
                                                    effective way to try out what you have been learning and gain insight and feedback, as you progress with each 
                                                    session during the course.
                                                </p>
                                            </div>

                                            {/* Bespoke Availability */}
                                            <div className="group-128">
                                                <div className="course-description playfairdisplay-bold-cello-22px">Bespoke Availability</div>
                                                <img className="vector-2" src="../../assets/img/vector-278@1x.svg" alt="" />
                                            </div>

                                            
                                            <div className="text-595 sen-normal-fuscous-gray-18px">
                                                {data.match.bespokeAvailability === true ?
                                                    <p>
                                                        To meet your team's specific needs, this course is also offered as a bespoke exclusive programme.
                                                        Delivery options are online. Please contact LSPR Nigeria for a proposal.
                                                    </p> : 
                                                    <p>
                                                        This course is doesn't currently support bespoke offerings. Please contact LSPR Nigeria for any detail.
                                                    </p>
                                                }
                                            </div>

                                        </div>

                                        {/* <div className="group-12814">
                                            <div className="ellipse-1"></div>
                                            <div className="text sen-normal-fuscous-gray-18px">Trends and developments in communications</div>
                                        </div>
                                        <div className="group-12815">
                                            <div className="ellipse-1-1"></div>
                                            <div className="text-597 sen-normal-fuscous-gray-18px">Building reputation through trust and transparency into the brand</div>
                                        </div>
                                        <div className="group-12816">
                                            <div className="ellipse-1-1"></div>
                                            <div className="brand-development sen-normal-fuscous-gray-18px">Brand development</div>
                                        </div>
                                        <div className="group-12817">
                                            <div className="ellipse-1-1"></div>
                                            <div className="text-598 sen-normal-fuscous-gray-18px">Creating a PR strategy and developing PR campaigns</div>
                                        </div>
                                        <div className="group-12818">
                                            <div className="ellipse-1-1"></div>
                                            <div className="text-599 sen-normal-fuscous-gray-18px">Risk and issue management plans for stakeholder engagement</div>
                                        </div>
                                        <div className="group-12819">
                                            <div className="ellipse-1-1"></div>
                                            <div className="text-600 sen-normal-fuscous-gray-18px">Defending your brand and implementing effective risk and crisis plans</div>
                                        </div>
                                        <div className="group-12820">
                                            <div className="ellipse-1-1"></div>
                                            <div className="text-601 sen-normal-fuscous-gray-18px">Effective stakeholder engagement</div>
                                        </div>
                                        <div className="group-12821">
                                            <div className="ellipse-1-1"></div>
                                            <div className="text-602 sen-normal-fuscous-gray-18px">Implementing CSR and sustainability strategies</div>
                                        </div>
                                        <div className="group-12822">
                                            <div className="ellipse-1-1"></div>
                                            <div className="text-603 sen-normal-fuscous-gray-18px">Media relations and press campaigns</div>
                                        </div> */}
                                    
                                        {/* <div className="group-12881">
                                            <div className="group-12879">
                                                <div className="surname playfairdisplay-bold-cello-22px">
                                                    Day 1: Effective Branding &amp; Reputation Management Strategies
                                                </div>
                                                <img className="vector-279" src="../../asstes/img/vector-279-3@1x.svg" alt="" />
                                            </div>

                                            <div className="group-12880">
                                                <div className="group-12814-1">
                                                    <div className="ellipse-1"></div>
                                                    <div className="text sen-normal-fuscous-gray-18px">Creating effective strategies to build your product or service into a desirable brand</div>
                                                </div>
                                                <div className="group-128-1">
                                                    <div className="ellipse-1-1"></div>
                                                    <div className="text-605 sen-normal-fuscous-gray-18px">The visual elements of the brand and how it shapes our perception</div>
                                                </div>
                                                <div className="group-12816-1">
                                                    <div className="ellipse-12"></div>
                                                    <div className="text-606 sen-normal-fuscous-gray-18px">Exploring the differences between tangible (physical) and intangible (non-physical) elements of branding</div>
                                                </div>
                                                <div className="group-12854">
                                                    <div className="ellipse-1"></div>
                                                    <div className="text-607 sen-normal-fuscous-gray-18px">Delving deeper into the intangibles: how they impact the reputation</div>
                                                </div>
                                                <div className="group-12818-1">
                                                    <div className="ellipse-1-1"></div>
                                                    <div className="text-608 sen-normal-fuscous-gray-18px">Exploring reputation management strategies</div>
                                                </div>
                                                <div className="group-12819-1">
                                                    <div className="ellipse-1-1"></div>
                                                    <div className="text-609 sen-normal-fuscous-gray-18px">Strategies for positioning your brand to create loyalty and trust</div>
                                                </div>
                                                <div className="group-128-1">
                                                    <div className="ellipse-1-1"></div>
                                                    <div className="text-610 sen-normal-fuscous-gray-18px">Dealing with difficult and tricky questions</div>
                                                </div>
                                                <div className="group-128-1">
                                                    <div className="ellipse-1-1"></div>
                                                    <div className="text-611 sen-normal-fuscous-gray-18px">Framing and staying on message during an interview</div>
                                                </div>
                                                <div className="group-128-1">
                                                    <div className="ellipse-1-1"></div>
                                                    <div className="text-612 sen-normal-fuscous-gray-18px">Maintaining your organisation’s position</div>
                                                </div>
                                                <div className="group-1285">
                                                    <div className="ellipse-1-1"></div>
                                                    <div className="text-61 sen-normal-fuscous-gray-18px">Communicating in a rapidly developing situation before the full facts are known</div>
                                                </div>
                                                <div className="group-128-1">
                                                    <div className="ellipse-1-1"></div>
                                                    <div className="text-614 sen-normal-fuscous-gray-18px">Body language, tone of voice and appearance</div>
                                                </div>
                                                <div className="group-128-1">
                                                    <div className="ellipse-1-1"></div>
                                                    <div className="text-615 sen-normal-fuscous-gray-18px">Preparing for interviews for live broadcast and recorded programmes</div>
                                                </div>
                                                <div className="group-1285">
                                                    <div className="ellipse-1-1"></div>
                                                    <div className="text-61 sen-normal-fuscous-gray-18px">Role-play using crisis media interviews, individual coaching and feedback</div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                    
                                    <img className="vector-292" src="../../assets/img/vector-292@2x.svg" alt="" />
                                
                                    <div className="rectangle-670"></div>
                                    <div className="payment">
                                        <div className="group-13358">
                                            <div className="group-13357">
                                                <div className="n50000 sen-bold-cello-36px">
                                                    <span className="sen-bold-cello-36px">{
                                                        data.match.discount !== 0 ? 
                                                            `₦${data.match.discount}`.replace(/\B(?=(\d{3})+(?!\d))/g,",") : 
                                                        `${data.match.price !== 0}` ? 
                                                            `₦${data.match.price}`.replace(/\B(?=(\d{3})+(?!\d))/g,",") : "FREE"
                                                    }</span>
                                                </div>
                                                <div className="n60000 sen-normal-gray-18px">{`₦${data.match.price}`.replace(/\B(?=(\d{3})+(?!\d))/g,",")}</div>
                                            </div>
                                            <div className="x5-off-now sen-normal-gray-18px">{parseFloat((((data.match.price - data.match.discount!)/data.match.price) * 100).toFixed(2))}% off</div>
                                        </div>
                                        {
                                            data.match.price === 0 ?
                                            <Button
                                            type="link"
                                            className="primary"
                                            href="https://forms.gle/yDNVNA1aKA7S5m4f9" target="_blank" rel="noreferrer nofollow">
                                                Enrol Now
                                            </Button> : 
                                            <Button
                                            type="primary"
                                            className="primary"
                                            onClick={this.showModal}>
                                                Enroll Now
                                            </Button>
                                        }

                                        <div className="frame-13114 border-1px-primary-colour1f365d">
                                            <div className="enrol-team-members sen-normal-cello-16px">Enterprise? Enrol Team</div>
                                        </div>
                                        {/* <div className="rectangle-671"></div> */}

                                        <div className="group-13407">
                                            <div className="group-13369">
                                                <div className="group-13362">
                                                    <div className="group-13361">
                                                        <img className="frame" src="../../assets/img/frame-14@2x.svg" alt="" />
                                                    </div>
                                                    <div className="x5-day-course x100-virtual-className sen-normal-fuscous-gray-18px">
                                                        {data.match.type}
                                                    </div>
                                                </div>
                                                <div className="group-13363">
                                                    <div className="group-1283">
                                                        <img className="frame" src="../../assets/img/frame-15@2x.svg" alt="" />
                                                    </div>
                                                    <div className="x5-day-course sen-normal-fuscous-gray-18px">{data.match.duration}</div>
                                                </div>
                                                <div className="group-13364">
                                                    <div className="group-1283">
                                                        <img className="frame" src="../../assets/img/frame-16@2x.svg" alt="" />
                                                    </div>
                                                    <div className="text-629 sen-normal-fuscous-gray-18px">Certificate of completion</div>
                                                </div>
                                                <div className="group-13367">
                                                    <div className="group-1336">
                                                        <img className="iconly-light-more-square" src="../../assets/img/iconly-light-more-square@2x.svg" alt="" />
                                                    </div>
                                                    <div className="text-631 sen-normal-fuscous-gray-18px">Assignments and project</div>
                                                </div>
                                                <div className="group-13368">
                                                    <div className="group-1336">
                                                        <img className="frame-3" src="../../assets/img/frame-17@2x.svg" alt="" />
                                                    </div>
                                                    <div className="text-630 sen-normal-fuscous-gray-18px">{data.match.trainingDates}</div>
                                                </div>
                                            </div>

                                            <img className="vector-292-1" src="../../assets/img/vector-292@2x.svg" alt="" />
                                            <div className="text-632 playfairdisplay-bold-cello-24px">Get more details about this course</div>
                                            <div className="frame-12246 border-1px-primary-colour1f365d">
                                                <div className="download-brochure sen-normal-cello-16px">Download Brochure</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="group-13507-1  ---group-13508">
                                        <div className="course-instructor playfairdisplay-bold-cello-36px">Course Instructor</div>
                                        <img className="vector-277" src="../../assets/img/vector-277@1x.svg" alt="" />
                                        <div className="frame-12265">
                                            <div className="frame-12286">
                                                <div className="frame-12311">
                                                    <div className="text-633 valign-text-middle playfairdisplay-bold-cello-18px">Livingstone Magorimbo</div>
                                                    <img className="vector-284" src="../../assets/img/vector-284@2x.svg" alt="" />
                                                </div>
                                                <img className="frame-12255" src="../../assets/img/frame-12255-26@2x.svg" alt="" />
                                            </div>

                                            <div className="frame-13115">
                                                <div className="text-634 valign-text-middle sen-normal-gray-16px">C.E.O Tangerine Life</div>
                                                <a href="instructors-details.html">
                                                    <div className="group-12899">
                                                        <div className="frame-12262 border-1px-primary-colour1f365d">
                                                        <div className="read-bio sen-normal-cello-12px">Read Bio</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div> */}

                                    <Modal
                                    title={`Registering for ${data.match.title}`}
                                    visible={this.state.visible}
                                    onOk={this.handleCancel}
                                    onCancel={this.handleCancel}>
                                        <Formik<PaymentValues>
                                        validationSchema={validUserSchema}
                                        validateOnChange={false}
                                        validateOnBlur={true}
                                        initialValues={{
                                            id: data.match.id,
                                            email: "",
                                            firstname: "",
                                            lastname: "",
                                            phone: "",
                                            amount: 0.00,
                                            reference: (new Date()).getTime().toString()
                                        }}
                                        onSubmit={() => console.log("...initializing payment")}>
                                            {({ values }) => {
                                                const config = {
                                                    reference: (new Date()).getTime().toString(),
                                                    email: values.email,
                                                    amount: (values.amount * 100),
                                                    publicKey: process.env.REACT_APP_PAYSTACK_KEY,
                                                    currency: 'NGN'
                                                };
                                                
                                                const initializePayment = usePaystackPayment(config as any);

                                                const xd2 = (data.match && data.match.discount!/2)
                                                const xp2 = (data.match && data.match.price/2)
                                                
                                                const onSuccess = () => {
                                                    this.props.initiatePayment(values);
                                                    this.handleCancel();
                                                    // toast.dark("🤑 Now we're talking! Wallet successfully funded.", { autoClose: toastDuration });
                                                };
                                                
                                                const onClose = () => {
                                                    console.log("closed");
                                                    // toast.dark("🤢 Oh darn! We need you, come play.", { autoClose: toastDuration });
                                                }
                                                return (
                                                    <Form>
                                                        <div className="section">
                                                            <h4>Enter your email</h4>
                                                            <div className="">
                                                                <Field
                                                                name="email"
                                                                placeholder="Your email"
                                                                component={InputField}
                                                                useNumberComponent={false} />
                                                            </div>
                                                            <p>A confirmation email will be sent to your inbox with further details.</p>
                                                        </div>

                                                        <div className="section">
                                                            <h4>Firstname</h4>
                                                            <div className="">
                                                                <Field
                                                                name="firstname"
                                                                placeholder="Your firstname"
                                                                component={InputField}
                                                                useNumberComponent={false} />
                                                            </div>
                                                        </div>

                                                        <div className="section">
                                                            <h4>Lastname</h4>
                                                            <div className="">
                                                                <Field
                                                                name="lastname"
                                                                placeholder="Your lastname"
                                                                component={InputField}
                                                                useNumberComponent={false} />
                                                            </div>
                                                        </div>

                                                        <div className="section">
                                                            <h4>Phone</h4>
                                                            <div className="">
                                                                <Field
                                                                name="phone"
                                                                placeholder="Your phone"
                                                                component={InputField}
                                                                useNumberComponent={false} />
                                                            </div>
                                                        </div>

                                                        <div className="section">
                                                            <h4>Course Fee (Full or Partial Payment)</h4>
                                                            <div className="">
                                                                <Field
                                                                name="amount"
                                                                placeholder="Select..."
                                                                component={SelectField}>
                                                                    { data.match && 
                                                                        <>
                                                                            {data.match.discount !== 0 ? 
                                                                                <>
                                                                                    <Option key={1} value={data.match.discount!}>
                                                                                        {data.match.discount !== 0 ? data.match.discount : data.match.price}
                                                                                    </Option>
                                                                                    <Option key={2} value={xd2!}>
                                                                                        {xd2 !== 0 ? xd2 : xp2}
                                                                                    </Option>
                                                                                </> :
                                                                                <>
                                                                                <Option key={1} value={data.match.price}>
                                                                                    {data.match.discount !== 0 ? data.match.discount : data.match.price}
                                                                                </Option>
                                                                                <Option key={2} value={xp2!}>
                                                                                    {xd2 !== 0 ? xd2 : xp2}
                                                                                </Option>
                                                                            </>
                                                                            }
                                                                        </>
                                                                    }
                                                                </Field>
                                                            </div>
                                                        </div>

                                                        <div className="section" style={{ marginTop: '3rem' }}>
                                                            <Button
                                                            type="primary"
                                                            onClick={() => {initializePayment(onSuccess, onClose)}}>
                                                                Purchase Course
                                                            </Button>
                                                        </div>
                                                    </Form>
                                                );
                                            }}
                                            </Formik>
                                    </Modal>
                                </div>
                            );
                        }}
                    </ViewCourse>
                </div>
            </Template>
        );
    }
}

export const CourseDetailPage = (withInitiatePayment)(C);
