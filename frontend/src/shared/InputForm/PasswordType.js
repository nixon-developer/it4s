// IMPORT PACKAGES
import React from "react";

function PasswordType({ placeholder, name, value, handleChange }) {
  return (
    <>
      <input
        type="password"
        placeholder={placeholder}
        className="form-control"
        name={name}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}

export default PasswordType;
