import "./style.scss";
import bgImg from "../../img/background.webp";

function MainBg() {
  return (
    <div className="main-bg">
      <img className="main-bg__img" src={bgImg} alt="" />
    </div>
  );
}

export default MainBg;
