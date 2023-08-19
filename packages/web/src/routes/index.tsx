import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthRoute, StaticRoute } from "@lspr/controller";

import { LandingPage } from "../modules/landing/LandingPage";
import { AboutPage } from "../modules/about/AboutPage";
import { EnterprisePage } from "../modules/enterprise/EnterprisePage";

import { CoursesPage } from "../modules/course/courses";
import { CourseDetailPage } from "../modules/course/details/courseDetail";

import { InstructorsPage } from "../modules/instructor/Instructors";
import { InstructorDetailPage } from "../modules/instructor/details/InstructorDetail";

import { ContactPage } from "../modules/contact/ContactPage";
import { FAQPage } from "../modules/pages/FAQPage";
import { PrivacyPolicyPage } from "../modules/pages/PrivacyPolicyPage";
import { TermsConditionPage } from "../modules/pages/TermsConditionPage";

import { Dashboard } from "../modules/dashboard/Index";
import { MyCourses } from "../modules/dashboard/MyCourses";
import { MyAssessments } from "../modules/dashboard/MyAssessments";
import { MyCertificates } from "../modules/dashboard/MyCertificates";

import { UpdateSettingConnector } from "../modules/profile/setting/UpdateAccountConnector";
import { UpdatePasswordConnector } from "../modules/profile/password/UpdatePasswordConnector";
import { DeleteAccount } from "../modules/profile/deleteAccount/DeleteAccount";

import { LoginConnector } from "../modules/auth/login/LoginConnector";
import { ForgotPasswordConnector } from "../modules/auth/forgotPassword/ForgotPasswordConnector";
import { ChangePasswordConnector } from "../modules/auth/changePassword/ChangePasswordConnector";
import { VerifyAccountPage } from "../modules/auth/verify/VerifyAccount";
import { Logout } from "../modules/auth/logout";

import * as ROUTES from "../constants/routes";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path={ROUTES.LANDING} component={LandingPage} />
      <Route exact={true} path={ROUTES.ABOUT} component={AboutPage} />
      <Route exact={true} path={ROUTES.ENTERPRISE} component={EnterprisePage} />

      <Route exact={true} path={ROUTES.COURSES} component={CoursesPage} />
      <Route exact={true} path={`${ROUTES.COURSES}/:courseId/detail`} component={CourseDetailPage} />
      
      <Route exact={true} path={ROUTES.INSTRUCTORS} component={InstructorsPage} />
      <Route exact={true} path={`${ROUTES.INSTRUCTORS}/:instructorId/detail`} component={InstructorDetailPage} />
      
      <Route exact={true} path={ROUTES.CONTACT} component={ContactPage} />

      <Route exact={true} path={ROUTES.FAQ} component={FAQPage} />
      <Route exact={true} path={ROUTES.PRIVACY_POLICY} component={PrivacyPolicyPage} />
      <Route exact={true} path={ROUTES.TERMS_CONDITION} component={TermsConditionPage} />
      
      <Route exact={true} path={ROUTES.DASHBOARD} component={Dashboard} />
      <Route exact={true} path={ROUTES.MY_COURSES} component={MyCourses} />
      <Route exact={true} path={ROUTES.MY_ASSESSMENTS} component={MyAssessments} />
      <Route exact={true} path={ROUTES.MY_CERTIFICATES} component={MyCertificates} />

      <Route exact={true} path={ROUTES.SETTING} component={UpdateSettingConnector} />
      <Route exact={true} path={`${ROUTES.SETTING}/update-password`} component={UpdatePasswordConnector} />
      <Route exact={true} path={`${ROUTES.SETTING}/deactivate`} component={DeleteAccount} />

      <StaticRoute exact={true} path={ROUTES.SIGNIN} component={LoginConnector} />
      <StaticRoute exact={true} path={ROUTES.RECOVER_PASSWORD} component={ForgotPasswordConnector} />
      <StaticRoute exact={true} path={ROUTES.CHANGE_PASSWORD} component={ChangePasswordConnector} />
      <Route path={ROUTES.VERIFY_ACCOUNT} component={VerifyAccountPage} />
      <AuthRoute path={ROUTES.LOGOUT} component={Logout} />
    </Switch>
  </BrowserRouter>
);
