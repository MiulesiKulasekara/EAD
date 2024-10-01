import { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";

const FormInput = ({
  id,
  label,
  name,
  type,
  value,
  onBlur,
  onFocus,
  onChange,
  isFocused,
  placeholder,
  error,
  errorMessage,
}) => {

  const focusedStyle = {
    boxShadow: "0 0 0 0.2rem rgba(125, 157, 156, 0.5)", 
    borderColor: "#7D9D9C", 
  };

  const errorStyle = {
    borderColor: "#dc3545",
    boxShadow: "0 0 0 0.2rem rgba(220, 53, 69, 0.25)",
  };
  
  return (
    <>
      <FormGroup>
        <Label>{label}</Label>
        <Input
          id={id}
          name={name}
          type={type}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={onChange}
          placeholder={placeholder}
          error={error}
          style={error ? errorStyle : isFocused ? focusedStyle : {}}
        />
      </FormGroup>
        {error && <p className="text-danger small">{errorMessage}</p>}
    </>
  );
};

export default FormInput;
