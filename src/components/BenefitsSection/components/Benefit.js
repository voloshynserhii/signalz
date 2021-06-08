import "../bebefits-section.scss";

const Benefit = (props) => {
  return (
    <div className="benefit">
      <img src={props.image} alt={props.title} />
      <h5>{props.title}</h5>
      <p>{props.text}</p>
    </div>
  );
};
export default Benefit;
