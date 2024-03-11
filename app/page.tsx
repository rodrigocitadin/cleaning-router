"use client";

import ListInputs from "@/app/components/ListInputs";
import ClientList from "@/app/components/ClientList";
// import { clientsDefault } from "@/app/utils/clients";
import SelectedList from "@/app/components/SelectedList";
import { ClientsProvider } from "./components/ClientContext";

export default function Home() {

  return (
    <main>
      <ClientsProvider>
        <div className="flex gap-16 items-start justify-center mt-24">
          <div className="flex flex-col bg-gray-800 rounded-md p-4">
            <ListInputs />
            <ClientList
              // clients={clientsDefault}
            />
          </div>
          <SelectedList
            // clients={clientsDefault}
          />
        </div>
      </ClientsProvider>
    </main >
  );
}
