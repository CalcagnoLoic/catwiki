import { Link } from "react-router-dom";
import { BsBoxArrowLeft } from "react-icons/bs";

export const ReturnHome = () => {
    return (
        <div className="flex flex-row gap-2 hover:italic hover:underline">
            <BsBoxArrowLeft className="self-center" />
            <Link to="/catwiki"> Return to the homepage</Link>
        </div>
    );
};
