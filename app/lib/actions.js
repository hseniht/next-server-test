"use server";
import { revalidateTag } from "next/cache";
import { addBookData } from "./bookAPI";

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

  revalidateTag("books");

  return {
    message: "Response msg ..",
    name: name + "edited",
    id: responseData.id,
  };
};
