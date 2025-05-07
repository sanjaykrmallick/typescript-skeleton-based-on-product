import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <header>Main Navigation</header>
      <main>
        <Outlet />
      </main>
      <footer>© 2025 ProductApp</footer>
    </div>
  );
};

export default MainLayout;
