"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function AddBookButton() {
  const router = useRouter();
  return (
    <button className="w-48 bg-blue-500 rounded-md p-2 mb-2" onClick={(e)=>{
        router.replace('/books/new')
    }}>
      + Tambah Buku
    </button>
  );
}
