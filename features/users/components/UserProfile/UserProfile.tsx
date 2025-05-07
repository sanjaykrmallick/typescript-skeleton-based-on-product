import React from "react";
import { useUser } from "../../hooks/useUser";
import styles from "./UserProfile.module.scss";

const UserProfile: React.FC = () => {
  const { user, loading } = useUser();

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>No user found</p>;

  return (
    <div className={styles.profile}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
