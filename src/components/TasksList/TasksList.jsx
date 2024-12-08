import Task from "../Task/Task";
import styles from "./TasksList.module.css";
import { TasksListContext } from "../../App";
import { useContext } from "react";

function TasksList() {
  const { tasksList, handleDeleteTask, handleChange } =
    useContext(TasksListContext);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Twoje zadania</h2>
      <ul>
        <li className={styles.warrningDel} id="warrningDel">
          Brak zadań do wykonania...
        </li>
        {tasksList
          .sort((a, b) => a.isChecked - b.isChecked)
          .map((task, index) => {
            return (
              <Task
                task={task}
                key={index}
                handleDeleteTask={() => handleDeleteTask(index)}
                handleChange={() => handleChange(index)}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default TasksList;
