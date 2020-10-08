import React from "react";
import LightingHero from "./subcomponents/subHero";
import Body from "./subcomponents/SubBody";
import lighthero1 from "./img/lighthero.jpg";
import lighthero2 from "./img/lightbulb4.jpg";
import { light } from "./data";
export default function Lightening() {
  return (
    <div>
      <LightingHero src1={lighthero1} src2={lighthero2} />
      <Body img={light} />
    </div>
  );
}
