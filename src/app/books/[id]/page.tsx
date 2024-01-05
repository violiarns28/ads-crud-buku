import Form from "@/components/form";
import { Book } from "@/types/buku";

export default async function Page({ params }: { params: { id: number } }) {
  const res = await fetch(
    `https://testcasefe2023.ignorelist.com/api/v1/data/${params.id}`,
    {
      method: "GET",
      headers: {
        nim: "1234",
      },
    }
  );
  const json = await res.json();
  const book:Book=json.data;
  console.log(book);
  if (res.status === 404) {
    return (
      <div className=" flex h-screen flex-col m-16">
        <div className="flex flex-col my-8">
          <h1 className="text-3xl mb-2 font-bold">
          Form Tambah Buku
          </h1>
        </div>  <Form /> 
      </div>
    );
  } else {   return (
    <div className=" flex h-screen flex-col m-16">
      <div className="flex flex-col my-8">
        <h1 className="text-3xl mb-2 font-bold">
        Form Ubah Buku
        </h1>
      </div>  <Form data={book}/> 
    </div>
  );
  }
}
