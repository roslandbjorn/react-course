import { useState, useEffect } from "react";
import Title from "../Title";
import Button from "../Button";
import FormGroup from "./FormGroup";

export default function LoginForm({ handleCancel }) {
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handlers
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="form" style={{ maxWidth: 500 }}>
      <Title text="Login" classes={"text-center mb-4"} />
      <h4 className="subtitle">Enter your credentials</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormGroup
          type={"email"}
          placeholder={"Enter your email"}
          label={"Email"}
          value={email}
          onChange={changeEmail}
        />
        <FormGroup
          type={"password"}
          placeholder={"Enter your password"}
          label={"Password"}
          value={password}
          onChange={changePassword}
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
