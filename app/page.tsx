"use client";

import ClientList from "@/app/components/ClientList";
import SelectedList from "@/app/components/SelectedList";

export default function Home() {
  return (
    <main className="flex gap-16 items-start justify-center mt-24">
      <ClientList />
      <SelectedList />
    </main >
  );
}
