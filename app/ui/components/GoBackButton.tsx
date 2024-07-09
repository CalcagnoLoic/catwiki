import Link from "next/link";
import { ButtonPosition } from "@/app/lib/definitions";


const GoBackButton = ({ cssPosition }: ButtonPosition) => (
  <Link href={"/"} className="italic">
    <button className={`bg-calico mt-8 rounded-xl p-4 ${cssPosition}`}>
      Back to the homepage
    </button>
  </Link>
);

export default GoBackButton;
