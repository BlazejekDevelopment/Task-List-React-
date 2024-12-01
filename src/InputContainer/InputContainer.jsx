import Style from "./InputContainer.module.css";
import React, { useState } from "react";
import TaskContainer from "../TaskContainer/TaskContainer";

function InputContainer() {
  const [taskName, setTaskName] = useState("");
  const [taskLists, setTaskLists] = useState(["Zadanie 1", "Zadanie 2"]);

  function handleAddTask() {
    setTaskLists((t) => [...t, taskName]);
  }

  return (
    <>
      <div className={Style.container}>
        <h2 className={Style.title}>Nowe zadanie</h2>
        <input
          className={Style.input}
          type="text"
          placeholder="Nazwa zadania"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button className={Style.button} id="Button" onClick={handleAddTask}>
          +
        </button>
      </div>
      <TaskContainer taskLists={taskLists} />
    </>
  );
}

export default InputContainer;
