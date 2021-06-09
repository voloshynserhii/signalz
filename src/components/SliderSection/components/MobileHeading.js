import "../slider-section.scss";

const MobileHeading = (props) => {
  return (
    <div className=" flex-center mobile-heading">
      <span>{props.number}</span>
      <span>{props.dotName}</span>
    </div>
  );
};

export default MobileHeading;
