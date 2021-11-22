import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const UserLocation = ({ position, address }) => {
  return (
    <div id="map">
      <MapContainer center={position} zoom={5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>{address}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default UserLocation;
