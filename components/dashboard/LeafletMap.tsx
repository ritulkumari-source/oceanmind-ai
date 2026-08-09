"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function LeafletMap() {
  return (
    <div className="h-[430px] rounded-xl overflow-hidden">

      <MapContainer
        center={[13.0827, 80.2707]}
        zoom={4}
        scrollWheelZoom
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[13.0827, 80.2707]}>
          <Popup>
            Chennai 🌊
          </Popup>
        </Marker>

      </MapContainer>

    </div>
  );
}