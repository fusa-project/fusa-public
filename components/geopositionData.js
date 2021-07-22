import { MapContainer, TileLayer, Marker, Popup, useMapEvents} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useState, useEffect } from "react";

const MapEvents = ( {onClick, setPosition} ) =>{
  useMapEvents({
    click(event){
      onClick?.(event)
      setPosition({lat: event.latlng.lat, lng: event.latlng.lng})
    }
  })
  return null;
}

export const Map = ( {onClick} ) => {
  const [map, setMap] = useState();
  const [position, setPosition] = useState({lat: -39.80, lng: -73.22})

  useEffect(() => {
    if ("geolocation" in navigator && map) {
      navigator.geolocation.getCurrentPosition(function (location) {
        var latitude = location.coords.latitude
        var longitude = location.coords.longitude
        var coords = {lat: latitude, lng: longitude}
        map.panTo([latitude, longitude]);
        setPosition(coords)
      });
    }
  }, [map]);

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "750px", width: "100%" }}
      whenCreated={setMap}
    >
    <MapEvents onClick={onClick} setPosition={setPosition}/>
      <TileLayer url="https://api.mapbox.com/styles/v1/mvernier/ckp75i4sw396418n6gbb4psz0/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibXZlcm5pZXIiLCJhIjoiY2twNzRxeTJzMDQycTJvbzA5N2NyN283biJ9.nMykNl6xWvMe8MV8DLH-ig" />
      <Marker position= { position } >
        <Popup>
          <div>
              <ul>
                  <li><b>Latitud:</b> {position.lat}</li>
                  <li><b>Longitud:</b> {position.lng}</li>
              </ul>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};