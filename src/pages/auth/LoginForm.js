import { Form, Alert, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import Button from "../../components/Button";

const LoginForm = () => {
  const setCurrentUser = useSetCurrentUser();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = loginData;

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/dj-rest-auth/login/", loginData);
      setCurrentUser(data.user);
      navigate("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Container className="overflow-hidden p-4">
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label className="d-none">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </Form.Group>
          {errors.username?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}

          <Form.Group controlId="password">
            <Form.Label className="d-none">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Form.Group>
          {errors.password?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}
          <Button type="submit" textColor="bg-font" bgColor="secondary-bg">
            Sign in
          </Button>
          {errors.non_field_errors?.map((message, idx) => (
            <Alert key={idx} variant="warning" className="mt-3">
              {message}
            </Alert>
          ))}
        </Form>
      </Container>
    </>
  );
};

export default LoginForm;
