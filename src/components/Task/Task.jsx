import bin from "../../assets/Bin.png";
import styles from "./Task.module.css";
import PropTypes from "prop-types";

function Task({ taskName, handleDelateTask }) {
  return (
    <li className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.checboxContainer}>
          <span>
            <input className={styles.input} type="checkbox" />
          </span>
        </div>
        <p className={styles.text}>{taskName}</p>
      </div>
      <img
        src={bin}
        alt="Bin"
        className={styles.image}
        onClick={handleDelateTask}
      />
    </li>
  );
}

Task.propTypes = {
  taskName: PropTypes.string.isRequired,
  handleDelateTask: PropTypes.func.isRequired,
};

export default Task;
