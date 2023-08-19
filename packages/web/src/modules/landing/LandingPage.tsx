import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { 
    FindCourses,
    WithFindInstructors,
    withFindInstructors
} from "@lspr/controller";
import { Button, Carousel } from "antd";
import { compose } from "react-apollo";

import parse from "html-react-parser";

import Template from "../../components/Layout/Template";

import "../../assets/css/home-page.css";
import * as ROUTES from "../../constants/routes";

import adBanner1 from "../../assets/img/LSPR-TRAINING-APR-15.png";
// import adBanner1 from "../../assets/img/LSPR-BANNER-2.png"
// import adBanner1 from "../../assets/img/LSPR-TRAINING-FEB-13.png";
// import adBanner from "../../assets/img/lspr-banner-1-01-1.png";
// import adBanner2 from "../../assets/img/LSPR-Training Risk-Issues.png";
// import adBanner3 from "../../assets/img/LSPR-Training-Personal-Branding.png";

class C extends React.PureComponent <
    RouteComponentProps<{
        courseId: string;
    }> &
    WithFindInstructors
> {
    render(){
        const { loading, instructors } = this.props;

        const contentStyle: React.CSSProperties = {
            height: '470px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
          };

        return (
            <Template page="1">
                <div className="home-page auto-animated screen">
                    <div className="rectangle-13-C61RwL"></div>
                    <div className="group-13101-C61RwL"></div>
                    <div className="ellipse-46-C61RwL"></div>
                    <div className="rectangle-12-C61RwL"></div>
                            
                    {/* Hero */}
                    <div className="a-container">
                        <div className="frame-1-C61RwL">
                            <div className="image-794-WzCX2w"></div>
                            <div className="group-5-WzCX2w">
                                <div className="text-89-Lj5Zk6">Classes are Covid-safe</div>
                            </div>
                        </div>

                        <div className="text-90-C61RwL">Fast-track Your Career With LSPR Certificate</div>
                        <div className="text-91-C61RwL">
                            Become an expert in Public Relations and Business Branding. Learn the value and strategies of public
                            relations, crisis management, and corporate social responsibility.
                        </div>

                        <div className="group-13327-C61RwL">
                            <div className="rectangle-4-HJCCuX"></div>
                            
                            <div className="group-13296-HJCCuX">
                                <Button
                                type="link"
                                className="primary"
                                href={ROUTES.COURSES}>
                                    <div className="explore-courses-zYfUfO">Explore Courses</div>
                                </Button>

                                <div className="iconly-bold-arrow-right-square-zYfUfO">
                                    <div className="iconly-bold-arrow-right-square-PU2sdf">
                                        <div className="arrow-right-square-72c9kU">
                                        <div className="arrow-right-square-xF4Mux"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group-11-C61RwL">
                            <div className="group-10-bAyQtV">
                                <div className="check-1-y8O0D9"></div>
                                <div className="rectangle-5-y8O0D9"></div>
                            </div>

                            <div className="text-92-bAyQtV">Classes are 100% virtual.</div>
                        </div>

                        <div className="group-12980-C61RwL">
                            <div className="rectangle-6-1eCF5t"></div>
                            <div className="rectangle-7-1eCF5t"></div>
                            <div className="rectangle-8-1eCF5t"></div>
                        </div>
                    </div>  

                    {/* Image Ad */}
                    <div className="slider-container">
                        <Carousel autoplay>
                            <div>
                                <a style={contentStyle} href="https://forms.gle/wPyjHBUqhU6sho7y7" target="_blank" rel="noreferrer nofollow">
                                    <img className="lspr-banner-1-01-1-W9BMOw" src={adBanner1} alt="" />
                                </a>
                            </div>
                        </Carousel>
                    </div>

                    {/* About */}
                    <div  className="b-container">
                        <div className="about-lspr-C61RwL">ABOUT LSPR</div>
                        <div className="text-93-C61RwL">Building professionals that would impact the world</div>

                        <div className="frame-12298-C61RwL">
                            <Button
                            type="link"
                            className="primary"
                            href={ROUTES.ABOUT}>
                                <div className="get-to-know-us-xYWGzH">Get To Know Us</div>
                            </Button>
                        </div>

                        <div className="group-13235-C61RwL">
                            <iframe
                            title='preview'
                            src='https://www.youtube.com/embed/S97GJA6RmXg'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                            style={{ borderRadius: "10px" }}></iframe>
                        </div>

                        <div className="our-certificate-C61RwL">OUR CERTIFICATE</div>
                        <div className="text-94-C61RwL">Our certificate brings value for money.</div>
                        
                        <div className="briefcase-1-C61RwL"></div>
                        <div className="advance-your-career-C61RwL">Advance Your Career</div>
                        <div className="text-125-C61RwL">
                        LSPR Nigeria’s certificate can open doors of opportunities for you where conventional certificates can not.
                        </div>
                        
                        <div className="group-13484-C61RwL">
                            <div className="group-13276-x3eSMM">
                                <div className="text-126-rUxOm9">
                                LSPR Nigeria’s certificate is recognized and acknowledged in over 50 countries across the continents.
                                </div>
                                <div className="global-recognition-rUxOm9">Global Recognition</div>
                            </div>
                            <div className="world-1-x3eSMM"></div>
                        </div>

                        <div className="group-13483-C61RwL">
                            <div className="group-13281-i9QgHQ">
                                <div className="text-127-ImTxVv">
                                Our training and certificate is accredited and recognized by the Continuing Professional Development
                                Certification Service in the UK.
                                </div>
                                <div className="cpd-certified-ImTxVv">CPD Certified</div>
                            </div>
                            <div className="vegan-1-i9QgHQ"></div>
                        </div>
                    </div>
                    
                    {/* Overview */}
                    <div  className="c-container">
                        <div className="rectangle-14-C61RwL"></div>
                        <div className="ellipse-132-C61RwL"></div>

                        <div className="group-13488-C61RwL">
                            <div className="group-13487-XYjLll">
                                <div className="frame-13134-q0R59F">
                                    <Button
                                    type="link"
                                    className="primary"
                                    href={ROUTES.COURSES}>
                                        <div className="explore-courses-JisFtS">Explore Courses</div>
                                    </Button>
                                </div>

                                <div className="group-13340-q0R59F">
                                    <div className="text-98-FxkTP9">
                                        Take the next step towards your career and professional growth. Enrol for a fully virtual PR course with
                                        a learning model and flexible payment plan that merges with your lifestyle.
                                    </div>
                                    <div className="text-99-FxkTP9">
                                        <span className="span0-kJvfko">LSPR Nigeria for </span><span className="span1-kJvfko">Individual</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rectangle-663-XYjLll"></div>
                        </div>

                        <div className="group-13490-C61RwL">
                            <div className="group-13489-uMEr36">
                                <div className="frame-13133-klj771">
                                    <Button
                                    type="link"
                                    className="primary"
                                    href={ROUTES.ENTERPRISE}>
                                        <div className="text-95-UrVQcE">Explore LSPR NG for Enterprise</div>
                                    </Button>
                                </div>
                                
                                <div className="text-96-klj771">
                                    Give your clients the best PR service by investing in your team's up-to-date public relations 
                                    training. Get enterprise discounts when you enrol with at least 8 team members.
                                </div>

                                <div className="text-97-klj771">
                                    <span className="span0-jVmQC9">LSPR Nigeria for </span>
                                    <span className="span1-jVmQC9">Enterprise</span>
                                </div>
                            </div>
                            <div className="rectangle-664-uMEr36"></div>
                        </div>
                    </div>
                    
                    {/* Courses */}
                    <div  className="d-container">
                        <div className="group-13493-C61RwL">
                            <div className="text-100-A7aWH3">POPULAR COURSES FOR INDIVIDUAL</div>
                            <div className="text-101-A7aWH3">Our courses are curated for career and business growth</div>
                        </div>

                        <div className="frame-12299-C61RwL">
                            <Button
                            type="link"
                            className="primary"
                            href={ROUTES.COURSES}>
                                <div className="view-all-courses-U7Fgkn">View All Courses</div>
                            </Button>
                        </div>

                        <div className="individual-C61RwL">Individual</div>
                        <a href={ROUTES.ENTERPRISE}>
                            <div className="place-C61RwL">Enterprise</div>
                        </a>
                        <div className="group-13266-C61RwL"></div>

                        <div className="group-13827-C61RwL">
                            <FindCourses variables={{ limit: 3, offset: 0 }}>
                                {data => {
                                    if (!data.courses) {
                                        return <div>Loading...</div>;
                                    }

                                    return(
                                        <>
                                            {data.courses.map(c =>
                                                <div className="frame-13159-1AQ6Br" key={c.id}>
                                                    <div className="frame-13179-Kl2axf">
                                                        <div className="frame-13178-JdzZut">
                                                            <div className="frame-13177-dsUINL">
                                                                <div className="frame-13176-7PYkMr">
                                                                    <div className="frame-13175-lRDYip">
                                                                        <div className="group-13399-crr1fK">
                                                                            <div 
                                                                            className="rectangle-652-g2q7Pq"
                                                                            style={{
                                                                                backgroundImage: `url('${c.pictureUrl || `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`}')`,
                                                                            }}></div>
                                                                            <div className="frame-12303-g2q7Pq">
                                                                                <div className="bestseller-g3SkSI">Bestseller</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="frame-13056-crr1fK">
                                                                            <div className="x5-day-course-F0FSoE">{c.duration}</div>
                                                                            <div className="frame-13053-F0FSoE">
                                                                                <div className="frame-13055-PPkXM2">
                                                                                    <div className="n60000-gcBhHX">{`₦${c.price}`.replace(/\B(?=(\d{3})+(?!\d))/g,",")}</div>
                                                                                    <div className="n50000-gcBhHX">
                                                                                        <span className="span1-uUXGNH">
                                                                                            {
                                                                                                c.discount !== 0 ? `₦${c.discount}`.replace(/\B(?=(\d{3})+(?!\d))/g,",") : `${c.price === 0}` ? "FREE" : `₦${c.price}`.replace(/\B(?=(\d{3})+(?!\d))/g,",")
                                                                                            }
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vector-276-lRDYip"></div>
                                                                </div>
                                                                <div className="text-119-7PYkMr">{c.title}</div>
                                                            </div>
                                                            <div className="text-120-dsUINL">
                                                                {parse(c.summary!)}
                                                            </div>
                                                        </div>
                                                        <div className="frame-12303-JdzZut">
                                                            <Button
                                                            type="link"
                                                            className="primary"
                                                            href={`${ROUTES.COURSES}/${c.id}/detail`}>
                                                                <div className="frame-12299-200Ccl">
                                                                    <div className="enrol-now-pUrxNI">Enrol Now</div>
                                                                </div>
                                                            </Button>
                                                            <div className="frame-12302-200Ccl">
                                                                <div className="add-to-cart-Sjd8ro">Add to Cart</div>
                                                            </div>
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

                    {/* Instructors */}
                    <div className="group-13497-C61RwL h-container">
                        {/* <div className="rectangle-650-76Dklj"></div> */}
                        <div className="group-13496-76Dklj">
                            <div className="group-13495-88gfwI">
                                <div className="frame-12300-xLaTaf">
                                    <Button
                                    type="link"
                                    className="primary"
                                    href={ROUTES.INSTRUCTORS}>
                                        <div className="text-110-kSN2NJ">View All Instructors</div>
                                    </Button>
                                </div>

                                <div className="group-13103-xLaTaf">
                                    <div className="group-13289-N09My2">
                                        <div className="text-111-NZUCQU">FEATURED INSTRUCTORS</div>
                                        <div className="text-112-NZUCQU">Our courses are taught by industry thought leaders</div>
                                    </div>
                                </div>
                            
                                <div className="group-13043-88gfwI">
                                    {(loading || !instructors.length) && <tr style={{"textAlign": "center"}}><td colSpan={10}>No instructors available.</td></tr>}
                                    {/* <Slider {...options}> */}
                                        {instructors.map(i => (
                                            // i.featured === true && 
                                            <div 
                                            className="frame-12264-YXU73n" 
                                            style={{
                                                backgroundImage: `url('${i.pictureUrl || `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`}')`,
                                            }}
                                            key={i.id}>
                                                <div className="frame-11836"></div>
                                                <div className="frame-12269-hhiyY6">
                                                    <div className="frame-12260-G4qhat">
                                                        <div className="frame-12285-iqqyCL">
                                                            <div className="frame-12286-nxb0LD">
                                                                <div className="frame-12312-qEmsP5">
                                                                    <div className="frame-12311-fQnZZq">
                                                                        <div className="text-102-HbqYet valign-text-middle">{i.name}</div>
                                                                        <div className="vector-284-HbqYet"></div>
                                                                    </div>
                                                                    <div className="frame-12255-fQnZZq"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-103-iqqyCL valign-text-middle">{i.title}</div>
                                                    </div>

                                                    <div className="group-12899-G4qhat">
                                                        <div className="frame-12262-xEe6zJ">
                                                            <Button
                                                            type="link"
                                                            className="primary"
                                                            href={`${ROUTES.INSTRUCTORS}/${i.id}/detail`}>
                                                                <div className="read-bio-WGTCcY">Read Bio</div>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    {/* </Slider> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial */}
                    <div className="testimonial">
                        <div className="group-13290-C61RwL h-container">
                            <div className="testimonials-nAND05">TESTIMONIALS</div>
                            <div className="text-113-nAND05">What people have to say about LSPR Nigeria</div>
                        </div>

                        <div className="t-slide">
                            <div className="frame-13050-C61RwL">
                                <div className="frame-13049-P3FWrr">
                                    <div className="ellipse-29-Pk3k9m"></div>
                                    <div className="group-13048-Pk3k9m">
                                        <div className="gbenga-adebowale-WBAGC0">Gbenga Adebowale</div>
                                        <div className="text-116-WBAGC0">Consultant Expert, ULR Limited</div>
                                    </div>
                                </div>
                            </div>

                            <div className="t-container">
                                <div className="text-117-C61RwL">LSPR Nigeria is the best!</div>
                                <div className="group-13049-C61RwL"></div>
                                <div className="text-118-C61RwL">
                                    The courses I took with LSPR Nigeria boosted my chances during my interview and got me the job.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Template>
        );
    }
};

export const LandingPage = compose(
    withFindInstructors
)(C);
