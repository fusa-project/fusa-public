import { useState, useEffect, Fragment } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import API from '../utilities/api';
import { timestamp_to_datetime, bytes_to_megabytes } from '../utilities/functions';
import { popupContent } from "../style/popupStyles";

const Map = () => {
  const [audios, setAudios] = useState([])

  useEffect(() => {
    getAudios()
  }, [])

  const getAudios = async () => {
    try {
        const response = await API.get(`/audio/}`);
        const audios = await response.data;
        setAudios(audios)
    } catch (err) {
        console.error(err);
    }
  }

  return (
    <Fragment>
      <MapContainer
        center={[-39.8139, -73.2458]}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "950px", width: "100%" }}
      >
      <TileLayer
        url="https://api.mapbox.com/styles/v1/mvernier/ckp75i4sw396418n6gbb4psz0/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibXZlcm5pZXIiLCJhIjoiY2twNzRxeTJzMDQycTJvbzA5N2NyN283biJ9.nMykNl6xWvMe8MV8DLH-ig"
        />
      {audios.map((audio, idx) => 
        <Marker key={`marker-${idx}`} position={[audio.latitude, audio.longitude]}>
          <Popup style={popupContent}>
            <div>
              <table>
                <tbody>
                  <tr>
                    <th>Nombre</th>
                    <td>{audio.filename}</td>
                  </tr>
                  <tr>
                    <th>Tamaño</th> 
                    <td>{bytes_to_megabytes(audio.size)}</td>
                  </tr>
                  <tr>
                    <th>Latitud</th>
                    <td>{audio.latitude}</td>
                  </tr>
                  <tr>
                    <th>Longitud</th>
                    <td>{audio.longitude}</td>
                  </tr>
                  <tr>
                    <th>Fecha</th>
                    <td>{timestamp_to_datetime(audio.recorded_at)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <audio preload="auto" id="myAudio" controls controlsList="nodownload">
              <source src={"data:audio/x-wav;base64," + audio.data}/>
            </audio>
          </Popup>
        </Marker>
      )}
      </MapContainer>
   </Fragment>
  );
};

export default Map;  