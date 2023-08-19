import React from "react";
// import { Link } from "react-router-dom";
import { Button } from "antd";
import * as ROUTES from "../../constants/routes";

function Footer() {
  return (
    <div className="footer">
      <div className="ellipse-133-C61RwL"></div>
      <div className="rectangle-650-RkXfnW"></div>
      <div className="group-13669-RkXfnW">
          <div className="group-13665-IgbbbH">
              <div className="mask-group-fzsytj"></div>
              <div className="group-13664-fzsytj">
                  <div className="group-13661-WW7xkV">
                      <div className="text-128-uZ5ig0">Set your PR career on an upward trajectory</div>
                      <div className="frame-12247-uZ5ig0">
                        <Button
                        type="link"
                        className="primary"
                        href={ROUTES.COURSES}>
                          <div className="explore-courses-LoFXmC">Explore Courses</div>
                        </Button>
                      </div>
                  </div>

                  <div className="group-13057-WW7xkV">
                      <div className="ellipse-30-cKJZ9U"></div>
                      <div className="ellipse-31-cKJZ9U"></div>
                      <div className="ellipse-32-cKJZ9U"></div>
                      <div className="ellipse-33-cKJZ9U"></div>
                      <div className="ellipse-34-cKJZ9U"></div>
                      <div className="group-13660-cKJZ9U">
                          <div className="ellipse-35-Nc42G6"></div>
                          <div className="group-13051-Nc42G6">
                          <div className="ellipse-41-CCZygO"></div>
                          <div className="check-1-CCZygO"></div>
                          </div>
                      </div>

                      <div className="group-13655-cKJZ9U">
                          <div className="ellipse-40-0bvyyi"></div>
                          <div className="group-13052-0bvyyi">
                              <div className="ellipse-41-jUpDxQ"></div>
                              <div className="check-1-jUpDxQ"></div>
                          </div>
                      </div>

                      <div className="group-13659-cKJZ9U">
                          <div className="ellipse-39-aEs362"></div>
                          <div className="group-13053-aEs362">
                              <div className="ellipse-41-vuIPze"></div>
                              <div className="check-1-vuIPze"></div>
                          </div>
                      </div>

                      <div className="group-13657-cKJZ9U">
                          <div className="ellipse-36-arUd99"></div>
                          <div className="group-13054-arUd99">
                              <div className="ellipse-41-BiNLnG"></div>
                              <div className="check-1-BiNLnG"></div>
                          </div>
                      </div>

                      <div className="group-13658-cKJZ9U">
                          <div className="ellipse-37-njFLVg"></div>
                          <div className="group-13056-njFLVg">
                              <div className="ellipse-41-gigaHV"></div>
                              <div className="check-1-gigaHV"></div>
                          </div>
                      </div>

                      <div className="group-13656-cKJZ9U">
                          <div className="ellipse-38-mYAELU"></div>
                          <div className="group-13055-mYAELU">
                              <div className="ellipse-41-DyS25m"></div>
                              <div className="check-1-DyS25m"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="component-3-IgbbbH">
              
            <a href={ROUTES.LANDING}>
              <div className="lspr-ng-white-01-MxhzGn"></div>
            </a>
            
            <div className="rectangle-12-MxhzGn"></div>
            <div className="group-13515-MxhzGn"></div>
            <div className="text-130-MxhzGn">
                Become an expert in Public Relations and Business Branding. Learn the value and strategies of public
                relations, crisis management, and corporate social responsibility.
            </div>

            <div className="c1">
              <div className="our-links-MxhzGn">Our Links</div>
              <div className="vector-2-MxhzGn"></div>
              <div className="place-MxhzGn">
                <a href={ROUTES.LANDING}>Home</a>
              </div>
              <div className="about-us-MxhzGn">
                <a href={ROUTES.ABOUT}>About us</a>
              </div>
              <div className="text-129-MxhzGn">
                <a href={ROUTES.ENTERPRISE}>LSPR NG for Enterprise</a>
              </div>
              <div className="instructors-MxhzGn">
                <a href={ROUTES.INSTRUCTORS}>Instructors</a>
              </div>
              <div className="blog-MxhzGn">
                <a href="/">Blog</a>
              </div>
            </div>

            <div className="c2">
              <div className="group-60-MxhzGn">
                <div className="support-othr8j">Support</div>
                <div className="vector-2-othr8j"></div>
              </div>
              <div className="faq-MxhzGn">
                <a href={ROUTES.FAQ}>F.A.Q</a>
              </div>
              <div className="contact-us-MxhzGn">
                <a href={ROUTES.CONTACT}>Contact Us</a>
              </div>
            </div>

            <div className="c3">
              <div className="group-63-MxhzGn">
                <div className="place-Kfd0xj">Legal</div>
                <div className="vector-2-Kfd0xj"></div>
              </div>
              <div className="policy-privacy-MxhzGn">
                <a href={ROUTES.PRIVACY_POLICY}>Privacy Policy</a>
              </div>
              <div className="terms-and-condition-MxhzGn">
                <a href={ROUTES.TERMS_CONDITION}>Terms and Condition</a>
              </div>
            </div>
              
            <div className="group-13218-MxhzGn">
                <div className="address-mokARj">2021 LSPR Nigeria. All Rights Reserved.</div>
                <div className="vector-3-mokARj"></div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Footer;
