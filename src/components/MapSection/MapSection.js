import MapImage from "../../assets/images/map.png";
import "./map-section.scss";

const MapSection = () => {
  return (
    <div className="map">
      <h2>People join us around the world</h2>
      <img src={MapImage} alt="map" />
    </div>
  );
};
export default MapSection;
