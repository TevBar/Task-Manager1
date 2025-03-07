// src/pages/Register.tsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Register: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h1>Register</h1>
      <button onClick={() => loginWithRedirect({ screen_hint: "signup" })}>
        Register with Auth0
      </button>
    </div>
  );
};

export default Register;
