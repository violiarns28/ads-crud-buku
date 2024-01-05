import { Book } from "@/types/buku";
export default async function editBook(id: number, data: Book) {
  try {
    const formData= new FormData();
    formData.append('title',data.title);
    formData.append('description',data.description ??'');
    formData.append('price',data.price.toString())
    formData.append('author', data.author);
    const res = await fetch(
      `https://testcasefe2023.ignorelist.com/api/v1/data/${id}`,
      {
        method: "PUT",
        headers: {
          nim: "1234",
        },
        body: formData,
      }
    );
    const json = await res.json();
    if (json.message === "Success") {
      alert("Success edit book");
      return true;
    } else {
      alert("Failed to edit book");
      return false;
    }
  } catch (error) {
    alert("Something went wrong");
    return false;
  }
}
