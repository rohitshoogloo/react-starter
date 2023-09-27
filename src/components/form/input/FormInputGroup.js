import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const FormInputGroup = (props) => {
    const { text, placeholder, label } = props;
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">{text}</InputGroup.Text>
      <Form.Control
        {...props}
        placeholder={placeholder}
        aria-label={label}
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  );
};

export default FormInputGroup;
