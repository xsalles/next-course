import { SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useCallback } from "react";

export default function Search() {
  const router = useRouter();
  const postSearched = router.query.post as string;

  const handleSearch = useCallback((event: FormEvent) => {
    event.preventDefault();

    if (postSearched.trim()) {
       router.push(`/blog?post=${encodeURIComponent(postSearched.trim())}`)
    }
  }, [postSearched, router]);

  function handleQueryChange(event: ChangeEvent<HTMLInputElement>) {
    const querySearching = event.target.value

    router.push(`/blog?post=${encodeURIComponent(querySearching)}`, undefined, {
        shallow: true,
        scroll: false,
    });
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center bg-transparent border border-gray-400 rounded-lg px-4 gap-3 h-10 transition-colors duration-200 ease-in-out focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300">
      <SearchIcon className="w-4 h-4 text-gray-300" />
      <input
        onChange={handleQueryChange}
        type="text"
        placeholder="Buscar"
        className="bg-transparent placeholder:text-body-sm placeholder:text-gray-300"
      />
    </form>
  );
}
