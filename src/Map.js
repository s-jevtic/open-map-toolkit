import "./Map.css";
import {
  MapLibreMap,
  MlNavigationTools,
  MlScaleReference,
} from "@mapcomponents/react-maplibre";

const mapOpts = {
  style:
    "https://api.maptiler.com/maps/streets-v2/style.json?key=" +
    process.env.REACT_APP_MAPTILER_KEY, // stylesheet location
  center: [20.5, 44.8], // starting position [lng, lat]
  zoom: 9, // starting zoom
};

function Map() {
  return (
    <>
      <div id="map-wrapper-main">
        <MapLibreMap options={mapOpts} mapId="map-main" />
      </div>
      <div id="nav-wrapper-main">
        <MlNavigationTools mapId="map-main" />
      </div>
      <div
        id="scale-wrapper-main"
        className="absolute bottom-[15px] left-[15px]"
      >
        <MlScaleReference mapId="map-main" />
      </div>
    </>
  );
}

export default Map;
