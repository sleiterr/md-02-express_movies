import { Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full max-w-md px-4">
      <Field>
        <Description className="text-sm/6 text-white/50"></Description>
        <Input
          className={clsx(
            "mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
          )}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search movies"
        />
      </Field>
    </div>
  );
};

export default SearchBar;
