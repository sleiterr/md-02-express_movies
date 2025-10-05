import { Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full max-w-md px-4">
      <Field>
        <Description className="text-sm/6 text-white/50"></Description>
        <Input
          className={clsx(
            "block w-full rounded-lg border-none bg-white/5 px-4 py-2 text-sm/6 text-white",
            "focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-0",
            "transition-all duration-300"
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
