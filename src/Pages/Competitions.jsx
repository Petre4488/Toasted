import MapComponent from "../Components/MapComponent";
import '../App.css';

export default function Competitions(){
    return (
        <div className="Container mapContainer bg-secondary rounded ">
            <h1 className="d-flex justify-content-center mt-2">Competitions</h1>
            <div className="mapComponent">
                <MapComponent  />
            </div>
        </div>
    );
}