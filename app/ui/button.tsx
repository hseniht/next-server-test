interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

import { addProductToDatabase } from "@/app/actions/serverActions";
import { useState, useTransition } from "react";

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={
        "flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
      }
    >
      {children}
    </button>
  );
}

export function Button2({ formData }) {
  const [isPending, startTransition] = useTransition();
  const [name, setName] = useState("");

  // const formData = new FormData();
  // formData.append("name", "Test Book Name");
  // formData.append("author", "John");
  // formData.append("genre", "Fantasy");

  const onClick = () => {
    startTransition(async () => {
      const { id, message, name } = await addProductToDatabase(null, formData);
      console.log("tk transition data", id, name, message);

      setName(name);
    });
  };

  return (
    <>
      <p>{name}</p>
      <button
        className={
          "flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
        }
        // onClick={() => startTransition(() => addProductToDatabase2(formData))}
        onClick={onClick}
        disabled={isPending}
      >
        Submit 2
      </button>
    </>
  );
}
