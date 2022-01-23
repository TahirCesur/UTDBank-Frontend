import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { useFormik } from "formik";
import { getUser, login } from "../../api/user-service";

import { toast, ToastContainer } from "react-toastify";
import { useContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { loginFailed, loginSuccess } from "../../context/user/userActions";
import MaskInput from "react-maskinput/lib";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { dispatchUser } = useContext();
  const navigate = useNavigate();

  const initialValues = {
    ssn: "",
    password: "",
  };

  const validationSchema = Yup.object({
    ssn: Yup.string().required("SSN number is required"),

    password: Yup.string().min(5, "Password must be at least 5 character").required("Password is required"),
  });

  const onSubmit = (values) => {
    setLoading(true);

    login(values)
      .then((respLogin) => {
        localStorage.setItem("token", respLogin.data.token);

        getUser()
          .then((respUser) => {
            dispatchUser(loginSuccess(respUser.data));
            navigate("/");

            setLoading(false);
          })
          .catch((err) => {
            toast("An error occurred");
            setLoading(false);
            dispatchUser(loginFailed());
          });
      })
      .catch((err) => {
        toast("An error occurred");
        setLoading(false);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container className="authentication-form">
      <Row className="row">
        <Col className="col-sm-12 col-md-12 col-lg-12">
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="form-group mb-15" controlId="">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="flaticon-user"></i>
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

            <Button variant="danger" type="submit" disabled={loading}>
              {loading && <Spinner animation="border" size="sm" />} Login
            </Button>
          </Form>
        </Col>
      </Row>

      <ToastContainer />
    </Container>
  );
};

export default LoginForm;
