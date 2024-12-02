import Header from "./components/Header/Header.jsx";
import AddNewTask from "./components/AddNewTask/AddNewTask.jsx";
import TasksList from "./components/TasksList/TasksList.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { initialTasks } from "./helpers/initialTasks.js";
import { useState } from "react";

function App() {
  const [tasksList, setTasksList] = useState(initialTasks);

  return (
    <>
      <Header />
      <AddNewTask setTasksList={setTasksList} />
      <TasksList tasksList={tasksList} setTasksList={setTasksList} />
      <Footer />
    </>
  );
}

export default App;
