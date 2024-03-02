import MapComponent from "../Components/MapComponent";
import '../Components/compStyle.css';

export default function Competitions(){
    return (
        <div className="Container bg-secondary rounded m-3">
            <h1 className="d-flex justify-content-center pt-2">Competitions</h1>
            <div className="map m-3">
                <MapComponent />
            </div>
        </div>
    );
}