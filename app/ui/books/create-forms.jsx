/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Form() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
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
              //   onChange={handleChange}
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
              //   onChange={handleChange}
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
            //   onChange={handleChange}
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
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
