import Forms from "@/app/ui/books/create-forms";
import Table from "@/app/ui/books/tables";
import { fetchBookData } from "@/app/lib/bookAPI";

export default async function Page() {
  const books = await fetchBookData();

  return (
    <main>
      <h1>Book Dashboard</h1>
      <div>
        <Forms />
      </div>
      <div className="w-10/12 my-3 mx-auto overflow-x-auto">
        <Table products={books} />
      </div>
    </main>
  );
}
