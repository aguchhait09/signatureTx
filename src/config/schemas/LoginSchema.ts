import * as yup from "yup";
export const LoginSchema = yup.object().shape({
  email: yup.string().trim().email().required().label("Email"),
  password: yup.string().trim().required().label("Password"),
});

export type LoginSchemaType = yup.InferType<typeof LoginSchema>;
