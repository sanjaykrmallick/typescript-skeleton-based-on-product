import React from "react";
import UserProfile from "../features/users/components/UserProfile";
import Button from "../components/common/Button";
import { useAppDispatch } from "../store/hooks";
import { logout } from "../store/slices/authSlice";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Welcome Home</h1>
      <UserProfile />
      <Button onClick={() => alert("Welcome!")}>Click Me</Button>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default HomePage;
