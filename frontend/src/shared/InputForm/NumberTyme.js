// IMPORT PACKAGES
import React from "react";

function NumberTyme({ placeholder, name, value, handleChange }) {
  return (
    <>
      <input
        type="number"
        placeholder={placeholder}
        className="form-control"
        name={name}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}

export default NumberTyme;
