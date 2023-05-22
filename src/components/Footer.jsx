import CATWIKILOGO from "../assets/img/CatwikiLogo.svg";

export const Footer = () => {
    return (
        <div className="bg-black rounded-t-3xl px-5 py-8 flex flex-col md:flex-row md:justify-between items-center">
            <img
                src={CATWIKILOGO}
                alt="Catwiki, the website for cats"
                className="invert w-fit block"
            />
            <p className="text-white self-center text-center">
                &copy; created by{" "}
                <a
                    href="https://github.com/CalcagnoLoic"
                    target="_blank"
                    rel="noreferrer"
                >
                    @CalcagnoLoic
                </a>{" "}
                - devChallenge.io 2023
            </p>
        </div>
    );
};
