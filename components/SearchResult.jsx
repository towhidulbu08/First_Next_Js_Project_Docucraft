import Link from "next/link";

export default function SearchResult({ results, term, closeSearchResults }) {
  return (
    <div className="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow">
      <p class="!text-lg">
        Showing results for
        <span class="font-semibold"> &quot;{term}&quot;</span>
      </p>{" "}
      <ul role="list" class="divide-y divide-gray-100 [&>*]:py-2">
        {results.map((result) => (
          <li key={result.id} class="">
            <Link
              onClick={(e) => closeSearchResults(e)}
              class="transition-all hover:text-emerald-600"
              href={`docs/${result.id}`}
            >
              {" "}
              {result.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
