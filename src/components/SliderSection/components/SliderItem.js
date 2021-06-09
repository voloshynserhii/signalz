import '../slider-section.scss';

const SliderItem = (props) => {
    return (
        <div className="slider-item">
            {/* <h2>{props.title}</h2> */}
            <div className="slider-image">
                <img src={props.image} alt={props.title} />
            </div>
        </div>
    )
}
export default SliderItem;