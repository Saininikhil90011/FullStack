import React from "react";
import "../App.css"; // Importing the CSS file
import { Helmet } from "react-helmet-async";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
      first_name: "",
      last_name: "",
      Mobileno: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
      first_name: Yup.string().min(3).max(12).trim().required("Required"),
      last_name: Yup.string().min(3).max(12).required("Required"),
      Mobileno: Yup.string()
        .matches(
          /^([6-9][0-9]{9})$/,
          "Mobile number must be a valid 10-digit Indian number starting with 7, 8, or 9"
        )
        .required("Mobile number is required"),
    }),
    onSubmit: (values) => {
      // Proceed with form submission logic (e.g., API call)
      console.log("Form submitted:", values);
    },
  });

  return (
    <>
      <Helmet>
        <title>RegistrationForm</title>
      </Helmet>

      <div className="container">
        <h1>Registration Form</h1>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="confirm_password">Confirm Password:</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.confirm_password &&
            formik.errors.confirm_password ? (
              <div className="error">{formik.errors.confirm_password}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.first_name && formik.errors.first_name ? (
              <div className="error">{formik.errors.first_name}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.last_name && formik.errors.last_name ? (
              <div className="error">{formik.errors.last_name}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="last_name">Mobile No. </label>
            <input
              type="number"
              id="Mobileno"
              name="Mobileno"
              value={formik.values.Mobileno}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.Mobileno && formik.errors.Mobileno ? (
              <div className="error">{formik.errors.Mobileno}</div>
            ) : null}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
