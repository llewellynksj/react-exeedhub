import React from "react";
import { Container } from "react-bootstrap";

const Button = ({ children, textColor, bgColor, onClick, type = "button" }) => {
  return (
    <>
      <Container fluid className="d-flex justify-content-center">
        <button
          type={type}
          className={textColor + " " + bgColor}
          onClick={onClick}
        >
          {children}
        </button>
      </Container>
    </>
  );
};

export default Button;
