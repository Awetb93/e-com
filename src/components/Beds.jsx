import React from "react";
import Bedhero from "./subcomponents/subHero";
import Body from "./subcomponents/SubBody";
import bedHero1 from "./img/hero3.png";
import bedHero2 from "./img/hero4.jpg";
import { bedList } from "./data";
export default function Beds() {
  return (
    <>
      <Bedhero src1={bedHero1} src2={bedHero2} />

      <Body img={bedList} />
    </>
  );
}
