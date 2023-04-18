import { MlMeasureTool } from "@mapcomponents/react-maplibre";
import React, { useEffect, useState } from "react";

function PolylineTool({ units }) {
  const [unit, setUnit] = useState("kilometers");
  useEffect(() => {
    if (units === "metric") {
      setUnit("kilometers"); // PLACEHOLDER
    } else if (units === "imperial") {
      setUnit("miles"); // PLACEHOLDER
    }
  }, [units]);
  return <MlMeasureTool measureType={"line"} unit={unit} />;
}

export default PolylineTool;
