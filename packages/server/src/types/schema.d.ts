// tslint:disable
// graphql typescript definitions

declare namespace GQL {
interface IGraphQLResponseRoot {
data?: IQuery | IMutation | ISubscription;
errors?: Array<IGraphQLResponseError>;
}

interface IGraphQLResponseError {
/** Required for all errors */
message: string;
locations?: Array<IGraphQLResponseErrorLocation>;
/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
[propName: string]: any;
}

interface IGraphQLResponseErrorLocation {
line: number;
column: number;
}

interface IQuery {
__typename: "Query";
findCourses: Array<ICourse>;
viewCourse: ICourse | null;
completedEnrollments: Array<IEnrollment>;
findEnrollments: Array<IEnrollment>;
searchEnrollments: Array<IEnrollment>;
testedEnrollments: Array<IEnrollment>;
findInstructors: Array<IInstructor>;
viewInstructor: IInstructor | null;
findUsers: Array<IUser>;
me: IUser | null;
viewUser: IUser | null;
}

interface IFindCoursesOnQueryArguments {
offset: number;
limit: number;
}

interface IViewCourseOnQueryArguments {
id: string;
}

interface ICompletedEnrollmentsOnQueryArguments {
offset: number;
limit: number;
}

interface IFindEnrollmentsOnQueryArguments {
offset: number;
limit: number;
}

interface ISearchEnrollmentsOnQueryArguments {
input?: ISearchEnrollmentsInput | null;
offset: number;
limit: number;
}

interface ITestedEnrollmentsOnQueryArguments {
offset: number;
limit: number;
}

interface IViewInstructorOnQueryArguments {
id: string;
}

interface IViewUserOnQueryArguments {
id: string;
}

interface ICourse {
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
instructor: IInstructor;
bespokeAvailability: boolean;
assessmentType: string;
learningObjectives: string;
trainingDates: string;
link: string | null;
venue: string | null;
createdBy: IUser;
createdOn: string;
updatedAt: string | null;
}

interface IInstructor {
__typename: "Instructor";
id: string;
pictureUrl: string | null;
name: string;
linkedInUrl: string | null;
title: string;
description: string;
featured: boolean;
createdBy: IUser;
createdOn: string;
updatedAt: string | null;
}

interface IUser {
__typename: "User";
id: string;
user: IUser;
createdOn: string;
updatedAt: string | null;
firstname: string | null;
lastname: string | null;
email: string;
phone: string | null;
dob: string | null;
gender: string | null;
role: string;
onboarded: boolean;
}

interface IEnrollment {
__typename: "Enrollment";
id: string;
course: ICourse;
paid: number | null;
completed: boolean;
owner: IUser;
createdOn: string;
updatedAt: string | null;
}

interface ISearchEnrollmentsInput {
courseId?: string | null;
}

interface IMutation {
__typename: "Mutation";
sendMessage: ISendMessageResponse;
createCourse: IMutationResponse;
deleteCourse: IMutationResponse;
updateCourse: IUpdateCourseResponse;
deleteEnrollment: IDeleteEnrollmentResponse;
createInstructor: IMutationResponse;
deleteInstructor: IMutationResponse;
updateInstructor: IUpdateInstructorResponse;
initiatePayment: IPaymentResponse;
deleteAccount: IDeleteAccountResponse;
sendForgotPasswordEmail: boolean | null;
forgotPasswordChange: Array<IError> | null;
login: ILoginResponse;
logout: boolean | null;
register: Array<IError> | null;
updateUser: boolean;
updatePasswordChange: Array<IError> | null;
}

interface ISendMessageOnMutationArguments {
input: IMessageInput;
}

interface ICreateCourseOnMutationArguments {
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

interface IDeleteCourseOnMutationArguments {
id: string;
}

interface IUpdateCourseOnMutationArguments {
courseId: string;
input: IUpdateCourseInput;
}

interface IDeleteEnrollmentOnMutationArguments {
id: string;
}

interface ICreateInstructorOnMutationArguments {
pictureUrl?: string | null;
name: string;
linkedInUrl?: string | null;
title: string;
description: string;
}

interface IDeleteInstructorOnMutationArguments {
id: string;
}

interface IUpdateInstructorOnMutationArguments {
instructorId: string;
input: IUpdateInstructorInput;
}

interface IInitiatePaymentOnMutationArguments {
id: string;
email: string;
firstname?: string | null;
lastname?: string | null;
phone?: string | null;
amount: number;
reference: string;
}

interface IDeleteAccountOnMutationArguments {
id: string;
}

interface ISendForgotPasswordEmailOnMutationArguments {
email: string;
}

interface IForgotPasswordChangeOnMutationArguments {
newPassword: string;
key: string;
}

interface ILoginOnMutationArguments {
email: string;
password: string;
}

interface IRegisterOnMutationArguments {
email: string;
password: string;
}

interface IUpdateUserOnMutationArguments {
input: IUpdateUserInput;
}

interface IUpdatePasswordChangeOnMutationArguments {
newPassword: string;
}

interface IMessageInput {
name: string;
email: string;
subject: string;
message: string;
}

interface ISendMessageResponse {
__typename: "SendMessageResponse";
errors: Array<IError | null> | null;
message: string | null;
}

interface IError {
__typename: "Error";
path: string;
message: string;
}

interface IMutationResponse {
__typename: "MutationResponse";
errors: Array<IError> | null;
sessionId: string | null;
}

interface IUpdateCourseInput {
pictureUrl?: string | null;
title?: string | null;
summary?: string | null;
description?: string | null;
duration?: string | null;
type?: string | null;
price?: number | null;
discount?: number | null;
instructorId?: string | null;
bespokeAvailability?: boolean | null;
assessmentType?: string | null;
learningObjectives?: string | null;
trainingDates?: string | null;
link?: string | null;
venue?: string | null;
}

interface IUpdateCourseResponse {
__typename: "UpdateCourseResponse";
errors: Array<IError> | null;
message: string | null;
}

interface IDeleteEnrollmentResponse {
__typename: "DeleteEnrollmentResponse";
errors: Array<IError> | null;
message: string | null;
}

interface IUpdateInstructorInput {
pictureUrl?: string | null;
name?: string | null;
linkedInUrl?: string | null;
title?: string | null;
description?: string | null;
}

interface IUpdateInstructorResponse {
__typename: "UpdateInstructorResponse";
errors: Array<IError> | null;
message: string | null;
}

interface IPaymentResponse {
__typename: "PaymentResponse";
errors: Array<IError> | null;
message: string | null;
}

interface IDeleteAccountResponse {
__typename: "DeleteAccountResponse";
errors: Array<IError> | null;
message: string | null;
}

interface ILoginResponse {
__typename: "LoginResponse";
errors: Array<IError> | null;
sessionId: string | null;
}

interface IUpdateUserInput {
firstname?: string | null;
lastname?: string | null;
phone?: string | null;
password?: string | null;
dob?: string | null;
gender?: string | null;
}

interface ISubscription {
__typename: "Subscription";
newEnrollment: IEnrollment;
}
}

// tslint:enable
