"use client";
import { Button2 } from "@/app/ui/buttons";

// import { addProductToDatabase } from "@/app/actions/serverActions";
import { addProductToDatabase } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { useState } from "react";

const initialState = {
  message: "",
};

export default function Form() {
  const [state, formAction] = useFormState(addProductToDatabase, initialState);
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    genre: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log("tk state", state);

  return (
    <div className="flex justify-center items-center">
      <p>{state.message}</p>
      <br />
      <p>{state?.id}</p>
      <form
        // action={addProductToDatabase}
        action={formAction}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs"
        // onSubmit={handleSubmit}
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
        <div className="items-center justify-between">
          <p>{state?.name}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
          {/* <Button type="submit">Add</Button> */}
        </div>
        <br />
        <Button2 formData={formData} />
      </form>
    </div>
  );
}
