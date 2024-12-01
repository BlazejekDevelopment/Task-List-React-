import Bin from "../assets/Bin.png";
import Style from "./Task.module.css";

function Task({ taskName }) {
  return (
    <li className={Style.container}>
      <input type="checkbox" />
      <p className={Style.text}>{taskName}</p>
      <img src={Bin} alt="Bin" height="20px" />
    </li>
  );
}

export default Task;
