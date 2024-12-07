import bin from "../../assets/Bin.png";
import styles from "./Task.module.css";
import PropTypes from "prop-types";

function Task({ taskName, handleDelateTask, isChecked, handleChange }) {
  return (
    <li className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.checboxContainer}>
          <span>
            <input
              className={styles.input}
              type="checkbox"
              checked={isChecked}
              onChange={handleChange}
            />
          </span>
        </div>
        <p className={`${styles.text} ${isChecked && styles.taskChecked}`}>
          {taskName}
        </p>
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
