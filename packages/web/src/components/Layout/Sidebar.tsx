import * as React from "react";

import * as ROUTES from "../../constants/routes";

interface Props {
  currentPage: number;
}

class Sidebar extends React.PureComponent<Props>{
  render() {
    const { currentPage } = this.props;

    return (
        <div className="sidebar" id="web">
            <a href={ROUTES.LANDING}>
                <img className="lspr-ng-white-01" src="../../assets/img/lspr-ng-white-01-1@2x.png" alt="" />
            </a>
            <img className="vector-297" src="../../assets/img/vector-297@2x.svg" alt="" />

            <a href={ROUTES.DASHBOARD} className={currentPage === 11 ? 'group-13877 align-self-flex-center active-db' : 'group-13877 align-self-flex-center'}>
                <img className="frame" src="../../assets/img/frame-46@2x.svg" alt="" />
                <div className="dashboard sen-normal-white-16px">Dashboard</div>
            </a>

            <a href={ROUTES.MY_COURSES} className={currentPage === 12 ? 'group-13878 align-self-flex-center active-db' : 'group-13878 align-self-flex-center'}>
                <img className="frame" src="../../assets/img/frame-3@2x.svg" alt="" />
                <div className="my-courses sen-normal-cloud-16px">My Courses</div>
            </a>

            <a href={ROUTES.MY_ASSESSMENTS} className={currentPage === 13 ? 'group-13882 align-self-flex-center active-db' : 'group-13882 align-self-flex-center'}>
                <img className="frame" src="../../assets/img/frame-23@2x.svg" alt="" />
                <div className="my-assessment sen-normal-cloud-16px">My Assessment</div>
            </a>

            <a href={ROUTES.MY_CERTIFICATES} className={currentPage === 14 ? 'group-13883 align-self-flex-center active-db' : 'group-13883 align-self-flex-center'}>
                <img className="frame" src="../../assets/img/certificate-1-3@2x.svg" alt="" />
                <div className="my-certificate sen-normal-cloud-16px">My Certificate</div>
            </a>
            
            <a href={ROUTES.SETTING} className={currentPage === 15 ? 'group-13880 active-db' : 'group-13880'}>
                <img className="frame" src="../../assets/img/frame-5@2x.svg" alt="" />
                <div className="settings sen-normal-cloud-16px">Settings</div>
            </a >

            <a href={ROUTES.LOGOUT} className="group-13881">
                <img className="frame" src="../../assets/svg/logout.svg" alt="" />
                <div className="log-out sen-normal-cloud-16px">Logout</div>
            </a>
        </div>
    );
  }
};

export default Sidebar;
