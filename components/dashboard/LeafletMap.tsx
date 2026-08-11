"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* Fix Leaflet marker icons */

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
    <div className="h-[320px] w-full overflow-hidden rounded-xl">
      <MapContainer
        center={[13.0827, 80.2707]}
        zoom={4}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        <Marker position={[13.0827, 80.2707]}>
          <Popup>
            <div className="text-sm">
              <strong>Chennai</strong>
              <br />
              🌊 Ocean observation point
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}