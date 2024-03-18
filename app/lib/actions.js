"use server";
import { revalidateTag } from "next/cache";
import { addBookData, addBookData2, addCryptedBook } from "./bookAPI";

// export const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

export const someAction = async (fd) => {
  console.log("some action");
  const responseData = await addBookData2(fd);

  revalidateTag("books");

  return responseData;
};

export const addProductToDatabase = async (prevState, fd) => {
  const name = fd.get("name")?.toString();
  const author = fd.get("author")?.toString();
  const genre = fd.get("genre")?.toString();

  if (!name || !author || !genre) return;

  const newProduct = {
    name,
    author,
    genre,
  };

  console.log("tk products", newProduct);

  const responseData = await addBookData(newProduct);

  // test another action call here
  // const test = await someAction(responseData);

  revalidateTag("books");

  // return responseData;
  return {
    // message: "Response msg ..",
    name: responseData.name + " crypted",
    author: responseData.author + " crypted",
    genre: responseData.genre,
    id: responseData.id,
  };
};

export const addProductToDatabase2 = async (prevState, fd) => {
  const name = fd.get("name")?.toString();
  const author = fd.get("author")?.toString();
  const genre = fd.get("genre")?.toString();

  if (!name || !author || !genre) return;

  const newProduct = {
    name,
    author,
    genre,
  };

  const responseData = await addBookData2(newProduct);

  revalidateTag("books");

  return responseData;
};

export const addToBook2db = async (book) => {
  const responseData = await addCryptedBook(book);
  return responseData;
};