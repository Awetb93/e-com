import React from "react";
import Chairhero from "./subcomponents/subHero";
import { chairs } from "./data";
import ChairHero2 from "./img/hero2.webp";
import Chair5 from "./img/chair5.webp";
import Body from "./subcomponents/SubBody";
import { Link, useParams } from "react-router-dom";
export default function Chairs() {
  const { id } = useParams();
  return (
    <div>
      <Chairhero src1={ChairHero2} src2={Chair5} />
      <div className="chair-content">
        <div className="sub-menu">
          <Link to={`/chairs/${id}`} className="link">
            Chairs
          </Link>
          <Link to={`/chairs/sofa/${id}`}>Sofa</Link>
        </div>
        <Body img={chairs} />
      </div>
    </div>
  );
}
