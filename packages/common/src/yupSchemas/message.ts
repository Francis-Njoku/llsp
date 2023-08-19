import * as yup from "yup";

export const fullnameNotLongEnough = "name must be at least 3 characters";
export const invalidContactEmail = "email must be a valid email";
export const subjectNotLongEnough = "subject must be at least 3 characters";
export const messageNotLongEnough = "message must be at least 3 characters";

export const messageSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, fullnameNotLongEnough)
    .required(),
  email: yup
    .string()
    .min(3, invalidContactEmail)
    .max(255, invalidContactEmail)
    .email(invalidContactEmail)
    .required(),
  subject: yup
    .string()
    .min(3, subjectNotLongEnough)
    .required(),
  message: yup
    .string()
    .min(3, messageNotLongEnough)
    .required()
});