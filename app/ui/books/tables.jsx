import { DeleteBook } from "@/app/ui/books/buttons"
const ProductTable = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-800">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-600 px-4 py-2">Name</th>
            <th className="border border-gray-600 px-4 py-2">Author</th>
            <th className="border border-gray-600 px-4 py-2">Genre</th>
            <th className="border border-gray-600 px-4 py-2">ID</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border border-gray-600 px-4 py-2">
                {product.name}
              </td>
              <td className="border border-gray-600 px-4 py-2">
                {product.author}
              </td>
              <td className="border border-gray-600 px-4 py-2">
                {product.genre}
              </td>
              <td className="border border-gray-600 px-4 py-2">{product.id}</td>
              <td className="border border-gray-600 px-4 py-2">
                <DeleteBook id={product.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
