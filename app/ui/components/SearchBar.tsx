"use client";

import { useFetchOptions } from "@/app/hooks/useFetchOptions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const { options } = useFetchOptions();
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState<string>("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOptions(value);

    if (value) router.push(`/breed/${value}`);
  };

  return (
    <div className="relative flex">
      <select
        value={selectedOptions}
        onChange={handleChange}
        className="mt-6 w-4/5 appearance-none rounded-full px-4 py-2 font-semibold text-cannonBlack outline-none md:w-full xl:mt-20 xl:p-6"
      >
        <option value="">Search...</option>
        {options.map((cat, index) => (
          <option value={cat.value} key={index}>
            {cat.label}
          </option>
        ))}
      </select>
      {/*<Icons.search className="absolute flex cursor-pointer justify-end self-center text-cannonBlack left-96" /> */}
    </div>
  );
};

export default SearchBar;
