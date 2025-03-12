import Form from "next/form";

export function SearchQuery() {
  return (
    <Form action="/details" className="flex gap-2">
      <input
        name="query"
        type="text"
        className="flex-1 px-4 py-2 rounded-lg border border-gray-400 focus:outline-none"
        placeholder="Search product"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-blue-500 focus:outline-none text-white"
      >
        Search
      </button>
    </Form>
  );
}
