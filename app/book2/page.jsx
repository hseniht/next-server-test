"use client";
import React, { useState } from "react";
import { addCryptedBook } from "@/app/lib/actions";
import { encryptData } from "../lib/utility";

const initFormData = {
  name: "",
  author: "",
  genre: "",
};

const initBook = {
  id: "",
  name: "",
  author: "",
  genre: "",
};

const MyForm = () => {
  const [formData, setFormData] = useState(initFormData);
  const [book, setBook] = useState(initBook);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const key = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;
    const ed = encryptData(formData, key);
    const newBook = await addCryptedBook(ed);

    setBook(newBook);
  };

  return (
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
        onClick={onSubmit}
        // disabled={isPending}
      >
        Submit Book2
      </button>
    </form>
  );
};

export default MyForm;
