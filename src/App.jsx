import Header from "./components/Header/Header.jsx";
import AddNewTask from "./components/AddNewTask/AddNewTask.jsx";
import TasksList from "./components/TasksList/TasksList.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { initialTasks } from "./helpers/initialTasks.js";
import { useState, createContext } from "react";

export const TasksListContext = createContext();

function App() {
  const [tasksList, setTasksList] = useState(initialTasks);

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

  return (
    <>
      <Header />
      <TasksListContext.Provider
        value={{ tasksList, setTasksList, handleDeleteTask, handleChange }}
      >
        <AddNewTask />
        <TasksList />
      </TasksListContext.Provider>
      <Footer />
    </>
  );
}

export default App;
