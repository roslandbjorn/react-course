import React from "react";

export default function FormGroup({
  label,
  type,
  placeholder,
  value,
  onChange,
  reference,
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
        value={value}
        onChange={onChange}
        ref={reference}
      />
    </div>
  );
}
