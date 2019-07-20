import { useEffect } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import L from 'leaflet'
import '../../leaflet/leaflet.css'

const initializeMap = () => {
  var mymap = L.map('mapid').setView([51.505, -0.09], 13)

  L.tileLayer(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
    {
      maxZoom: 18,
      id: 'mapbox.streets'
    }
  ).addTo(mymap)

  // L.marker([51.5, -0.09])
  //   .addTo(mymap)
  //   .bindPopup('<b>Hello world!</b><br />I am a popup.')
  //   .openPopup()

  L.circle([43.175663, 27.885991], 100, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
  })
    .addTo(mymap)
    .bindPopup('I am a circle.')

  // L.polygon([[51.509, -0.08], [51.503, -0.06], [51.51, -0.047]])
  //   .addTo(mymap)
  //   .bindPopup('I am a polygon.')

  var popup = L.popup()

  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent('You clicked the map at ' + e.latlng.toString())
      .openOn(mymap)
  }

  mymap.on('click', onMapClick)
}

const MapPicker = ({ location, setLocation }) => {
  useEffect(() => {
    initializeMap()

    return () => {
      alert('componentWillUnmount')
    }
  }, [])

  return (
    <div className='MapPicker'>
      <h2>Map</h2>
      <div
        id='mapid'
        css={css`
          width: 600px;
          height: 400px;
        `}
      />
    </div>
  )
}

export default MapPicker
