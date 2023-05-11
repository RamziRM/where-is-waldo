// http://localhost:3000/api/users -- path

export async function GET(request) {
  // handle GET request for /api/users
  // retrieve all users from database or other source
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ];

  // send the users as a response
  return new Response(JSON.stringify(users));
}
