import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import './Map.css'

function Map({ mapReadyCallback }) {
	const mlglMapContainer = useRef(null);
	useEffect(() => {
		const map = new maplibregl.Map({
			container: mlglMapContainer.current,
			style: "https://demotiles.maplibre.org/style.json", // stylesheet location
			center: [20.5, 44.8], // starting position [lng, lat]
			zoom: 9, // starting zoom
		});
		mapReadyCallback(map);
	}, [mlglMapContainer.current]);
	return (
		<>
			<div id="maplibre-gl-container" ref={mlglMapContainer}></div>
		</>
	);
}

export default Map;
