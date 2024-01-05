"use client";
import { deleteBook } from "@/action/delete-book";
import { useRouter } from "next/navigation";

export default function ActionTable(props: { id: number }) {
    const router = useRouter();
  return (
    <>
      <div className="flex flex-col gap-2">
        <button className="bg-green-500 rounded-md p-2 mx-1"
        onClick={(e)=>{
            router.replace(`/books/${props.id}`)
        }}
        >Ubah</button>
        <button
          className="bg-red-500 rounded-md p-2 mx-1"
          onClick={async (e) => {
            await deleteBook(props.id);
            router.refresh();
            router.replace('/')
          }}
        >
          Hapus
        </button>
      </div>
    </>
  );
}
