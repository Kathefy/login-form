import React, { Component } from "react";
import { Formik } from "formik";
import "./App.css";

const FomikInput = () => (
  <div className="form">
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: ""
      }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = <span className="error"> &bull; Required</span>;
          errors.emailClass = "errorInput";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = (
            <span className="error"> &bull; Invalid email address</span>
          );
          errors.emailClass = "errorInput";
        }
        if (!values.name) {
          errors.name = <span className="error"> &bull; Required</span>;
          errors.nameClass = "errorInput";
        }
        if (!values.password) {
          errors.password = <span className="error"> &bull; Required</span>;
          errors.passwordClass = "errorInput";
        } else if (values.password.length < 8) {
          errors.password = (
            <span className="error"> &bull; min 8 characters</span>
          );
          errors.passwordClass = "errorInput";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        let errors = [
          "No such file or directory",
          "Sorry, this username is taken",
          "The server is not reachable",
          "Site doesn't exist"
        ];
        let error = errors[Math.floor(Math.random() * errors.length)];
        setTimeout(() => {
          alert(error);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="loginForm">
            <div className="container">
              <input
                className={
                  "inputText " +
                  (errors.name && touched.name && errors.nameClass)
                }
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <span className="labelFloat">
                Full Name
                {errors.name && touched.name && errors.name}
              </span>
            </div>
            <div className="container">
              <input
                className={
                  "inputText " +
                  (errors.email && touched.email && errors.emailClass)
                }
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <span className="labelFloat">
                Email
                {errors.email && touched.email && errors.email}
              </span>
            </div>
            <div className="container">
              <input
                className={
                  "inputText inputTextLast " +
                  (errors.password && touched.password && errors.passwordClass)
                }
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <span className="labelFloat">
                Password
                {errors.password && touched.password && errors.password}
              </span>
            </div>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

class App extends Component {
  render() {
    return <FomikInput />;
  }
}

export default App;
