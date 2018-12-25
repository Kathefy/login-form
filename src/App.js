import React from "react";
import { withFormik, Form, Field } from "formik";
import "./App.css";
import * as Yup from "yup";

const InputLine = ({ errorsName, touched, name, title, type }) => (
  <div className="container">
    <Field
      className={errorsName && touched ? "inputText errorInput" : "inputText"}
      type={type}
      name={name}
    />
    <span className="labelFloat">
      {title}
      {errorsName && touched && <span className="error">{errorsName}</span>}
    </span>
  </div>
);

const App = ({ errors, touched, isSubmitting }) => (
  <div className="form">
    <Form>
      <div className="loginForm">
        <InputLine
          errorsName={errors.name}
          touched={touched.name}
          name="name"
          type="text"
          title="Full Name"
        />
        <InputLine
          errorsName={errors.email}
          touched={touched.email}
          name="email"
          type="email"
          title="Email"
        />
        <InputLine
          errorsName={errors.password}
          touched={touched.password}
          name="password"
          type="password"
          title="Password"
        />
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
