"use client";

import ListInputs from "@/app/components/ListInputs";
import ClientList from "@/app/components/ClientList";
import SelectedList from "@/app/components/SelectedList";
import { ClientsProvider } from "@/app/components/ClientContext";
import { clientsDefault } from "@/app/utils/clients";

export default function Home() {
  return (
    <main>
      <ClientsProvider clients={clientsDefault}>
        <div className="flex gap-16 items-start justify-center mt-24">
          <div className="flex flex-col bg-gray-800 rounded-md p-4">
            <ListInputs />
            <ClientList />
          </div>
          <SelectedList />
        </div>
      </ClientsProvider>
    </main >
  );
}
