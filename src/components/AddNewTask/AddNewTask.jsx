import styles from "./AddNewTask.module.css";
import { useState } from "react";
import PropTypes from "prop-types";

function AddNewTask({ setTasksList }) {
  const [taskName, setTaskName] = useState("");

  function handleAddTask() {
    if (taskName.trim() !== "") {
      setTasksList((prevTasks) => [...prevTasks, taskName]);
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Nowe zadanie</h2>
      <input
        className={styles.input}
        type="text"
        placeholder="Nazwa zadania"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button className={styles.button} onClick={handleAddTask}>
        +
      </button>
    </div>
  );
}

AddNewTask.propTypes = {
  setTasksList: PropTypes.func.isRequired,
};

export default AddNewTask;
