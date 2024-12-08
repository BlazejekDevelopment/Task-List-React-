import styles from "./AddNewTask.module.css";
import { useState, useContext } from "react";
import { TasksListContext } from "../../App";

function AddNewTask() {
  const { setTasksList } = useContext(TasksListContext);
  const [taskName, setTaskName] = useState("");

  function handleAddTask() {
    if (taskName.trim() !== "") {
      setTasksList((prevTasks) => [
        ...prevTasks,
        { name: taskName, isChecked: false },
      ]);
      document.querySelector("#warning").style.opacity = 0;
      setTaskName("");
    } else {
      document.querySelector("#warning").style.opacity = 1;
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
      <h2 className={styles.warning} id="warning">
        Nie wprowadzono nazwy
      </h2>
      <button id="button" className={styles.button} onClick={handleAddTask}>
        +
      </button>
    </div>
  );
}

export default AddNewTask;
