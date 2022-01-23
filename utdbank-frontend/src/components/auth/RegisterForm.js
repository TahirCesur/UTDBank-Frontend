import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { register } from "../../api/user-service";

import { useNavigate } from "react-router-dom";
import MaskInput from "react-maskinput/lib";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    ssn: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    mobilePhoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    ssn: Yup.string().min(9, "SSN should be exact 9 characters").required("SSN number is required"),

    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email().required("Email is required"),
    address: Yup.string().required("Address is required"),
    mobilePhoneNumber: Yup.string().required("Mobile phone number is required"),
    password: Yup.string().min(6, "Password must be at least 6 character").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });

  const onSubmit = (values) => {
    setLoading(true);
    register(values)
      .then((resp) => {
        setLoading(false);
        toast("You are registered successfully. ");
      })
      .catch((err) => {
        toast("An error occurred");
        setLoading(false);
        navigate("/auth");
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container className="authentication-form" style={{ height: "150%" }}>
      <Row className="row">
        <Col className="col-sm-12 col-md-12 col-lg-12">
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="form-group mb-15" controlId="">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="flaticon-agenda"></i>
                  </span>
                </div>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("ssn")}
                  isInvalid={!!formik.errors.ssn}
                  as={MaskInput}
                  maskChar="_"
                  mask="000-00-0000"
                  placeholder="SSN"
                />
              </div>
            </Form.Group>

            <Form.Group className="form-group mb-15" controlId="">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="flaticon-user"></i>
                  </span>
                </div>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("firstName")}
                  isInvalid={!!formik.errors.firstName}
                  placeholder="First Name"
                />
              </div>
            </Form.Group>

            <Form.Group className="form-group mb-15" controlId="">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="flaticon-user"></i>
                  </span>
                </div>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("lastName")}
                  isInvalid={!!formik.errors.lastName}
                  placeholder="Last Name"
                />
              </div>
            </Form.Group>

            <Form.Group className="form-group mb-15" controlId="">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="flaticon-email"></i>
                  </span>
                </div>
                <Form.Control
                  type="email"
                  {...formik.getFieldProps("email")}
                  isInvalid={!!formik.errors.email}
                  placeholder="E-mail"
                />
              </div>
            </Form.Group>

            <Form.Group className="form-group mb-15" controlId="">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="flaticon-globe"></i>
                  </span>
                </div>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("address")}
                  isInvalid={!!formik.errors.address}
                  placeholder="Address"
                />
              </div>
            </Form.Group>

            <Form.Group className="form-group mb-15" controlId="">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="flaticon-phone-call"></i>
                  </span>
                </div>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("mobilePhoneNumber")}
                  isInvalid={!!formik.errors.mobilePhoneNumber}
                  as={MaskInput}
                  maskChar="_"
                  mask="(000) 000-0000"
                  placeholder="Mobile Phone Number"
                />
              </div>
            </Form.Group>

            <Form.Group className="form-group mb-15" controlId="">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="flaticon-approval"></i>
                  </span>
                </div>
                <Form.Control
                  type="password"
                  {...formik.getFieldProps("password")}
                  isInvalid={!!formik.errors.password}
                  placeholder="Password"
                />
              </div>
            </Form.Group>

            <Form.Group className="form-group mb-15" controlId="">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="flaticon-approval"></i>
                  </span>
                </div>
                <Form.Control
                  type="password"
                  {...formik.getFieldProps("confirmPassword")}
                  isInvalid={!!formik.errors.confirmPassword}
                  placeholder="Confirm Password"
                />
              </div>
            </Form.Group>

            <Button variant="danger" type="submit" disabled={loading}>
              {loading && <Spinner animation="border" size="sm" />} Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
