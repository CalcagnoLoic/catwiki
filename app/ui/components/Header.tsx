import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Image
        src="/img/CatwikiLogo.svg"
        width={130}
        height={40}
        alt="Welcome to Catwiki"
      />
    </header>
  );
};

export default Header;
