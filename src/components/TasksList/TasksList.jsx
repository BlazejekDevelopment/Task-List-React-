import Task from "../Task/Task";
import style from "./TasksList.module.css";

function TasksList({ tasksList, setTasksList }) {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Twoje zadania</h1>
      <ul>
        {tasksList.map((task, index) => (
          <Task
            taskName={task}
            array={tasksList}
            key={index}
            indexOfElement={index}
            setTasksList={setTasksList}
          />
        ))}
      </ul>
    </div>
  );
}

export default TasksList;
