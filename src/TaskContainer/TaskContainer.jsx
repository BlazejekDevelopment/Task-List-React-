import React, { useState } from "react";
import Task from "../Tasks/Task";
import Style from "./TaskContainer.module.css";

function TaskContainer({ taskLists }) {
  return (
    <div className={Style.container}>
      <h1 className={Style.title}>Twoje zadania</h1>
      <ul>
        {taskLists.map((task, index) => (
          <Task taskName={task} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default TaskContainer;
