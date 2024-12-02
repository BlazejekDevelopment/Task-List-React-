import Task from "../Task/Task";
import styles from "./TasksList.module.css";
import PropTypes from "prop-types";

function TasksList({ tasksList, setTasksList }) {
  function handleDeleteTask(indexOfElement) {
    setTasksList(tasksList.filter((_, index) => index !== indexOfElement));
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Twoje zadania</h2>
      <ul>
        <li className={styles.warrningDel} id="warrningDel">
          Brak zadań do wykonania...
        </li>
        {tasksList.map((task, index) => (
          <Task
            taskName={task}
            key={index}
            handleDelateTask={() => handleDeleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

TasksList.propTypes = {
  tasksList: PropTypes.array.isRequired,
  setTasksList: PropTypes.func.isRequired,
};

export default TasksList;
