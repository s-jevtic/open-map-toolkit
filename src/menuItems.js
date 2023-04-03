import rulerIcon from "./icons/jetxee-ruler-simple-without-figures-diag.svg";
import polylineIcon from "./icons/mono-tool-polyline.svg";
import polygonIcon from "./icons/mono-tool-polygon.svg";

export const menuItems = [
  {
    name: "Measurements",
    icon: rulerIcon,
    submenus: [
      {
        name: "Polyline distance measurement",
        icon: polylineIcon,
        toolId: "polyline",
      },
      {
        name: "Polygon area measurement",
        icon: polygonIcon,
        toolId: "polygon",
      },
    ],
  },
];
