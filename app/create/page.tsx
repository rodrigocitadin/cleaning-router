'use client';

import { SyntheticEvent, useState } from "react";
import { useClients } from "@/app/components/ClientContext";

export default function Home() {
  const [clients, setClients] = useClients();
  const [clientCount, setClientCount] = useState(clients.length + 1);
  const [newClient, setNewClient] = useState<Client>({
    id: clientCount,
    name: '',
    phone: '',
    selected: false
  });

  function saveNewClient(e: SyntheticEvent) {
    setClients([...clients, newClient]);
    setClientCount(clientCount + 1);
    setNewClient({
      id: clientCount + 1,
      name: '',
      phone: '',
      selected: false
    })

    console.log(clientCount);
    console.log(newClient);

    e.preventDefault();
  }

  return (
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
      <button
        className="w-full bg-gray-500 rounded-md p-4 text-white"
        onClick={saveNewClient}
      >
        SAVE
      </button>
    </form >
  )

}
