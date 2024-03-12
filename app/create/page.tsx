'use client';

import { useState } from "react";
import { ClientsProvider } from "../components/ClientContext";

export default function Home() {
  const [newClient, setNewClient] = useState<Client>({
    id: Math.random() * 100,
    name: '',
    phone: '',
    selected: false
  });

  return (
    // {/* <ClientsProvider clients={clientsDefault}> */ }
    <form className="m-auto w-96 gap-8 flex flex-col bg-gray-800 rounded-md p-4 items-start justify-center mt-24" >
      <div className="flex flex-col w-full">
        <label>Name</label>
        <input
          required
          value={newClient?.name}
          onChange={e => setNewClient({ ...newClient, name: e.target.value })}
          placeholder="Type a name..."
          className="w-full bg-transparent border-b-white border-b-2"
          type="text"
        />
      </div>
      <div className="flex flex-col w-full">
        <label>Phone</label>
        <input
          required
          value={newClient?.phone}
          onChange={e => setNewClient({ ...newClient, phone: e.target.value })}
          placeholder="Type a phone number..."
          className="w-full bg-transparent border-b-white border-b-2"
          type="tel"
        />
      </div>
      {/* <button>SAVE</button> */}
    </form >
    // {/* </ClientsProvider> */ }
  )
}
