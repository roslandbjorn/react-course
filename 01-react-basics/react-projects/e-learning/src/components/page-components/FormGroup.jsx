import React from "react";

export default function FormGroup({
  label,
  type,
  placeholder,
  disabled = false,
}) {
  return (
    <div className="form-group">
      <label className="primary-text">{label}</label>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
}
