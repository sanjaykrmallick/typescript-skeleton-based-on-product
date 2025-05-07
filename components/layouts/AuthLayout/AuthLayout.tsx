import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.scss";
import React from "react";

const AuthLayout = () => {
  return (
    <div className={styles.container}>
      <h1>Login Area</h1>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
