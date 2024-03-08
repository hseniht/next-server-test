// import Forms from "@/app/ui/books/create-forms";
import Form2 from "@/app/ui/books/forms";
import Table from "@/app/ui/books/tables";
import { fetchBookData } from "@/app/lib/bookAPI";
// import { Panel } from "@/app/ui/panels";
export default async function Page() {
  const books = await fetchBookData();

  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="p-2">Book Dashboard</h1>
      {/* <Forms /> */}
      <Form2 />
      {/* <Panel>
        <div>Test Panel</div>
      </Panel> */}
      <div className="w-10/12 my-3 mx-auto overflow-x-auto">
        <Table products={books} />
      </div>
    </main>
  );
}
