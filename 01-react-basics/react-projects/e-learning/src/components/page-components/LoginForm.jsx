import React from "react";
import Title from "../Title";
import Button from "../Button";

export default function LoginForm({ handleCancel }) {
  return (
    <div className="form" style={{ maxWidth: 500 }}>
      <Title text="Login" classes={"text-center mb-4"} />
      <h4 className="subtitle">Enter your credentials</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="input-email">Email</label>
          <input
            id="input-email"
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="input-password">Password</label>
          <input
            id="input-password"
            type="password"
            className="form-control"
            placeholder="Enter your password"
          />
        </div>
        <div className="d-flex space-between">
          <Button classes={"btn-primary"} type={"button"} text={"Login"} />
          <Button
            classes={"btn-secondary"}
            type={"button"}
            text={"Cancel"}
            onClick={handleCancel}
          />
        </div>
      </form>
    </div>
  );
}
