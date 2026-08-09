"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import L from "leaflet";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const locations = [
  {
    name: "Chennai",
    position: [13.0827, 80.2707] as [number, number],
    temp: "29°C",
    salinity: "35 PSU",
  },
  {
    name: "Bay of Bengal",
    position: [15.5, 88.5] as [number, number],
    temp: "30°C",
    salinity: "34.8 PSU",
  },
  {
    name: "Arabian Sea",
    position: [16.8, 69.5] as [number, number],
    temp: "28°C",
    salinity: "35.4 PSU",
  },
  {
    name: "Indian Ocean",
    position: [-10, 75] as [number, number],
    temp: "27°C",
    salinity: "35.2 PSU",
  },
];

export default function LeafletMap() {
  return (
    <div className="h-[700px] w-full overflow-hidden rounded-3xl border border-slate-800">

      <MapContainer
        center={[13.5, 80]}
        zoom={4}
        zoomControl={false}
        scrollWheelZoom={true}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <ZoomControl position="bottomright" />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        {locations.map((location) => (
          <Marker
            key={location.name}
            position={location.position}
          >
            <Popup>

              <div className="space-y-2">

                <h3 className="font-bold">
                  {location.name}
                </h3>

                <p>
                  🌡 Temperature:
                  <strong> {location.temp}</strong>
                </p>

                <p>
                  🌊 Salinity:
                  <strong> {location.salinity}</strong>
                </p>

                <p className="text-green-600 font-medium">
                  Stable Conditions
                </p>

              </div>

            </Popup>
          </Marker>
        ))}

      </MapContainer>

    </div>
  );
}