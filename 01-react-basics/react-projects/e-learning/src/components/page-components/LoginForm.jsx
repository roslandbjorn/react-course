import React from "react";
import Title from "../Title";
import Button from "../Button";
import FormGroup from "./FormGroup";

export default function LoginForm({ handleCancel }) {
  return (
    <div className="form" style={{ maxWidth: 500 }}>
      <Title text="Login" classes={"text-center mb-4"} />
      <h4 className="subtitle">Enter your credentials</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormGroup
          type={"email"}
          placeholder={"Enter your email"}
          label={"Email"}
        />
        <FormGroup
          type={"password"}
          placeholder={"Enter your password"}
          label={"Password"}
        />
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
