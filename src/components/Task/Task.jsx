import bin from "../../assets/Bin.png";
import styles from "./Task.module.css";
import PropTypes from "prop-types";

function Task({ task, handleDeleteTask, handleChange }) {
  const { name, isChecked } = task;

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
          {name}
        </p>
      </div>
      <img
        src={bin}
        alt="Bin"
        className={styles.image}
        onClick={handleDeleteTask}
      />
    </li>
  );
}

Task.propTypes = {
  handleDeleteTask: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Task;
