import bin from "../../assets/bin.png";
import style from "./Task.module.css";

function Task({ taskName, indexOfElement, array, setTasksList }) {
  return (
    <li className={style.container}>
      <div className={style.wrapper}>
        <input className={style.input} type="checkbox" />
        <p className={style.text}>{taskName}</p>
      </div>
      <img
        src={bin}
        alt="bin"
        className={style.iamge}
        onClick={() => {
          setTasksList(array.filter((_, index) => index !== indexOfElement));
        }}
      />
    </li>
  );
}

export default Task;
