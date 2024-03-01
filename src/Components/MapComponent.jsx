import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import PropTypes from 'prop-types';

const MapComponent = ({ center = [51.505, -0.09], zoom = 13 }) => {
    return (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

MapComponent.propTypes = {
    center: PropTypes.arrayOf(PropTypes.number),
    zoom: PropTypes.number,
};

export default MapComponent;
