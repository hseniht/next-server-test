"use server";
import { revalidateTag } from "next/cache";
import { addBookData, addBookData2 } from "./bookAPI";
import { encryptData, decryptData } from "../lib/utility";

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

export const getKey = async (data) => {
  const key = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;
  return encryptData(data, key);
};

export async function addCryptedBook(newBook) {
  // return;
  const key = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;
  const API_SECRET = process.env.API_SECRET;
  const decryptedData = decryptData(newBook, key);
  try {
    const response = await fetch(
      `https://${API_SECRET}.mockapi.io/api/books/books2`,
      {
        method: "POST",
        body: JSON.stringify(decryptedData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to add book data");
    }

    const addedBook = await response.json();
    // revalidateTag("books");
    return encryptData(addedBook, key);
  } catch (error) {
    console.error("Error fetching book data:", error);
    return null; // or handle the error appropriately
  }
}
