import React from "react";
import Button from "../components/common/Button";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/slices/authSlice";

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div>
      <h2>Login</h2>
      <Button onClick={handleLogin}>Sign In</Button>
    </div>
  );
};

export default LoginPage;
