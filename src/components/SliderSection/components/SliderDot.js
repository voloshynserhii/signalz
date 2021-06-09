import "../slider-section.scss";

const SliderDot = (props) => {
  return (
    <div className="slider-dot">
      <div className="flex-center slider-number">{props.number}</div>
      <h5>{props.dotName}</h5>
    </div>
  );
};

export default SliderDot;
