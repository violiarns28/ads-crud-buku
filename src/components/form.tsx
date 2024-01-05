"use client";

import addBook from "@/action/add-book";
import editBook from "@/action/edit-book";
import { Book } from "@/types/buku";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Form({ data }: { data?: Book }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (data) {
      console.log("Found Data");
      setTitle(data.title);
      setDescription(data.description ?? "");
      setPrice(data.price);
      setAuthor(data.author);
    }
  }, [data]);

  async function handleSubmit() {
    const book: Book = {
      title,
      description,
      price,
      author,
    };

    try {
      if (data) {
        const res = await editBook(data.id!, book);
        if (res) {
          router.refresh();
          router.replace("/");
        }
      } else {
        const res = await addBook(book);
        if (res) {
          router.refresh();
          router.replace("/");
        }
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  }

  return (
    <div className="grid gap-2">
      <input
        type="text"
        placeholder="Judul"
        className="p-2 rounded-md outline outline-1 w-full outline-blue-200"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        placeholder="Deskripsi"
        className="p-2 rounded-md outline outline-1 w-full outline-blue-200"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Harga"
        className="p-2 rounded-md outline outline-1 w-full outline-blue-200"
        value={price}
        onChange={(e) => {
          setPrice(parseInt(e.target.value));
        }}
      />
      <input
        type="text"
        placeholder="Penulis"
        className="p-2 rounded-md outline outline-1 w-full outline-blue-200"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
      <button
        className="bg-blue-500 rounded-md p-2 text-white"
        onClick={handleSubmit}
      >
        {data ? <>Ubah</> : <>Tambah</>}
      </button>
    </div>
  );
}
