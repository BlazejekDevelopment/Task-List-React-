import Task from "../Task/Task";
import styles from "./TasksList.module.css";
import PropTypes, { func } from "prop-types";

function TasksList({ tasksList, setTasksList }) {
  function handleDeleteTask(indexOfElement) {
    setTasksList(tasksList.filter((_, index) => index !== indexOfElement));
  }

  function handleChange(indexOfElement) {
    setTasksList(
      tasksList.map((task, index) => {
        if (index === indexOfElement) {
          return {
            name: task.name,
            isChecked: !task.isChecked,
          };
        }

        return task;
      })
    );
  }

  setTasksList(tasksList.sort((a, b) => a.name - b.name));

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
                taskName={task.name}
                key={index}
                handleDelateTask={() => handleDeleteTask(index)}
                handleChange={() => handleChange(index)}
                isChecked={task.isChecked}
              />
            );
          })}
      </ul>
    </div>
  );
}

TasksList.propTypes = {
  tasksList: PropTypes.array.isRequired,
  setTasksList: PropTypes.func.isRequired,
};

export default TasksList;
