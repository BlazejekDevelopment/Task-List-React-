import StampImage from "../assets/Stamp.png";
import Style from "./Heading.module.css";

function Heading() {
  return (
    <div className={Style.container}>
      <img src={StampImage} alt="Stamp" className={Style.image} />
      <h1 className={Style.header}>Task List</h1>
    </div>
  );
}

export default Heading;
