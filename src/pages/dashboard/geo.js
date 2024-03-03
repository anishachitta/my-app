import React from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/africa.json";

const MapChart = ({ data }) => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 200,
        center: [0, 20]
      }}
      width={800}
      height={500}
    >
      <ZoomableGroup zoom={1}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {data.map(({ city_code, lng, lat, population }) => (
          <Marker key={city_code} coordinates={[lng, lat]}>
            <circle r={3} fill="#FF5533" />
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
