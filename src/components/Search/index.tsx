import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <form className="flex items-center bg-transparent border border-gray-400 rounded-lg px-4 gap-3 h-10 transition-colors duration-200 ease-in-out focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300">
      <SearchIcon className="w-4 h-4 text-gray-300" />
      <input
        type="text"
        placeholder="Buscar"
        className="bg-transparent placeholder:text-body-sm placeholder:text-gray-300"
      />
    </form>
  );
}
