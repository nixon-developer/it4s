import React from "react";

function Label({ htmlFor, labelText }) {
  return (
    <>
      <label htmlFor={htmlFor} className="form-label">
        {labelText}
      </label>
    </>
  );
}

export default Label;
