import PolylineTool from "./tools/PolylineTool";
import PolygonTool from "./tools/PolygonTool";

function Tool({ toolId, unit }) {
  const tools = {
    polyline: <PolylineTool unit={unit} />,
    polygon: <PolygonTool unit={unit} />,
  };

  return tools[toolId];
}

export default Tool;
