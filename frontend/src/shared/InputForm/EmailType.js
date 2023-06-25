// IMPORT PACKAGES
import React from "react";

function EmailType({ placeholder, name, value, handleChange }) {
  return (
    <>
      <input
        type="email"
        placeholder={placeholder}
        className="form-control"
        name={name}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}

export default EmailType;
