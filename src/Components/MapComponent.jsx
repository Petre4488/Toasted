import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import iconMap from "../assets/marker.png";
import MarkerClusterGroup from 'react-leaflet-cluster';
import mapCard from '../assets/cardMap.jpg';
import './compStyle.css'

export default function MapComponent() {

    //Set the markers for the map with location and popUp text
    const markers = [
        {
            geocode: [44.33131419351009, 23.789605195232685],
            popUp: "Demo Craiova"
        },

        {
            geocode: [45.74506182554649, 22.922177954912943],
            popUp: "Demo Hunedoara"

        },

        {
            geocode: [46.19765311042503, 21.29934872195288],
            popUp: "Regionala Arad"
        }
    ];

    const customIcon = new Icon({
        iconUrl: iconMap,
        iconSize: [50, 50]
    
    })

    return( 
        <>
            {/*Set the map container with the center and zoom level; added classes with bootstrap for width and height*/}   
            <MapContainer center={[45.9432, 24.9668]} zoom={7} className='w-100 h-100'>
            {/*Set the tile layer for the map with the url from openstreetmap and the attribution for the map source*/}
            <TileLayer
                    attribution='&copy; <a href="https://www.jawg.io">Jawg</a> | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://tile.jawg.io/1e874013-1e9d-40bb-90fe-8badc19969c9/{z}/{x}/{y}{r}.png?access-token=DWixprdZc5krI1SUUWKST8nKnFA08O5d9BqwIRCZcmxb4Q4JVeIOdVFzQcfhlAZh'
                 />
                {/*Set the marker cluster group for the map; basically, the markers will become one if zoom out */}
                <MarkerClusterGroup>                    
                    {/*Set the markers for the map with the geocode and popUp text*/}
                    {markers.map((marker) => (
                        <Marker position={marker.geocode} icon={customIcon} key={marker.geocode}>
                            <Popup className='bg-dark'>
                                {/* <p>{marker.popUp}</p> */}
                                <img src={mapCard} alt="card" style={{width: '12vh'}} />
                            </Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>

        </>
    )
        
}