import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";

const RegisterForm = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = registerData;

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", registerData);
      navigate("/login");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <>
      <NavBar />
      <h1>Register</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label className="d-none">username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.username?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group controlId="password1">
          <Form.Label className="d-none">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password1"
            value={password1}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.password1?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}

        <Form.Group controlId="password2">
          <Form.Label className="d-none">Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            name="password2"
            value={password2}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.password2?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}

        <Button type="submit">Register</Button>
        {errors.non_field_errors?.map((message, idx) => (
          <Alert key={idx} variant="warning" className="mt-3">
            {message}
          </Alert>
        ))}
      </Form>

      <Container>
        <Link to="/login">
          Already have an account? <span>Login</span>
        </Link>
      </Container>
    </>
  );
};

export default RegisterForm;
