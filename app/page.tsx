"use client";
import * as Y from "yjs";
import PlaygroundPage from "../components/playground";
import NavBar from "../components/navbar";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <PlaygroundPage />
    </main>
  );
}
