import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient({})

export default async function Home() {
  const users = await prisma.user.findMany()
  
  return (
    <div>
      <h1 className="text-5xl font-bold text-emerald-300 p-5">Users</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}
