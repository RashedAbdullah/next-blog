export async function GET(req, { params }) {
  const users = [
    { id: "5", name: "Rashed Abdullah" },
    { id: "6", name: "Labib irfan" },
    { id: "7", name: "Ismat Maymuna" },
  ];

  const user = users.find((usr) => usr.id === params.slub);

  if (!user)
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
    });
  return new Response(JSON.stringify(user), { status: 200 });
}
