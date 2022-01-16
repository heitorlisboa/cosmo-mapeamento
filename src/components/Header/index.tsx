import { FC } from "react";
import "./style.scss";

import drone1 from "../../img/drone-1.webp";
import drone2 from "../../img/drone-2.webp";

const Header: FC = (props) => {
  return (
    <header className="header no-collapse">
      <img className="drone-1" src={drone1} alt="" aria-hidden="true" />
      <img className="drone-2" src={drone2} alt="" aria-hidden="true" />
      {props.children}
    </header>
  );
};

export default Header;
