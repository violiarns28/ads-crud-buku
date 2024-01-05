import ActionTable from "@/components/action-table";
import AddBookButton from "@/components/add-book-button";
import { Book } from "@/types/buku";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://testcasefe2023.ignorelist.com/api/v1/data", {
    method: "GET",
    cache:"no-cache",
    headers: {
      nim: "1234",
    },
  });
  const json = await res.json();
  const books: Book[] = json.data;
  console.log(books);

  return (
    <div className="flex justify-center h-screen">
      <div>
        <div className="flex flex-col my-8">
          <h1 className="text-3xl mb-2 font-bold">Daftar Buku</h1>
          <p className="my-2">Jumlah buku tersedia: {books.length}</p>
       <AddBookButton/>
        </div>
        <div className=" mx-auto">
          <h1>
            Data Buku
          </h1>
          <table className="border-collapse border border-gray-500">
            <thead>
              <tr>
                <th className="border border-gray-500 p-2">Judul</th>
                <th className="border border-gray-500 p-2">Deskripsi</th>
                <th className="border border-gray-500 p-2">Harga</th>
                <th className="border border-gray-500 p-2">Penulis</th>
                <th className="border border-gray-500 p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {books.map((item) => (
                <tr key={item.id}>
                  <td className="border border-gray-500 p-2">{item.title}</td>
                  <td className="border border-gray-500 p-2">{item.description}</td>
                  <td className="border border-gray-500 p-2">{item.price}</td>
                  <td className="border border-gray-500 p-2">{item.author}</td>
                  <td className="border border-gray-500 p-2">
                    <ActionTable id={item.id ?? 0}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
