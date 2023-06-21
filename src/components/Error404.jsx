import { ReturnHome } from "./ReturnHome";
import ERROR404 from "../assets/img/error404.gif";

export const Error404 = () => {
    return (
        <div className="pb-10 pt-8 text-center">
            <h1 className="text-4xl pt-4 pb-8 font-bold">Oops...</h1>
            <h2 className="text-3xl py-4">
                The page you are looking for may be moved, deleted or possibly
                never existed!{" "}
            </h2>

            <div className="flex justify-center">
                <img src={ERROR404} alt="error404" className="w-46 md:w-1/2 lg:w-1/3 rounded-3xl mb-5" />
            </div>
            

            <div className="flex justify-center py-4 ">
                <ReturnHome />
            </div>
        </div>
    );
};
