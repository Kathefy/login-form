import React from "react";
import { withFormik, Form, Field } from "formik";
import "./App.css";
import * as Yup from "yup";

const App = ({ errors, touched, isSubmitting }) => (
  <div className="form">
    <Form>
      <div className="loginForm">
        <div className="container">
          <Field
            className={
              errors.name && touched.name ? "inputText errorInput" : "inputText"
            }
            type="text"
            name="name"
          />
          <span className="labelFloat">
            Full Name
            {errors.name && touched.name && (
              <span className="error">{errors.name}</span>
            )}
          </span>
        </div>
        <div className="container">
          <Field
            className={
              errors.email && touched.email
                ? "inputText errorInput"
                : "inputText"
            }
            type="email"
            name="email"
          />
          <span className="labelFloat">
            Email
            {errors.email && touched.email && (
              <span className="error">{errors.email}</span>
            )}
          </span>
        </div>
        <div className="container">
          <Field
            className={
              errors.password && touched.password
                ? "inputText inputTextLast errorInput"
                : "inputText inputTextLast"
            }
            type="password"
            name="password"
          />
          <span className="labelFloat">
            Password
            {errors.password && touched.password && (
              <span className="error">{errors.password}</span>
            )}
          </span>
        </div>
      </div>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  </div>
);
const FormikApp = withFormik({
  mapPropsToValues({ name, email, password }) {
    return {
      name: name || "",
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    password: Yup.string()
      .min(8, "min 8 characters")
      .required("Required")
  }),
  handleSubmit(values) {
    console.log(values);
  }
})(App);

export default FormikApp;
