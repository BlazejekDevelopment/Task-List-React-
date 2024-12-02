import Task from "../Task/Task";
import style from "./TasksList.module.css";
import PropTypes from "prop-types";

function TasksList({ tasksList, setTasksList }) {
  function handleDeleteTask(indexOfElement) {
    setTasksList(tasksList.filter((_, index) => index !== indexOfElement));
  }
  return (
    <div className={style.container}>
      <h2 className={style.title}>Twoje zadania</h2>
      <ul>
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
