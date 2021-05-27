import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {
  return (
    <MapContainer
      center={[-39.8139, -73.2458]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "800px", width: "100%" }}
    >
      <TileLayer
        url="https://api.mapbox.com/styles/v1/mvernier/ckp75i4sw396418n6gbb4psz0/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibXZlcm5pZXIiLCJhIjoiY2twNzRxeTJzMDQycTJvbzA5N2NyN283biJ9.nMykNl6xWvMe8MV8DLH-ig"
        />
    </MapContainer>
  );
};

export default Map;  