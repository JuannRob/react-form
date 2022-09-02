import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Schema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Forms = () => {
  return (
    <Formik
      validationSchema={Schema}
      onSubmit={(res) => alert(JSON.stringify(res))}
      initialValues={{
        name: "",
        email: "",
        password: "",
        textarea: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form className="w-50 border rounded p-3" onSubmit={handleSubmit}>
          <h2>Form</h2>

          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Woody Allen"
              value={values.name}
              onChange={handleChange}
              isInvalid={touched.name && !!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              Required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="contoso@domain.com"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              isInvalid={touched.email && !!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              Required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Provice a password"
              value={values.password}
              onChange={handleChange}
              isInvalid={touched.password && errors.password}
            />
            <Form.Control.Feedback type="invalid">
              Required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="textarea">
            <Form.Label>Text Area</Form.Label>
            <Form.Control
              type="text"
              name="textarea"
              value={values.textarea}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Forms;
