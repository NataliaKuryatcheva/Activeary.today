import { useEffect } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import L from 'leaflet'
import '../../leaflet/leaflet.css'

let mapInstance = null

const initializeMap = (location, setLocation) => {
  const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    osmAttr = '&copy Activeary.today',
    osm = L.tileLayer(osmUrl, { maxZoom: 18, attribution: osmAttr })

  mapInstance = L.map('mapid')
    .setView([location.lat || 43.175663, location.lng || 27.885991], 16)
    .addLayer(osm)

  L.marker([location.lat || 43.175663, location.lng || 27.885991])
    .addTo(mapInstance)
    .bindPopup('Activity location')
    .openPopup()

  mapInstance.on('click', event => {
    setLocation({
      lat: event.latlng.lat,
      lng: event.latlng.lng
    })

    const popup = L.popup()
    popup
      .setLatLng(event.latlng)
      .setContent('Activity location: ' + event.latlng.toString())
      .openOn(mapInstance)
  })
}

const MapPicker = ({ location, setLocation }) => {
  useEffect(() => {
    initializeMap(location, setLocation)

    return () => {
      mapInstance.off()
      mapInstance.remove()
    }
  }, [location, setLocation])

  return (
    <div className='MapPicker'>
      <h2>Map</h2>
      <div
        id='mapid'
        css={css`
          width: 300px;
          height: 400px;
        `}
      />
    </div>
  )
}

export default MapPicker
