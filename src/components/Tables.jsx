import React from "react";
import TableHero from "./subcomponents/subHero";
import Body from "./subcomponents/SubBody";
import tablehero1 from "./img/hero5.jpg";
import tablehero2 from "./img/hero6.jpg";
import { table } from "./data";
export default function Tables() {
  return (
    <div>
      <TableHero src1={tablehero1} src2={tablehero2} />
      <Body img={table} />
    </div>
  );
}
