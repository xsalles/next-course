import { CircleX, SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useCallback, useRef } from "react";

export default function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      if (inputRef.current && inputRef.current.value.trim()) {
        router.push(
          `/blog?post=${encodeURIComponent(inputRef.current?.value.trim())}`
        );
      }
    },
    [inputRef]
  );

  function handleQueryChange() {
    if (inputRef.current) {
      router.push(
        `/blog?post=${encodeURIComponent(inputRef.current.value)}`,
        {
          scroll: false,
        }
      );
    }
  }

  function deleteSearch() {
    if (inputRef.current) {
      inputRef.current.value = "";
    }

    router.push("/blog", {
      scroll: false,
    });
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center bg-transparent border border-gray-400 rounded-lg px-4 gap-3 h-10 transition-colors duration-200 ease-in-out focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300"
    >
      <SearchIcon className="w-4 h-4 text-gray-300" />
      <input
        ref={inputRef}
        onChange={handleQueryChange}
        type="text"
        placeholder="Buscar"
        className="bg-transparent placeholder:text-body-sm placeholder:text-gray-300"
      />

      {inputRef.current && inputRef.current?.value.length > 0 && (
        <CircleX
          onClick={deleteSearch}
          className="cursor-pointer text-gray-300 w-4 h-4"
        />
      )}
    </form>
  );
}
