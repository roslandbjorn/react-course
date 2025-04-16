import { useState } from "react";
import Button from "../components/Button";

export default function ThrowError() {
  // States
  const [error, setError] = useState(null);
  const handleError = () => {
    try {
      throw new Error("Error from React component");
    } catch (ex) {
      setError(ex);
    }
  };

  if (error) {
    return (
      <div className="container">
        <div className="alert alert-danger">Caught an {error.message}</div>
      </div>
    );
  }

  return (
    <div style={{ height: "100vh" }} className="container">
      <h1 className="title">Throw Error</h1>
      <Button onClick={handleError} />
    </div>
  );
}
