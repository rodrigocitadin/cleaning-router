import CreateIcon from "@/app/icons/CreateIcon";
import TrashIcon from "@/app/icons/TrashIcon";
import ClientContainer from "@/app/components/ClientContainer"
import { useClients } from "@/app/components/ClientContext"
import { useState } from "react";
import Link from "next/link";

export default function ClientList() {
  const [searchValue, setSearchValue] = useState('');
  const [clients, setClients] = useClients();

  function deleteSelected() {
    setClients(clients.filter(c => !c.selected));
  }

  return (
    <div className="flex flex-col bg-gray-800 rounded-md p-4">
      <div className="flex gap-8">
        <input
          type="text"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          placeholder="Search a name..."         
          className="h-8 w-64 my-auto bg-transparent border-b-2"
        />
        <Link className="self-center" href="/create"><CreateIcon /></Link>
        <button onClick={deleteSelected}><TrashIcon /></button>
      </div>
      <div className="flex flex-col mt-8 gap-2 align-middle">
        {
          clients
            .filter(c => c.name.toLowerCase().startsWith(searchValue.trim().toLowerCase()))
            .map(client => (
              <ClientContainer
                key={client.id}
                client={client}
              />
            ))
        }
      </div>
    </div>
  )
}
