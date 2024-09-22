import Logo from "./Logo";
import styles from "../styles/header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <Logo />
          <h1 className={styles.title}>FocalPoint</h1>
        </div>
        <div>
          <h1 className={styles.welcomeMessage}>Bem-vindo de volta, Marcus</h1>
        </div>
        <div>
          <h1 className={styles.date}>Segunda, 01 de dezembro de 2025</h1>
        </div>
      </div>
      <div className={styles.separator}></div>
    </div>
  );
};

export default Header;
