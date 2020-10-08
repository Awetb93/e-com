import React, { useState, useEffect } from "react";
export default function SubHero({ src1, src2 }) {
  const [bedHeroPic, setBedHeroPic] = useState(src1);
  useEffect(() => {
    const time = setInterval(() => {
      setBedHeroPic(src2);
    }, 6000);
    const time2 = setInterval(() => {
      setBedHeroPic(src1);
    }, 12000);
    return () => {
      clearInterval(time);
      clearInterval(time2);
    };
  }, [src2, src1]);

  return (
    <div
      style={{
        width: "100%",
        height: "70vh",
        backgroundImage: "url(" + bedHeroPic + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    ></div>
  );
}
