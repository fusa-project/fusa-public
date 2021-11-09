import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import { useState, useEffect } from 'react'

const MapEvents = ({ onClick, setPosition }) => {
  useMapEvents({
    click (event) {
      onClick?.(event)
      setPosition({ lat: event.latlng.lat, lng: event.latlng.lng })
    }
  })
  return null
}

const GeoLocation = ({ position }) => {
  const [location, setLocation] = useState({ lat: '', lng: '' })
  const map = useMap()

  useEffect(() => {
    map
      .locate()
      .on('locationfound', function (e) {
        map.panTo(e.latlng, 13)
        setLocation(e.latlng)
      })
      .on('locationerror', function (e) {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(function (location) {
            var latitude = location.coords.latitude
            var longitude = location.coords.longitude
            map.panTo([latitude, longitude])
            setLocation([latitude, longitude])
          })
        }
      })
  }, [])
  var currentLocation = position.lat ? position : location
  return <Marker position={currentLocation}></Marker>
}

function getHeight (windowWidth) {
  var height
  if (windowWidth > 960) height = '750px'
  else height = '400px'
  return height
}

const Map = ({ onClick }) => {
  const [position, setPosition] = useState({ lat: '', lng: '' })
  const windowWidth = window.innerWidth

  return (
    <div>
      <MapContainer
        id='map'
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: getHeight(windowWidth), width: '100%' }}
      >
        <MapEvents onClick={onClick} setPosition={setPosition} />
        <TileLayer url='https://api.mapbox.com/styles/v1/vitocox18/ckvr7h9nz10dm14p2s8pe1h40/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoidml0b2NveDE4IiwiYSI6ImNqOXI2cWlxZjY3YnUzMm1xNDIzYWhiNjgifQ.bQfM090UwQ5RRSFqunVhjQ' />
        <GeoLocation position={position} />
      </MapContainer>
    </div>
  )
}

export default Map
