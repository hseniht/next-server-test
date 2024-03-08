// import { addProductToDatabase } from "@/app/actions/serverActions";
import { addProductToDatabase } from "@/app/lib/actions";
import { useState, useTransition } from "react";

export function Button2({ formData }) {
  const [isPending, startTransition] = useTransition();
  const [name, setName] = useState("");

  const objectToFormData = (obj) => {
    const formData = new FormData();
    for (const key in obj) {
      formData.append(key, obj[key]);
    }
    return formData;
  };

  const onClick = () => {
    startTransition(async () => {
      const fd = objectToFormData(formData);
      const { id, message, name } = await addProductToDatabase(null, fd);
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
        onClick={onClick}
        disabled={isPending}
      >
        Submit 2
      </button>
    </>
  );
}
