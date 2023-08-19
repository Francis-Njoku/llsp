/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ForgotPasswordChangeMutation
// ====================================================

export interface ForgotPasswordChangeMutation_forgotPasswordChange {
  __typename: "Error";
  path: string;
  message: string;
}

export interface ForgotPasswordChangeMutation {
  forgotPasswordChange: ForgotPasswordChangeMutation_forgotPasswordChange[] | null;
}

export interface ForgotPasswordChangeMutationVariables {
  newPassword: string;
  key: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CompletedEnrollmentsQuery
// ====================================================

export interface CompletedEnrollmentsQuery_completedEnrollments_course_instructor_createdBy {
  __typename: "User";
  id: string;
  firstname: string | null;
  lastname: string | null;
  email: string;
  phone: string | null;
  dob: string | null;
  gender: string | null;
  role: string;
  onboarded: boolean;
  createdOn: string;
  updatedAt: string | null;
}

export interface CompletedEnrollmentsQuery_completedEnrollments_course_instructor {
  __typename: "Instructor";
  id: string;
  pictureUrl: string | null;
  name: string;
  linkedInUrl: string | null;
  title: string;
  description: string;
  createdBy: CompletedEnrollmentsQuery_completedEnrollments_course_instructor_createdBy;
  createdOn: string;
  updatedAt: string | null;
}

export interface CompletedEnrollmentsQuery_completedEnrollments_course_createdBy {
  __typename: "User";
  id: string;
  firstname: string | null;
  lastname: string | null;
  email: string;
  phone: string | null;
}

export interface CompletedEnrollmentsQuery_completedEnrollments_course {
  __typename: "Course";
  id: string;
  pictureUrl: string | null;
  title: string;
  summary: string | null;
  description: string;
  duration: string;
  type: string;
  price: number;
  discount: number | null;
  instructor: CompletedEnrollmentsQuery_completedEnrollments_course_instructor;
  bespokeAvailability: boolean;
  assessmentType: string;
  learningObjectives: string;
  trainingDates: string;
  createdBy: CompletedEnrollmentsQuery_completedEnrollments_course_createdBy;
  createdOn: string;
  updatedAt: string | null;
}

export interface CompletedEnrollmentsQuery_completedEnrollments_owner {
  __typename: "User";
  id: string;
  email: string;
  dob: string | null;
  gender: string | null;
  role: string;
  onboarded: boolean;
  createdOn: string;
  updatedAt: string | null;
}

export interface CompletedEnrollmentsQuery_completedEnrollments {
  __typename: "Enrollment";
  id: string;
  course: CompletedEnrollmentsQuery_completedEnrollments_course;
  paid: number | null;
  completed: boolean;
  owner: CompletedEnrollmentsQuery_completedEnrollments_owner;
  createdOn: string;
  updatedAt: string | null;
}

export interface CompletedEnrollmentsQuery {
  completedEnrollments: CompletedEnrollmentsQuery_completedEnrollments[];
}

export interface CompletedEnrollmentsQueryVariables {
  offset: number;
  limit: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateCourseMutation
// ====================================================

export interface CreateCourseMutation_createCourse_errors {
  __typename: "Error";
  message: string;
  path: string;
}

export interface CreateCourseMutation_createCourse {
  __typename: "MutationResponse";
  errors: CreateCourseMutation_createCourse_errors[] | null;
}

export interface CreateCourseMutation {
  createCourse: CreateCourseMutation_createCourse;
}

export interface CreateCourseMutationVariables {
  pictureUrl?: string | null;
  title: string;
  summary?: string | null;
  description: string;
  duration: string;
  type: string;
  price: number;
  discount?: number | null;
  instructorId: string;
  bespokeAvailability: boolean;
  assessmentType: string;
  learningObjectives: string;
  trainingDates: string;
  link?: string | null;
  venue?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateInstructorMutation
// ====================================================

export interface CreateInstructorMutation_createInstructor_errors {
  __typename: "Error";
  message: string;
  path: string;
}

export interface CreateInstructorMutation_createInstructor {
  __typename: "MutationResponse";
  errors: CreateInstructorMutation_createInstructor_errors[] | null;
}

export interface CreateInstructorMutation {
  createInstructor: CreateInstructorMutation_createInstructor;
}

export interface CreateInstructorMutationVariables {
  pictureUrl?: string | null;
  name: string;
  linkedInUrl?: string | null;
  title: string;
  description: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteAccountMutation
// ====================================================

export interface DeleteAccountMutation_deleteAccount_errors {
  __typename: "Error";
  path: string;
  message: string;
}

export interface DeleteAccountMutation_deleteAccount {
  __typename: "DeleteAccountResponse";
  errors: DeleteAccountMutation_deleteAccount_errors[] | null;
  message: string | null;
}

export interface DeleteAccountMutation {
  deleteAccount: DeleteAccountMutation_deleteAccount;
}

export interface DeleteAccountMutationVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteCourseMutation
// ====================================================

export interface DeleteCourseMutation_deleteCourse_errors {
  __typename: "Error";
  message: string;
  path: string;
}

export interface DeleteCourseMutation_deleteCourse {
  __typename: "MutationResponse";
  errors: DeleteCourseMutation_deleteCourse_errors[] | null;
}

export interface DeleteCourseMutation {
  deleteCourse: DeleteCourseMutation_deleteCourse;
}

export interface DeleteCourseMutationVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteInstructorMutation
// ====================================================

export interface DeleteInstructorMutation_deleteInstructor_errors {
  __typename: "Error";
  message: string;
  path: string;
}

export interface DeleteInstructorMutation_deleteInstructor {
  __typename: "MutationResponse";
  errors: DeleteInstructorMutation_deleteInstructor_errors[] | null;
}

export interface DeleteInstructorMutation {
  deleteInstructor: DeleteInstructorMutation_deleteInstructor;
}

export interface DeleteInstructorMutationVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindCoursesQuery
// ====================================================

export interface FindCoursesQuery_findCourses_instructor_createdBy {
  __typename: "User";
  id: string;
  firstname: string | null;
  lastname: string | null;
  email: string;
  phone: string | null;
  dob: string | null;
  gender: string | null;
  role: string;
  onboarded: boolean;
  createdOn: string;
  updatedAt: string | null;
}

export interface FindCoursesQuery_findCourses_instructor {
  __typename: "Instructor";
  id: string;
  pictureUrl: string | null;
  name: string;
  linkedInUrl: string | null;
  title: string;
  description: string;
  createdBy: FindCoursesQuery_findCourses_instructor_createdBy;
  createdOn: string;
  updatedAt: string | null;
}

export interface FindCoursesQuery_findCourses_createdBy {
  __typename: "User";
  id: string;
  firstname: string | null;
  lastname: string | null;
  email: string;
  phone: string | null;
}

export interface FindCoursesQuery_findCourses {
  __typename: "Course";
  id: string;
  pictureUrl: string | null;
  title: string;
  summary: string | null;
  description: string;
  duration: string;
  type: string;
  price: number;
  discount: number | null;
  instructor: FindCoursesQuery_findCourses_instructor;
  bespokeAvailability: boolean;
  assessmentType: string;
  learningObjectives: string;
  trainingDates: string;
  link: string | null;
  venue: string | null;
  createdBy: FindCoursesQuery_findCourses_createdBy;
  createdOn: string;
  updatedAt: string | null;
}

export interface FindCoursesQuery {
  findCourses: FindCoursesQuery_findCourses[];
}

export interface FindCoursesQueryVariables {
  offset: number;
  limit: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindInstructorsQuery
// ====================================================

export interface FindInstructorsQuery_findInstructors_createdBy {
  __typename: "User";
  id: string;
  firstname: string | null;
  lastname: string | null;
  email: string;
  phone: string | null;
}

export interface FindInstructorsQuery_findInstructors {
  __typename: "Instructor";
  id: string;
  pictureUrl: string | null;
  name: string;
  linkedInUrl: string | null;
  title: string;
  description: string;
  featured: boolean;
  createdBy: FindInstructorsQuery_findInstructors_createdBy;
  createdOn: string;
  updatedAt: string | null;
}

export interface FindInstructorsQuery {
  findInstructors: FindInstructorsQuery_findInstructors[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindUsersQuery
// ====================================================

export interface FindUsersQuery_findUsers {
  __typename: "User";
  id: string;
  firstname: string | null;
  lastname: string | null;
  email: string;
  phone: string | null;
  dob: string | null;
  gender: string | null;
  role: string;
  onboarded: boolean;
  createdOn: string;
  updatedAt: string | null;
}

export interface FindUsersQuery {
  findUsers: FindUsersQuery_findUsers[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendForgotPasswordEmailMutation
// ====================================================

export interface SendForgotPasswordEmailMutation {
  sendForgotPasswordEmail: boolean | null;
}

export interface SendForgotPasswordEmailMutationVariables {
  email: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: InitiatePaymentMutation
// ====================================================

export interface InitiatePaymentMutation_initiatePayment_errors {
  __typename: "Error";
  path: string;
  message: string;
}

export interface InitiatePaymentMutation_initiatePayment {
  __typename: "PaymentResponse";
  errors: InitiatePaymentMutation_initiatePayment_errors[] | null;
  message: string | null;
}

export interface InitiatePaymentMutation {
  initiatePayment: InitiatePaymentMutation_initiatePayment;
}

export interface InitiatePaymentMutationVariables {
  id: string;
  email: string;
  firstname?: string | null;
  lastname?: string | null;
  phone?: string | null;
  amount: number;
  reference: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login_errors {
  __typename: "Error";
  path: string;
  message: string;
}

export interface LoginMutation_login {
  __typename: "LoginResponse";
  errors: LoginMutation_login_errors[] | null;
  sessionId: string | null;
}

export interface LoginMutation {
  login: LoginMutation_login;
}

export interface LoginMutationVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LogoutMutation
// ====================================================

export interface LogoutMutation {
  logout: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

export interface MeQuery_me {
  __typename: "User";
  id: string;
  firstname: string | null;
  lastname: string | null;
  email: string;
  phone: string | null;
  dob: string | null;
  gender: string | null;
  role: string;
  onboarded: boolean;
  createdOn: string;
  updatedAt: string | null;
}

export interface MeQuery {
  me: MeQuery_me | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindEnrollmentsQuery
// ====================================================

export interface FindEnrollmentsQuery_findEnrollments_course_instructor_createdBy {
  __typename: "User";
  id: string;
  firstname: string | null;
  lastname: string | null;
  email: string;
  phone: string | null;
  dob: string | null;
  gender: string | null;
  role: string;
  onboarded: boolean;
  createdOn: string;
  updatedAt: string | null;
}

export interface FindEnrollmentsQuery_findEnrollments_course_instructor {
  __typename: "Instructor";
  id: string;
  pictureUrl: string | null;
  name: string;
  linkedInUrl: string | null;
  title: string;
  description: string;
  createdBy: FindEnrollmentsQuery_findEnrollments_course_instructor_createdBy;
  createdOn: string;
  updatedAt: string | null;
}

export interface FindEnrollmentsQuery_findEnrollments_course_createdBy {
  __typename: "User";
  id: string;
  firstname: string | null;
  lastname: string | null;
  email: string;
  phone: string | null;
}

export interface FindEnrollmentsQuery_findEnrollments_course {
  __typename: "Course";
  id: string;
  pictureUrl: string | null;
  title: string;
  summary: string | null;
  description: string;
  duration: string;
  type: string;
  price: number;
  discount: number | null;
  instructor: FindEnrollmentsQuery_findEnrollments_course_instructor;
  bespokeAvailability: boolean;
  assessmentType: string;
  learningObjectives: string;
  trainingDates: string;
  link: string | null;
  venue: string | null;
  createdBy: FindEnrollmentsQuery_findEnrollments_course_createdBy;
  createdOn: string;
  updatedAt: string | null;
}

export interface FindEnrollmentsQuery_findEnrollments_owner {
  __typename: "User";
  id: string;
  email: string;
  dob: string | null;
  gender: string | null;
  role: string;
  onboarded: boolean;
  createdOn: string;
  updatedAt: string | null;
}

export interface FindEnrollmentsQuery_findEnrollments {
  __typename: "Enrollment";
  id: string;
  course: FindEnrollmentsQuery_findEnrollments_course;
  paid: number | null;
  completed: boolean;
  owner: FindEnrollmentsQuery_findEnrollments_owner;
  createdOn: string;
  updatedAt: string | null;
}

export interface FindEnrollmentsQuery {
  findEnrollments: FindEnrollmentsQuery_findEnrollments[];
}

export interface FindEnrollmentsQueryVariables {
  offset: number;
  limit: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: NewEnrollmentSubscription
// ====================================================

export interface NewEnrollmentSubscription_newEnrollment_course_instructor_createdBy {
  __typename: "User";
  id: string;
  firstname: string | null;
  lastname: string | null;
  email: string;
  phone: string | null;
  dob: string | null;
  gender: string | null;
  role: string;
  onboarded: boolean;
  createdOn: string;
  updatedAt: string | null;
}

export interface NewEnrollmentSubscription_newEnrollment_course_instructor {
  __typename: "Instructor";
  id: string;
  pictureUrl: string | null;
  name: string;
  linkedInUrl: string | null;
  title: string;
  description: string;
  createdBy: NewEnrollmentSubscription_newEnrollment_course_instructor_createdBy;
  createdOn: string;
  updatedAt: string | null;
}

export interface NewEnrollmentSubscription_newEnrollment_course_createdBy {
  __typename: "User";
  id: string;
  firstname: string | null;
  lastname: string | null;
  email: string;
  phone: string | null;
}

export interface NewEnrollmentSubscription_newEnrollment_course {
  __typename: "Course";
  id: string;
  pictureUrl: string | null;
  title: string;
  summary: string | null;
  description: string;
  duration: string;
  type: string;
  price: number;
  discount: number | null;
  instructor: NewEnrollmentSubscription_newEnrollment_course_instructor;
  bespokeAvailability: boolean;
  assessmentType: string;
  learningObjectives: string;
  trainingDates: string;
  link: string | null;
  createdBy: NewEnrollmentSubscription_newEnrollment_course_createdBy;
  createdOn: string;
  updatedAt: string | null;
}

export interface NewEnrollmentSubscription_newEnrollment_owner {
  __typename: "User";
  id: string;
  email: string;
  dob: string | null;
  gender: string | null;
  role: string;
  onboarded: boolean;
  createdOn: string;
  updatedAt: string | null;
}

export interface NewEnrollmentSubscription_newEnrollment {
  __typename: "Enrollment";
  id: string;
  course: NewEnrollmentSubscription_newEnrollment_course;
  completed: boolean;
  owner: NewEnrollmentSubscription_newEnrollment_owner;
  createdOn: string;
  updatedAt: string | null;
}

export interface NewEnrollmentSubscription {
  newEnrollment: NewEnrollmentSubscription_newEnrollment;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterMutation
// ====================================================

export interface RegisterMutation_register {
  __typename: "Error";
  path: string;
  message: string;
}

export interface RegisterMutation {
  register: RegisterMutation_register[] | null;
}

export interface RegisterMutationVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendMessageMutation
// ====================================================

export interface SendMessageMutation_sendMessage_errors {
  __typename: "Error";
  message: string;
  path: string;
}

export interface SendMessageMutation_sendMessage {
  __typename: "SendMessageResponse";
  errors: (SendMessageMutation_sendMessage_errors | null)[] | null;
}

export interface SendMessageMutation {
  sendMessage: SendMessageMutation_sendMessage;
}

export interface SendMessageMutationVariables {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TestedEnrollmentsQuery
// ====================================================

export interface TestedEnrollmentsQuery_testedEnrollments_course_instructor_createdBy {
  __typename: "User";
  id: string;
  firstname: string | null;
  lastname: string | null;
  email: string;
  phone: string | null;
  dob: string | null;
  gender: string | null;
  role: string;
  onboarded: boolean;
  createdOn: string;
  updatedAt: string | null;
}

export interface TestedEnrollmentsQuery_testedEnrollments_course_instructor {
  __typename: "Instructor";
  id: string;
  pictureUrl: string | null;
  name: string;
  linkedInUrl: string | null;
  title: string;
  description: string;
  createdBy: TestedEnrollmentsQuery_testedEnrollments_course_instructor_createdBy;
  createdOn: string;
  updatedAt: string | null;
}

export interface TestedEnrollmentsQuery_testedEnrollments_course_createdBy {
  __typename: "User";
  id: string;
  firstname: string | null;
  lastname: string | null;
  email: string;
  phone: string | null;
}

export interface TestedEnrollmentsQuery_testedEnrollments_course {
  __typename: "Course";
  id: string;
  pictureUrl: string | null;
  title: string;
  summary: string | null;
  description: string;
  duration: string;
  type: string;
  price: number;
  discount: number | null;
  instructor: TestedEnrollmentsQuery_testedEnrollments_course_instructor;
  bespokeAvailability: boolean;
  assessmentType: string;
  learningObjectives: string;
  trainingDates: string;
  link: string | null;
  venue: string | null;
  createdBy: TestedEnrollmentsQuery_testedEnrollments_course_createdBy;
  createdOn: string;
  updatedAt: string | null;
}

export interface TestedEnrollmentsQuery_testedEnrollments_owner {
  __typename: "User";
  id: string;
  email: string;
  dob: string | null;
  gender: string | null;
  role: string;
  onboarded: boolean;
  createdOn: string;
  updatedAt: string | null;
}

export interface TestedEnrollmentsQuery_testedEnrollments {
  __typename: "Enrollment";
  id: string;
  course: TestedEnrollmentsQuery_testedEnrollments_course;
  paid: number | null;
  completed: boolean;
  owner: TestedEnrollmentsQuery_testedEnrollments_owner;
  createdOn: string;
  updatedAt: string | null;
}

export interface TestedEnrollmentsQuery {
  testedEnrollments: TestedEnrollmentsQuery_testedEnrollments[];
}

export interface TestedEnrollmentsQueryVariables {
  offset: number;
  limit: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdatePasswordChangeMutation
// ====================================================

export interface UpdatePasswordChangeMutation_updatePasswordChange {
  __typename: "Error";
  path: string;
  message: string;
}

export interface UpdatePasswordChangeMutation {
  updatePasswordChange: UpdatePasswordChangeMutation_updatePasswordChange[] | null;
}

export interface UpdatePasswordChangeMutationVariables {
  newPassword: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUserMutation
// ====================================================

export interface UpdateUserMutation {
  updateUser: boolean;
}

export interface UpdateUserMutationVariables {
  input: UpdateUserInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewCourseQuery
// ====================================================

export interface ViewCourseQuery_viewCourse_instructor_createdBy {
  __typename: "User";
  id: string;
  firstname: string | null;
  lastname: string | null;
  email: string;
  phone: string | null;
  dob: string | null;
  gender: string | null;
  role: string;
  onboarded: boolean;
  createdOn: string;
  updatedAt: string | null;
}

export interface ViewCourseQuery_viewCourse_instructor {
  __typename: "Instructor";
  id: string;
  pictureUrl: string | null;
  name: string;
  linkedInUrl: string | null;
  title: string;
  description: string;
  createdBy: ViewCourseQuery_viewCourse_instructor_createdBy;
  createdOn: string;
  updatedAt: string | null;
}

export interface ViewCourseQuery_viewCourse_createdBy {
  __typename: "User";
  id: string;
  firstname: string | null;
  lastname: string | null;
  email: string;
  phone: string | null;
}

export interface ViewCourseQuery_viewCourse {
  __typename: "Course";
  id: string;
  pictureUrl: string | null;
  title: string;
  summary: string | null;
  description: string;
  duration: string;
  type: string;
  price: number;
  discount: number | null;
  instructor: ViewCourseQuery_viewCourse_instructor;
  bespokeAvailability: boolean;
  assessmentType: string;
  learningObjectives: string;
  trainingDates: string;
  link: string | null;
  venue: string | null;
  createdBy: ViewCourseQuery_viewCourse_createdBy;
  createdOn: string;
  updatedAt: string | null;
}

export interface ViewCourseQuery {
  viewCourse: ViewCourseQuery_viewCourse | null;
}

export interface ViewCourseQueryVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewInstructorQuery
// ====================================================

export interface ViewInstructorQuery_viewInstructor_createdBy {
  __typename: "User";
  id: string;
  firstname: string | null;
  lastname: string | null;
  email: string;
  phone: string | null;
}

export interface ViewInstructorQuery_viewInstructor {
  __typename: "Instructor";
  id: string;
  pictureUrl: string | null;
  name: string;
  linkedInUrl: string | null;
  title: string;
  description: string;
  featured: boolean;
  createdBy: ViewInstructorQuery_viewInstructor_createdBy;
  createdOn: string;
  updatedAt: string | null;
}

export interface ViewInstructorQuery {
  viewInstructor: ViewInstructorQuery_viewInstructor | null;
}

export interface ViewInstructorQueryVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewUserQuery
// ====================================================

export interface ViewUserQuery_viewUser {
  __typename: "User";
  id: string;
  firstname: string | null;
  lastname: string | null;
  email: string;
  dob: string | null;
  gender: string | null;
  role: string;
  onboarded: boolean;
  createdOn: string;
  updatedAt: string | null;
}

export interface ViewUserQuery {
  viewUser: ViewUserQuery_viewUser | null;
}

export interface ViewUserQueryVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface UpdateUserInput {
  firstname?: string | null;
  lastname?: string | null;
  phone?: string | null;
  password?: string | null;
  dob?: string | null;
  gender?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
