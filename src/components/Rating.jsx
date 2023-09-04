import StarRatings from "react-star-ratings";
import { darkModeContext } from "../context/ThemeProvider";
import { useContext } from "react";

export const Rating = (props) => {
    const { darkMode } = useContext(darkModeContext);

    return (
        <StarRatings
            numberOfStars={5}
            rating={props.ratingVote}
            starRatedColor="rgba(41, 21, 7, 1)"
            starDimension="20px"
            starSpacing="5px"
            className="self-center"
            name="rating"
        />
    );
};
