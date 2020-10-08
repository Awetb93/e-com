import React from "react";
import Chairhero from "./subcomponents/subHero";
import ChairHero2 from "./img/hero2.jpg";
import Chair5 from "./img/chair5.jpg";
import { sofa } from "./data";
import Body from "./subcomponents/SubBody";
import { Link } from "react-router-dom";

export default function Sofa() {
  return (
    <div>
      <Chairhero src1={ChairHero2} src2={Chair5} />
      <div className="chair-content">
        <div className="sub-menu">
          <Link to="/chairs" className="link">
            Chairs
          </Link>
          <Link to="/chairs/sofa">Sofa</Link>
        </div>
        <Body img={sofa} />
      </div>
    </div>
  );
}
