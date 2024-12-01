import style from "./AddNewTask.module.css";
import { useState } from "react";

function AddNewTask({ setTasksList }) {
  const [taskName, setTaskName] = useState("");

  function handleAddTask() {
    setTasksList((t) => [...t, taskName]);
  }

  return (
    <div className={style.container}>
      <h2 className={style.title}>Nowe zadanie</h2>
      <input
        className={style.input}
        type="text"
        placeholder="Nazwa zadania"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button className={style.button} id="Button" onClick={handleAddTask}>
        +
      </button>
    </div>
  );
}

export default AddNewTask;
