import React from "react";
// import { RouteComponentProps } from "react-router-dom";
// import { Button } from "antd";

import Template from "../../components/Layout/Template";

import "../../assets/css/about-us.css";
import "../../assets/css/frame-13185.css";
// import * as ROUTES from "../../constants/routes";

import adBanner1 from "../../assets/img/LSPR-TRAINING-APR-15.png";
// import adBanner from "../../assets/img/lspr-banner-1-01-1.png";
// import adBanner1 from "../../assets/img/LSPR-BANNER-2.png";
// import adBanner1 from "../../assets/img/LSPR-TRAINING-FEB-13.png";

class C extends React.PureComponent {
    render(){
        return (
            <Template page="2">
                <div className="about-us screen">
                    <div className="overlap-group8">
                        <img className="group-13147" src="../../assets/img/group-13147@1x.svg" alt="" />
                        <div className="about-lspr-nigeria playfairdisplay-bold-white-54px">About LSPR Nigeria</div>
                        <div className="text-67">
                            LSPR Nigeria is a franchise of the prestigious London School of Public Relations. Much like the parent body,
                            LSPR Nigeria continues to uphold the sound level of training and tutoring clients to become professionals in
                            the public relations field.
                        </div>
                        <div className="rectangle-14"></div>

                        <iframe
                        title='preview'
                        src='https://www.youtube.com/embed/S97GJA6RmXg'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        style={{ borderRadius: "10px" }}
                        className="group-13075"></iframe>

                        <a href="https://forms.gle/wPyjHBUqhU6sho7y7" target="_blank" rel="noreferrer nofollow">
                            <img className="lspr-banner-1-01-1-MpTUx9" src={adBanner1} alt="" />
                        </a>

                        {/* <div className="group-13075">
                            <div className="group-13005 border-1px-whiteffffff">
                                <img className="play-1" src="../../assets/img/play-1-1@2x.svg" alt="" />
                            </div>
                        </div> */}
                        <div className="e-container">
                            <div className="text-68 playfairdisplay-bold-cello-36px">Story of LSPR; The Timeline</div>

                            <div className="group-13074">
                                <div className="group-13072">
                                    <div className="group-130">
                                        <div className="number-1 sen-extra-bold-fuscous-gray-22px">1992</div>
                                        <div className="text-7 sen-normal-fuscous-gray-18px">
                                            Mr. John Dalton, founder and director of LSPR, ended his editor role at a medical journal, Current
                                            Opinion in Gastroenterology, to buy a publishing school. When the need for PR for his school arrived,
                                            he enrolled in some PR courses and realized a PR training institution market gap.
                                        </div>
                                    </div>
                                    <div className="group-13066">
                                        <div className="number-2 sen-extra-bold-fuscous-gray-22px">1993</div>
                                        <div className="text-76 sen-normal-fuscous-gray-18px">
                                            LSPR was born to breach the gap and provide quality and practical communications and branding
                                            knowledge. John launched the LSPR Diploma as an umbrella education for all PR professionals.
                                        </div>
                                    </div>
                                    <div className="group-13067">
                                        <div className="number-3 sen-extra-bold-fuscous-gray-22px">1998</div>
                                        <div className="text-77 sen-normal-fuscous-gray-18px">
                                            LSPR became the first training organisation in the UK to formally teach reputation management to PR
                                            and communications professionals. LSPR started the franchise with its diplomas and soon became a
                                            leader in the field of PR education.
                                        </div>
                                    </div>
                                </div>

                                <div className="group-13073">
                                    <div className="group-130">
                                        <div className="number-4 sen-extra-bold-fuscous-gray-22px">2008</div>
                                        <div className="text-7 sen-normal-fuscous-gray-18px">
                                        LSPR developed and introduced hybrid training that combined elements of management consultancy with
                                        more traditional aspects of training. An approach that is very popular with clients and is one of
                                        LSPR's unique value propositions.
                                        </div>
                                    </div>
                                    <div className="group-13066">
                                        <div className="number sen-extra-bold-fuscous-gray-22px">2015</div>
                                        <div className="text-76 sen-normal-fuscous-gray-18px">
                                        With a presence in over 15 countries, LSPR launched the program Development of Communication Skills.
                                        </div>
                                    </div>
                                    <div className="group-13067">
                                        <div className="number sen-extra-bold-fuscous-gray-22px">2021</div>
                                        <div className="text-77 sen-normal-fuscous-gray-18px">
                                        LSPR Nigeria franchise was launched, delivering the same signature PR and reputation management course
                                        through fully virtual classes.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="group-13568">
                                <div className="group-13565">
                                    <div className="text-70 playfairdisplay-bold-picton-blue-40px">30+</div>
                                    <div className="years-of-excellence sen-normal-cello-22px">Years of Excellence</div>
                                </div>
                                <div className="group-13566">
                                    <div className="text-71 playfairdisplay-bold-picton-blue-40px">15+</div>
                                    <div className="countries sen-normal-cello-22px">Countries</div>
                                </div>
                                <div className="group-13567">
                                    <div className="text-69 playfairdisplay-bold-picton-blue-40px">9000+</div>
                                    <div className="alumni sen-normal-cello-22px">Alumni</div>
                                </div>
                            </div>

                            <div className="rectangle-647"></div>
                            <div className="sec">
                                <div className="our-capabilities playfairdisplay-bold-cello-36px">Our Capabilities</div>

                                {/* <img className="vector-283" src="../../assets/img/vector-283@1x.svg" alt="" /> */}
                                <div className="group-13651">
                                    <img className="thinking-1" src="../../assets/img/thinking-1@2x.svg" alt="" />
                                    <div className="group-13">
                                        <div className="strategic-thinking playfairdisplay-bold-cello-18px">Strategic Thinking</div>
                                        <p className="text sen-normal-fuscous-gray-16px">
                                            <span className="sen-normal-fuscous-gray-16px">
                                                The ability to think strategically to drive organisational development is now more important than
                                                ever.
                                            </span>
                                            {/* <span className="span1">Read more</span> */}
                                        </p>
                                    </div>
                                </div>
                                <div className="group-13650">
                                    <img className="project-management-1" src="../../assets/img/project-management-1@2x.svg" alt="" />
                                    <div className="group-13">
                                        <div className="crisis-management playfairdisplay-bold-cello-18px">Crisis Management</div>
                                        <p className="text sen-normal-white-16px-2">
                                            <span className="sen-normal-fuscous-gray-16px">
                                                LSPR has advised and trained many multinationals on risk, issue and crisis management. 
                                            </span>
                                            {/* <span className="sen-bold-picton-blue-16px">Read more</span> */}
                                        </p>
                                    </div>
                                </div>
                                <div className="group-13649">
                                    <img className="digital-1" src="../../assets/img/digital-1@2x.svg" alt="" />
                                    <div className="group-13">
                                        <div className="digital-influence playfairdisplay-bold-cello-18px">Digital Influence</div>
                                        <p className="text sen-normal-white-16px-2">
                                            <span className="sen-normal-fuscous-gray-16px">
                                                Digital and social communications is the new normal. Organisations still 
                                                struggle with reach and generating the right level of brand engagement.
                                            </span>
                                            {/* <span className="sen-bold-picton-blue-16px">Read more</span> */}
                                        </p>
                                    </div>
                                </div>
                                <div className="group-13648">
                                    <img className="public-relation-1" src="../../assets/img/public-relation-1@2x.svg" alt="" />
                                    <div className="group-13595">
                                        <div className="text-82 playfairdisplay-bold-cello-18px">Public Relation and Reputation</div>
                                        <p className="text sen-normal-white-16px-2">
                                            <span className="sen-normal-fuscous-gray-16px">
                                                We develop our clients&#39; core PR and reputational abilities to help them remain 
                                                competitive. We are good at explaining and guiding them to the best PR tool.
                                            </span>
                                            {/* <span className="sen-bold-picton-blue-16px">Read more</span> */}
                                        </p>
                                    </div>
                                </div>
                                <div className="group-13647">
                                    <img className="reading-book-copy-1" src="../../assets/img/reading-book-copy-1@2x.svg" alt="" />
                                    <div className="group-13">
                                        <div className="rapid-learning">Rapid Learning</div>
                                        <p className="text sen-normal-white-16px-2">
                                            <span className="sen-normal-fuscous-gray-16px">
                                                We know that it is important to optimize our client&#39;s time during training. 
                                                The structure and delivery of our courses allow fast learning.
                                            </span>
                                            {/* <span className="sen-bold-picton-blue-16px">Read more</span> */}
                                        </p>
                                    </div>
                                </div>
                                <div className="group-13646">
                                    <img className="presentation-1" src="../../assets/img/presentation-1@2x.svg" alt="" />
                                    <div className="group-13">
                                        <div className="hybrid-training playfairdisplay-bold-cello-18px">Hybrid Training</div>
                                        <p className="text sen-normal-white-16px-2">
                                            <span className="sen-normal-fuscous-gray-16px">
                                                LSPR pioneered hybrid training by combining practical elements of management consultancy with more
                                                traditional training elements.
                                            </span>
                                            {/* <span className="sen-bold-picton-blue-16px">Read more</span> */}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="group-13608">
                                <div className="meet-the-lspr-leads playfairdisplay-bold-cello-36px">Meet The LSPR Leads</div>
                                <div className="group-13605">
                                    <div className="frame-12283">
                                        <img 
                                        className="rectangle-648" 
                                        src="https://i.imgur.com/Tcrdlb8.png" 
                                        alt="john" />
                                        <div className="frame-12282">
                                            <div className="frame-12281">
                                                <div className="name valign-text-middle playfairdisplay-bold-cello-24px">John Dalton</div>
                                                <div className="x-of-lspr valign-text-middle sen-bold-fuscous-gray-18px">CEO of LSPR Global</div>
                                            </div>
                                            <div className="group-12950 sen-normal-fuscous-gray-16px">
                                                <p className="name-1">
                                                John Dalton BSC, CBIOL, MSB, FITOL is a recognised authority on reputation management, leadership
                                                and impression management. He has further specialisms in risk, issue and crisis management.
                                                </p>
                                                <p className="text-78">
                                                With a background as a biochemist and Chartered Biologist, John&#39;s rigorous approach has
                                                attracted many to his evidence-based, holistic approach to public relations, communications and
                                                reputation management.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group-13604">
                                        <div className="group-12952">
                                            <div className="group-12951">
                                                <div className="name valign-text-middle playfairdisplay-bold-cello-24px">Susan Croft</div>
                                                <div className="x-of-lspr valign-text-middle sen-bold-fuscous-gray-18px">Co-founder of LSPR</div>
                                            </div>
                                            <div className="frame-12284 sen-normal-fuscous-gray-16px">
                                                <p className="name-1">
                                                    Susan is an experienced global trainer and a qualified executive coach. She is a member of the 
                                                    Advisory Board of the London School of Public Relations (LSPR) and has helped shape the structure 
                                                    and focus of the school's Diploma programmes as well as train on the LSPR ITOL-Approved Diploma 
                                                    course. Susan is also an international public speaker, corporate trainer and PR practitioner. She 
                                                    is also Director of Programmes for LSPR/Nigeria.
                                                </p>
                                                <p className="name-2">
                                                    As an international trainer, Susan teaches at a number of leading Universities in the USA, including 
                                                    San Jose State and USF (Tampa). She has also run courses for Georgetown, UC Berkeley, UCLA and 
                                                    Stanford and has developed one of the first on-line programmes on new trends in communications for 
                                                    San Jose State.<br/><br/>

                                                    Susan is an accredited by the Project Management Institute as project management professional and 
                                                    is a qualified NLP trainer.
                                                </p>
                                            </div>
                                        </div>
                                        <img 
                                        className="rectangle-648-1" 
                                        src="https://i.imgur.com/zLyFZm3.jpeg" 
                                        alt="susan" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Template>
        );
    }
}

export const AboutPage = C;
