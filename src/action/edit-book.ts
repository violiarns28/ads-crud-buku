import { Book } from "@/types/buku";
export default async function editBook(id: number, data: Book) {
  try {
    const res = await fetch(
      `https://testcasefe2023.ignorelist.com/api/v1/data/${id}`,
      {
        method: "PUT",
        headers: {
          nim: "1234",
        },
        body: JSON.stringify(data),
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
