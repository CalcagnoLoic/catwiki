import StarRatings from "react-star-ratings";

export const Rating = (props) => {
    return (
        <StarRatings
            numberOfStars={5}
            rating={props.ratingVote}
            starRatedColor="rgba(84, 68, 57, 1)"
            starDimension="20px"
            starSpacing="5px"
            className="self-center"
            name="rating"
        />
    );
};
