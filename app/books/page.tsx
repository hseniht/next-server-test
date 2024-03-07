import Forms from "@/app/ui/books/create-forms";
import Table from "@/app/ui/books/tables";
export default async function Page() {
  const res = await fetch(
    "https://[api-secret].mockapi.io/api/books/books",
    {
      cache: "no-cache",
      next: {
        tags: ["books"]
      }
    }
  );

  const products = await res.json();
  console.log("tk products", products);

  return (
    <main>
      <h1>Book Dashboard</h1>
      <div>
        <Forms />
      </div>
      <div className="w-10/12 my-3 mx-auto overflow-x-auto">
        <Table products={products} />
      </div>
    </main>
  );
}
