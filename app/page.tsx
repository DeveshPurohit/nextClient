import { cache } from "react";

async function GetHome() {
  const result = await fetch('http://localhost:8080/api/home', {cache: "no-store"});
  const res = await result.json();
  console.log(res)
  return res;
}

export default async function Home() {
  const {message} = await GetHome();
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      Lets Rock!
      <p>{message}</p>
    </main>
  );
}
