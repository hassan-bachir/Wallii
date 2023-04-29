import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "First Name should be at least 2 characters")
        .max(50, "First Name should not exceed 50 characters")
        .required("First Name is required"),
    lastName: Yup.string()
        .min(2, "Last Name should be at least 2 characters")
        .max(50, "Last Name should not exceed 50 characters"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Password should be at least 8 characters")
        .required("Password is required"),
});
