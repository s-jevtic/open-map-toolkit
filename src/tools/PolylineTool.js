import { MlMeasureTool } from "@mapcomponents/react-maplibre";
import React, { useState } from "react";

function PolylineTool({ units }) {
  const [unit, setUnit] = useState(null);
  if (units === "metric") {
    setUnit("kilometers"); // PLACEHOLDER
  } else if (units === "imperial") {
    setUnit("miles"); // PLACEHOLDER
  }
  return <MlMeasureTool measureType={"line"} unit={unit} />;
}

export default PolylineTool;
