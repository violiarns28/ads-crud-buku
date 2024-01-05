import { Book } from "@/types/buku";
import { fork } from "child_process";
export default async function addBook(data: Book) {
  try {
    const formData= new FormData();
    formData.append('title',data.title);
    formData.append('description',data.description ??'');
    formData.append('price',data.price.toString())
    formData.append('author', data.author);
    const res = await fetch(
      `https://testcasefe2023.ignorelist.com/api/v1/data`,
      {
        method: "POST",
        headers: {
          nim: "1234",
        },
        body:formData
      }
    );
    const json = await res.json();
    console.log(json);
    if (json.message === "Success") {
      alert("Success add book");
      return true;
    } else {
      alert("Failed to add book");
      return false;
    }
  } catch (error) {
    alert("Something went wrong");
    return false;
  }
}
