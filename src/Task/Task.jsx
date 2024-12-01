import bin from "../assets/bin.png";
import style from "./Task.module.css";

function Task({ taskName, indexOfElement, array, setTasksList }) {
  return (
    <li className={style.container}>
      <input className={style.input} type="checkbox" />
      <p className={style.text}>{taskName}</p>
      <img
        src={bin}
        alt="bin"
        height="20px"
        onClick={() => {
          setTasksList(array.filter((_, index) => index !== indexOfElement));
        }}
      />
    </li>
  );
}

export default Task;
