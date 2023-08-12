import React, { useEffect, useRef } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";


export default function BarChartRaceChart({ data }) {
  const ref = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    const main = runtime.module((name) => {
      if (name === "chart") {
        return new Inspector(ref.current);
      }
    });
    main.redefine("data", data);
    return () => runtime.dispose();
  }, [data]);

  return <div ref={ref} />;
}
