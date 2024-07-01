import { Icons } from "../icons";

const SearchBar = () => {
  return (
    <div className="flex">
      <input
        type="text"
        className="text-cannonBlack mt-6 w-1/2 rounded-full px-4 py-2 font-semibold outline-none md:w-full xl:mt-20 xl:p-6"
        placeholder="Search your breed"
      />
      <Icons.search className="text-cannonBlack relative flex cursor-pointer justify-end self-center" />
    </div>
  );
};

export default SearchBar;
