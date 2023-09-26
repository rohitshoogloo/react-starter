import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { DarkThemeContext } from "../../../context/DarkThemeContext";

const FormSwitch = (props) => {
  const { id, label } = props;
  const { theme } = useContext(DarkThemeContext);
  
  return (
    <Form.Check // prettier-ignore
      type="switch"
      id={id}
      label={label}
      {...props}
      style={{
        color: theme ? "#fff" : "#000"
      }}
    />
  );
};

export default FormSwitch;
