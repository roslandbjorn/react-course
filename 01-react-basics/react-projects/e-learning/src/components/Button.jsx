import React from "react";

export default function Button({
  classes,
  type = "Button",
  text = "Click",
  style,
  onClick,
  icon,
}) {
  const alertMissingHandler = () => {
    alert("Add event handler to button!");
  };

  return (
    <button
      className={`btn ${classes}`}
      type={type}
      style={style}
      onClick={onClick ? onClick : alertMissingHandler}
    >
      <div className="d-flex">
        {text}
        {icon}
      </div>
    </button>
  );
}
