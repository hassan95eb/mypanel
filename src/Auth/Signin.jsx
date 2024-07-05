/* eslint-disable no-useless-escape */
import { useFormik } from "formik";
import * as yup from "yup";
const initialValues = {
  name: "",
  email: "",
  password: "",
};
const onSubmit = (values) => {
  console.log(values);
};
// const validate = (values) => {
//   let errors = {};
//   if (!values.name) {
//     errors.name = "Please complete this";
//   }
//   if (!values.email) {
//     errors.email = "Please complete this";
//   } else {
//     if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
//       errors.email = "Your email doesn't correct";
//     }
//   }
//   if (!values.password) {
//     errors.password = "Please complete this";
//   }
//   return errors;
// };
const validationSchema = yup.object({
  name: yup.string().required("Please complete this"),
  email: yup.string().required("please complete this").email("enter correctly"),
  password: yup.string().required("please complete this"),
});
export default function Signin() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });
  return (
    <div className="auth-page">
      <div className="auth-box">
        <form onSubmit={formik.handleSubmit}>
          <h2 className="text-center title-Form mb-2">SIGN IN</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              {...formik.getFieldProps("name")}
              aria-describedby="nameHelp"
              required
            />
            {formik.errors.name && formik.touched.name ? (
              <span className="text-danger fs-6">{formik.errors.name}</span>
            ) : (
              ""
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
              {...formik.getFieldProps("email")}
              required
            />
            {formik.errors.email && formik.touched.email ? (
              <span className="text-danger fs-6">{formik.errors.email}</span>
            ) : (
              ""
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              {...formik.getFieldProps("password")}
              id="exampleInputPassword1"
              required
            />
            {formik.errors.password && formik.touched.password ? (
              <span className="text-danger fs-6">{formik.errors.password}</span>
            ) : (
              ""
            )}
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-outline-danger ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
