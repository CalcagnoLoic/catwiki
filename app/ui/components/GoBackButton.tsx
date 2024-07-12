import Link from "next/link";
import { ButtonPosition } from "@/app/lib/definitions";

const GoBackButton = ({ cssPosition }: ButtonPosition) => (
  <Link href={"/"} className="italic">
    <button
      className={`mt-8 rounded-xl bg-calico p-4 font-semibold shadow-lg transition duration-1000 ease-in-out hover:bg-cioccolato hover:text-white hover:shadow-calico ${cssPosition}`}
    >
      Back to the homepage
    </button>
  </Link>
);

export default GoBackButton;
