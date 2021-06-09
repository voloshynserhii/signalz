import '../reviews-section.scss';

const ReviewSlide = (props) => {
    return (
        <div className="review">
            <h5>{props.title}</h5>
            <p>{props.text}</p>
            <div className="flex-between-center review-bottom">
                <div className="flex-between-center">
                    <img src={props.image} alt={props.title}/>
                    <div className="review-name">
                        <div className="bold-small">{props.name}</div>
                        <div className="bold-gray">{props.position}</div>
                    </div>
                </div>
                <div>
                    <img src={props.starImage} alt={props.title}/>
                </div>
            </div>
        </div>
    )
}

export default ReviewSlide;