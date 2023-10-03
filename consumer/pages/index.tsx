import { useGetBooksQuery } from "../../@store/features/booksApi";

export default function Home() {
  const { data: newBooks, isLoading: isNewBooksLoading } = useGetBooksQuery({});
  console.log("new books", newBooks, isNewBooksLoading);
  return <h1>Hello Consumer page</h1>;
}
