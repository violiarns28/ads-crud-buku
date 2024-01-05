export async function deleteBook(id: number) {
  try {
    const res = await fetch(
      `https://testcasefe2023.ignorelist.com/api/v1/data/${id}`,
      {
        method: "DELETE",
        headers: {
          nim: "1234",
        },
      }
    );
    const json = await res.json();
    if (json.message === "Success") {
      alert("Success delete book");
      return true;
    } else {
      alert("Failed to delete book");
      return false;
    }
  } catch (error) {
    alert("Something went wrong");
    return false; 
  }
}
