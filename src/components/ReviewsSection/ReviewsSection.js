import ReviewsSlider from "./ReviewsSlider";

import "./reviews-section.scss";

const ReviewsSection = () => {
  return (
    <div className="reviews" id="reviews">
      <h2>What’s our client say about us</h2>
      <div className="reviews-wrapper">
        <ReviewsSlider />
      </div>
    </div>
  );
};
export default ReviewsSection;
