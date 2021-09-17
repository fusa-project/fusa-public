import { MapContainer, TileLayer, Marker, Popup, useMapEvents} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useState, useEffect } from "react";
import useGeolocation from 'react-hook-geolocation'

const MapEvents = ( {onClick, setPosition} ) =>{
  useMapEvents({
    click(event){
      onClick?.(event)
      setPosition({lat: event.latlng.lat, lng: event.latlng.lng})
    }
  })
  return null;
}

function getHeight(windowWidth) {
  var height
  if (windowWidth > 960) height = "750px"
  else height = "400px"
  return height
}

export const Map = ( {onClick, currentPosition} ) => {
  const [map, setMap] = useState();
  const [position, setPosition] = useState({lat: '', lng: ''})
  const windowWidth = window.innerWidth

  const location = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 1500,
    timeout: 13000
  });

  useEffect(() => {
    if (location.latitude && map) {
      var latitude = location.latitude
      var longitude = location.longitude
      var coords = {lat: latitude, lng: longitude}
      map.panTo([latitude, longitude]);
      setPosition(coords)
    }
  }, [map, location]);

  return (
    <div>
      { location.latitude &&
        <MapContainer
          id="map"
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: getHeight(windowWidth), width: "100%" }}
          whenCreated={setMap}
        >
        <MapEvents onClick={onClick} setPosition={setPosition}/>
          <TileLayer url="https://api.mapbox.com/styles/v1/mvernier/ckp75i4sw396418n6gbb4psz0/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibXZlcm5pZXIiLCJhIjoiY2twNzRxeTJzMDQycTJvbzA5N2NyN283biJ9.nMykNl6xWvMe8MV8DLH-ig" />
          {
            currentPosition.lat &&
            <Marker position= { currentPosition } >
            </Marker>
          }
        </MapContainer>
      }
    </div>
  );
};