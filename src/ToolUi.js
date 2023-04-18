import React, { useState } from "react";
import Tool from "./Tool";

function ToolUi({ toolId, onToolDeselect }) {
  const [units, setUnits] = useState("metric"); // TODO
  if (!toolId) {
    return <></>;
  }
  return (
    <>
      <div className="flex-none dark:bg-slate-900 text-slate-900 dark:text-slate-50/80 md:opacity-80 opacity-100 md:w-96 w-full h-32">
        <Tool toolId={toolId} units={units} />
        <button onClick={onToolDeselect}>close</button>
        {/*TODO*/}
      </div>
    </>
  );
}

export default ToolUi;
