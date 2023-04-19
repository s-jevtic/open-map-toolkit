import React, { useState } from "react";
import Tool from "./Tool";

function ToolUi({ toolId, onToolDeselect }) {
  const [units, setUnits] = useState("metric"); // TODO
  if (!toolId) {
    return <></>;
  }
  return (
    <>
      <div
        id="tool-ui"
        className="absolute right-0 border-[5px] lg:border-r-0 lg:rounded-l-md bg-slate-50 border-slate-900 dark:border-transparent dark:bg-slate-900 text-slate-900 dark:text-slate-50/80 lg:opacity-80 opacity-100 lg:w-96 w-full lg:h-96 max-h-32 p-2 lg:my-12 flex flex-col justify-between"
      >
        <div id="tool-container" className="text-center">
          <Tool toolId={toolId} units={units} />
        </div>
        <button onClick={onToolDeselect}>close</button>
        {/*TODO*/}
      </div>
    </>
  );
}

export default ToolUi;
