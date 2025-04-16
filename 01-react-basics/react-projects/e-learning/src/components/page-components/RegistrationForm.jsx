import { useState, useEffect, useRef } from "react";
import Title from "../Title";
import Button from "../Button";
import FormGroup from "./FormGroup";

export default function RegistrationForm({ handleCancel, showLogin }) {
  // States

  const [registration, setRegistration] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  // References

  let fullName = useRef();

  // Handlers

  const handleInputChange = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };

  const handleRegistration = () => {};

  // Effects

  useEffect(() => {
    fullName.current.focus();
  }, []);

  return (
    <div className="form fadIn" style={{ maxWidth: 500 }}>
      <Title text="Register" classes={"text-center mb-4"} />
      <Button
        className={"btn-close"}
        text={"x"}
        style={{ position: "absolut", top: 20, right: 30 }}
        onClick={handleCancel}
      />
      <form onSubmit={handleRegistration}>
        <FormGroup
          label={"Name"}
          placeholder={"Enter your name"}
          value={registration.fullName}
          onChange={handleInputChange}
          reference={fullName}
          name="fullName"
        />

        <FormGroup
          label={"Email"}
          type={"email"}
          placeholder={"Enter your email"}
          value={registration.email}
          onChange={handleInputChange}
          name="email"
        />

        <FormGroup
          label={"Password"}
          type={"password"}
          placeholder={"Enter your password"}
          value={registration.password}
          onChange={handleInputChange}
          name="password"
        />
        <FormGroup
          label={"Password Confirmation"}
          type={"password"}
          placeholder={"Confirm your password"}
          value={registration.passwordConf}
          onChange={handleInputChange}
          name="passwordConf"
        />
      </form>
      <div className="d-flex space-between">
        <Button
          classes={"btn-primary"}
          type={"submit"}
          text={"Register"}
          onClick={() => alert("Registered")}
        />
        <Button
          type={"botton"}
          classes={"btn-lg"}
          text={"Login"}
          onClick={showLogin}
        />
      </div>
    </div>
  );
}
