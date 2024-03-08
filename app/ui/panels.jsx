import useSWR from "swr";
// import { addProductToDatabase } from "@/app/actions/serverActions";
import { addProductToDatabase } from "@/app/lib/actions";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const fetcher2 = addProductToDatabase;

export function BookPanel() {
  const url = "https://65e9183a4bb72f0a9c50bbc9.mockapi.io/api/books/books/2";
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // render data
  return <div>useSWS: {data.name}!</div>;
}
