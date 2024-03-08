"use client";
import { useState, useTransition } from "react";
import { addProductToDatabase, addProductToDatabase2 } from "@/app/lib/actions";
import { Button2 } from "@/app/ui/buttons";
import { PanelWrap } from "@/app/ui/panels";
export default function Form2() {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    genre: "",
  });

  const [isPending, startTransition] = useTransition();
  const [name, setName] = useState("");
  const [book, setBook] = useState({
    id: "",
    name: "",
    author: "",
    genre: "",
  });
  const [page, setPage] = useState(1);

  const objectToFormData = (obj) => {
    const formData = new FormData();
    for (const key in obj) {
      formData.append(key, obj[key]);
    }
    return formData;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onClick = () => {
    startTransition(async () => {
      const fd = objectToFormData(formData);
      //   const { id, message, name } = await addProductToDatabase(null, fd);
      const trData = await addProductToDatabase(null, fd);
      //   console.log("tk transition data", id, name, message);
      console.log("tk transition data", trData);
      setName(name);
      setBook(trData);
      setPage(2);
    });
  };

  const onClick2 = () => {
    startTransition(async () => {
      const dummyBook = {
        name: "Book v2",
        author: "test v2",
        genre: "Action",
      };
      const fd = objectToFormData(dummyBook);
      //   const { id, message, name } = await addProductToDatabase(null, fd);
      const trData = await addProductToDatabase2(null, fd);
      //   console.log("tk transition data", id, name, message);
      console.log("tk transition data2", trData);
      setName(name);
      setBook(trData);
      setPage(3);
    });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs">
        {/* Step 1 */}
        <PanelWrap hidden={page !== 1}>
          <form
          // action={formAction}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name:
                <input
                  className="ml-2 shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Bookname"
                  //   value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="amount"
              >
                Author:
                <input
                  className="ml-2 shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="author"
                  name="author"
                  type="text"
                  placeholder="author"
                  //   value={formData.amount}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="country"
              >
                Genre:
                <select
                  className="ml-2 shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="genre"
                  name="genre"
                  //   value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select genre</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Mystery">Mystery</option>
                  <option value="Romance">Romance</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Historical">Historical</option>
                </select>
              </label>
            </div>
            <br />
            <button
              className={
                "flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
              }
              onClick={onClick}
              disabled={isPending}
            >
              Submit 1.0
            </button>
          </form>
        </PanelWrap>
        {/* Step 2 */}
        <PanelWrap hidden={page !== 2}>
          <p>{name}</p>
          <div>
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                Page 2
              </h3>
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Book title
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {book.name}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Book Author
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {book.author}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Genre
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {book.genre}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    ID
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {book.id}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <button
            className={
              "flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
            }
            onClick={onClick2}
            disabled={isPending}
          >
            Submit 2.0
          </button>
        </PanelWrap>
        {/* Step 3 */}
        <PanelWrap hidden={page !== 3}>
          <p>{name}</p>
          <div>
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                Page 3
              </h3>
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Book title
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {book.name}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Book Author
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {book.author}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Genre
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {book.genre}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    ID
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {book.id}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          {/* <button
            className={
              "flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
            }
            onClick={onClick2}
            disabled={isPending}
          >
            Submit 2.0
          </button> */}
        </PanelWrap>
      </div>
    </div>
  );
}
