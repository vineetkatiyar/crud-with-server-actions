import Form from "next/form";
import { Button } from "./ui/button";

export function SearchQuery() {
  return (
    <Form action="/details" className="flex gap-2">
      <input
        name="query"
        type="text"
        className="flex-1 px-4 py-2 rounded-lg border border-gray-400 focus:outline-none"
        placeholder="Search product"
      />
      <Button
        type="submit"
        className="px-4 py-2 bg-gray-600 rounded-lg focus:outline-none text-white"
      >
        Search
      </Button>
    </Form>
  );
}
