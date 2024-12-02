import stampImage from "../../assets/Stamp.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <img src={stampImage} alt="Stamp" className={styles.image} />
      <h1 className={styles.header}>Task List</h1>
    </div>
  );
}

export default Header;
