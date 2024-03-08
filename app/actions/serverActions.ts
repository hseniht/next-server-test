"use server";
import { revalidateTag } from "next/cache";

export const addProductToDatabase = async (prevState: any, fd: FormData) => {
  const name = fd.get("name")?.toString();
  const author = fd.get("author")?.toString();
  const genre = fd.get("genre")?.toString();

  if (!name || !author || !genre) return;

  const newProduct = {
    name,
    author,
    genre,
  };

  console.log("tk products", newProduct );
  

  const response = await fetch("https://[api-secret].mockapi.io/api/books/books", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });


  const responseData = await response.json();


  revalidateTag("books");

  return {
    message: "Response msg ..",
    name: name + "edited",
    id: responseData.id
  }
};
