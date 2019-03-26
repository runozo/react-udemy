var React = require('react');
var ReactDOM = require('react-dom');
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

// Testing object spreading

const position = [51.505, -0.09]
const map = (
  <Map center={position} zoom={13} style={{width:400 + 'px', height:400 + 'px'}}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <Marker position={position}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker>
  </Map>
)

ReactDOM.render(
    map,
    document.getElementById('app')
);