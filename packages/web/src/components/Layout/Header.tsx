import * as React from "react";
// import { Link } from "react-router-dom";
// import { ViewMe } from "@lspr/controller"
import { Button, Dropdown, Menu } from "antd";

import * as ROUTES from "../../constants/routes";

export interface Props {
  currentPage: number;
}

class C extends React.PureComponent <Props>{
  render(){
    const { currentPage } = this.props;

    const mobileMenu = (
        <Menu className="link-menu">
          <Menu.Item key={1} icon="">
            <a href={ROUTES.LANDING}>Home</a>
          </Menu.Item>
          <Menu.Item key={2} icon="">
            <a href={ROUTES.ABOUT}>About LSPR NG</a>
          </Menu.Item>
          <Menu.Item key={3} icon="">
            <a href={ROUTES.ENTERPRISE}>Enterprise</a>
          </Menu.Item>
          <Menu.Item key={4} icon="">
            <a href={ROUTES.COURSES}>Our Courses</a>
          </Menu.Item>
          <Menu.Item key={5} icon="">
            <a href={ROUTES.INSTRUCTORS}>Our Instructors</a>
          </Menu.Item>
          <Menu.Item key={6} icon="">
            <a href={ROUTES.CONTACT}>Contact us</a>
          </Menu.Item>
          <hr />
          <Menu.Item key={7} icon="">
            <a href={ROUTES.SIGNIN}>Sign In</a>
          </Menu.Item>
        </Menu>
      );
    
    return (
        <>
            <div className="header">
                <a href={ROUTES.LANDING}>
                    <div className="lspr_logo"></div>
                </a>

                <ul className="l-menu">
                    <li className={currentPage === 1 ? "home active" : "home"}>
                        <a href="/">Home</a>
                    </li>
                    <li className={currentPage === 2 ? "about-us active" : "about-us"}>
                        <a href={ROUTES.ABOUT}>About Us</a>
                    </li>
                    <li className={currentPage === 3 ? "our-courses active" : "our-courses"}>
                        <a href={ROUTES.COURSES}>Our Courses</a>
                    </li>
                    <li className={currentPage === 4 ? "enterprise active" : "enterprise"}>
                        <a href={ROUTES.ENTERPRISE}>Enterprise</a>
                    </li>
                    <li className={currentPage === 5 ? "contact-us active" : "contact-us"}>
                        <a href={ROUTES.CONTACT}>Contact Us</a>
                    </li>
                </ul>

                <div className="counter">
                    <div className="group-13375-wegFyc">
                        <div className="ellipse-141-erQpU9"></div>
                        <div className="frame-erQpU9"></div>
                    </div>

                    <div className="group-13419-wegFyc">
                        <div className="ellipse-142-tqFzYD"></div>
                        <div className="number-tqFzYD">0</div>
                    </div>
                </div>

                <div className="m-menu">
                    <Dropdown
                    className="options-menu"
                    overlay={mobileMenu}
                    placement="bottomCenter"
                    trigger={["click"]}>
                        <div className="group-13375-wegFyc">
                            <div className="frame-erQpU9"></div>
                        </div>
                    </Dropdown>
                </div>

                <div className="sign-in">
                    <div className="rectangle"></div>
                    <Button
                    type="link"
                    className="primary"
                    href="/signin">
                        Sign In
                    </Button>
                </div>
            </div>
        </>
    )
  }
}

export const NavHeader = C;