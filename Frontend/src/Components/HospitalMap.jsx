// HospitalMap.jsx — Show hospitals on Leaflet Map
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix icon bug in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const HospitalMap = ({ hospitals, center }) => {
  return (
    <div style={{ height: "400px", marginTop: "2rem" }}>
      <MapContainer center={center} zoom={13} scrollWheelZoom={true} style={{ height: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {hospitals.map((hosp, index) => (
          <Marker
            key={index}
            position={[
              hosp.location.coordinates[1],
              hosp.location.coordinates[0],
            ]}
          >
            <Popup>
              <strong>{hosp.name}</strong><br />
              {hosp.address || "No address"}<br />
              ⭐ {hosp.rating ?? "No rating"}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default HospitalMap;
