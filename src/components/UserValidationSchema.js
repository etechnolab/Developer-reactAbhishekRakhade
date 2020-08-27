import * as Yup from "yup";

export const UserValidationSchema = Yup.object().shape({
  name: Yup.string()

    .min(3, "min 3 characters required")

    .max(20, "max 20 characters required!")

    .required("Required"),

  mobile: Yup.number()

    .min(10, "min 10 chars required!")

    .required("Required"),
  address: Yup.string()

    .min(10, "min 10 chars required!")

    .max(100, "max 100 chars required!")

    .required("Required"),
  gender: Yup.string().required("Required"),
  message: Yup.string()

    .min(2, "min 2 chars required!")

    .max(200, "max 200 chars required!")

    .required("Required"),
});
