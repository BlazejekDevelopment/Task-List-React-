import Header from "./components/Header/Header.jsx";
import AddNewTask from "./components/AddNewTask/AddNewTask.jsx";
import TasksList from "./components/TasksList/TasksList.jsx";
import { useState } from "react";

function App() {
  const [tasksList, setTasksList] = useState([
    "Wyprowadzić psa",
    "Posprzątać pokój",
    "Założyć biznes",
  ]);

  return (
    <>
      <Header />
      <AddNewTask setTasksList={setTasksList} />
      <TasksList tasksList={tasksList} setTasksList={setTasksList} />
    </>
  );
}

export default App;
