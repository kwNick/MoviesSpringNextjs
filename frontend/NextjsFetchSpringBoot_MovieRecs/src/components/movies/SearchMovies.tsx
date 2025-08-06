'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchMovies = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        // console.log(term);
        const params = new URLSearchParams(searchParams);
        params.set("page", "1");
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="w-2/5 flex items-center justify-center">
            <label htmlFor="search" className="sr-only">Search</label>
            <input
                id="search"
                name="search"
                placeholder="Search..."
                className=" w-4/5 rounded-lg p-1 text-accent outline-none border-[1px] border-colour focus:border-accent"
                onChange={(e) => { handleSearch(e.target.value) }}
                defaultValue={searchParams.get('query')?.toString()}
            />
        </div>
    )
}
export default SearchMovies