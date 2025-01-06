import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// type Position = [number, number];

const position: [number, number] = [-0.0322530349430759, 111.34328392503724];

export default function Maps() {
  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Warung Sate Malanda <br /> Kunjungi kami di sini!
        </Popup>
      </Marker>
    </MapContainer>
  );
}
