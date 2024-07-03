import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center rounded-t-3xl bg-black px-6 py-7 md:flex-row md:justify-between xl:px-24">
      <Image
        src="/img/CatwikiLogo.svg"
        width={130}
        height={40}
        alt="Welcome to Catwiki"
        className="invert"
      />
      <p className="mt-5 self-center text-center text-white md:mt-0 md:text-start">
        © created by{" "}
        <a href="https://github.com/CalcagnoLoic" target="_blanck">
          @CalcagnoLoic
        </a>{" "}
        - devChallenge.io 2024{" "}
      </p>
    </footer>
  );
};

export default Footer;
