// IMPORT PACKAGES
import React from "react";

function TextType({ placeholder, name, value, handleChange }) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className="form-control"
        name={name}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}

export default TextType;
