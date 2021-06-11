import '../slider-section.scss';

const SliderItem = (props) => {
    return (
        <div className="slider-item">
            <div className="slider-image">
                <img src={props.image} alt={props.title} />
            </div>
        </div>
    )
}
export default SliderItem;