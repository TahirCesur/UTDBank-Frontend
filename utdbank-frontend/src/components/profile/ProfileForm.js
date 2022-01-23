import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { Form, Button, Spinner } from "react-bootstrap";
import MaskInput from "react-maskinput/lib";
import { updateUser } from "../../api/user-service";

const ProfileForm = ({ user }) => {
  const [loading, setLoading] = useState(false);

  const initialValues = user;

  /*
    Object.keys(user).length > 0
      (?) user
      : {
          ssn: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          address: "",
        };
*/
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Please enter your first name"),
    lastName: Yup.string().required("Please enter your last name"),
    phoneNumber: Yup.string().required("Please enter your phone number"),
    email: Yup.string().email().required("Please enter your email"),
    address: Yup.string().required("Please enter your address"),
    ssn: Yup.string().required("Please enter your ssn"),
  });

  const onSubmit = (values) => {
    console.log(values);

    delete values["roles"];

    setLoading(true);
    updateUser(values)
      .then((resp) => {
        toast("Your profile updated successfully");
        setLoading(false);
      })
      .catch((err) => {
        toast("An error occured. Please try later.");
        console.log(err.response.data.message);
        setLoading(false);
      });
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Ssn No</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("ssn")}
          isInvalid={!!formik.errors.ssn}
          as={MaskInput}
          maskChar="_"
          mask="000-00-0000"
          placeholder="SSN"
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.ssn}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          {...formik.getFieldProps("firstName")}
          isInvalid={!!formik.errors.firstName}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.firstName}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          {...formik.getFieldProps("lastName")}
          isInvalid={!!formik.errors.lastName}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.lastName}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter phone number"
          as={MaskInput}
          alwaysShowMask
          maskChar="_"
          mask="(000) 000-0000"
          {...formik.getFieldProps("mobilePhoneNumber")}
          isInvalid={!!formik.errors.mobilePhoneNumber}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.mobilePhoneNumber}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={formik.values.email}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address"
          {...formik.getFieldProps("address")}
          isInvalid={!!formik.errors.address}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.address}
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" disabled={loading}>
        {loading && <Spinner animation="border" variant="light" size="sm" />}{" "}
        Save
      </Button>
    </Form>
  );
};

export default ProfileForm;
