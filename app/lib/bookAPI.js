"use server";
import { revalidateTag } from "next/cache";
const API_SECRET = "YourApiKey";

export async function fetchBookData() {
  try {
    const response = await fetch(
      `https://${API_SECRET}.mockapi.io/api/books/books`,
      {
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          tags: ["books"],
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch book data");
    }

    const books = await response.json();
    return books;
  } catch (error) {
    console.error("Error fetching book data:", error);
    return null; // or handle the error appropriately
  }
}

export async function addBookData(newBook) {
  try {
    const response = await fetch(
      `https://${API_SECRET}.mockapi.io/api/books/books`,
      {
        method: "POST",
        body: JSON.stringify(newBook),
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
    return addedBook;
  } catch (error) {
    console.error("Error fetching book data:", error);
    return null; // or handle the error appropriately
  }
}

export async function addBookData2(newBook) {
  try {
    const response = await fetch(
      `https://${API_SECRET}.mockapi.io/api/books/books2`,
      {
        method: "POST",
        body: JSON.stringify(newBook),
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
    return addedBook;
  } catch (error) {
    console.error("Error fetching book data:", error);
    return null; // or handle the error appropriately
  }
}

export async function deleteBook(id) {
  try {
    const response = await fetch(
      `https://${API_SECRET}.mockapi.io/api/books/books/${id}`,
      {
        method: "DELETE",
        cache: "no-cache",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete book");
    }
    revalidateTag("books");
    return true; // Successfully deleted
  } catch (error) {
    console.error("Error deleting book:", error);
    return false; // Failed to delete
  }
}
