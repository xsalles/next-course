import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <form className="flex items-center bg-transparent border border-gray-400 rounded-lg px-4 gap-3 h-10">
      <SearchIcon className="w-4 h-4  text-gray-300" />
      <input
        type="text"
        placeholder="Buscar"
        className="bg-transparent placeholder:text-body-sm placeholder:text-gray-300"
      />
    </form>
  );
}
