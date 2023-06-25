// IMPORT PACKAGES
import React from "react";

function TextArea({ placeholder, rows, name, value, handleChange }) {
  return (
    <>
      <textarea
        placeholder={placeholder}
        className="form-control"
        rows={rows}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}

export default TextArea;
