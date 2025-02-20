export default async function postContact(name, email, message) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });

  if (!response.ok) {
    throw new Error("Error, not OK.");
  }

  // const data = response.data();
  // return data;

  return response.json();
}
