import { useState, useEffect, useRef } from "react";
import Title from "../Title";
import Button from "../Button";
import FormGroup from "./FormGroup";

export default function LoginForm({ handleCancel, loggedIn, showRegister }) {
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // References
  let emailRef = useRef();
  let passwordRef = useRef();

  // Handlers
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      id: Math.floor(Math.random() * 1000),
      email: email,
      password: password,
    };
    console.log(event);
    validateLoginForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const validateLoginForm = () => {
    email === "" && alert("Please enter your email");
    password.length <= 4 ? alert("Please enter your password") : loggedIn();
  };

  // Effects

  useEffect(() => {
    emailRef.current.focus();
  }, []);

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
          reference={emailRef}
        />
        <FormGroup
          type={"password"}
          placeholder={"Enter your password"}
          label={"Password"}
          value={password}
          onChange={changePassword}
          reference={passwordRef}
        />
        <div className="d-flex space-between">
          <Button
            classes={"btn-primary"}
            type={"submit"}
            text={"Login"}
            onClick={handleSubmit}
          />
          <Button
            classes={"btn-secondary"}
            type={"button"}
            text={"Register"}
            onClick={showRegister}
          />
        </div>
      </form>
    </div>
  );
}
