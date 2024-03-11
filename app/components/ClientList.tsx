import SearchIcon from "@/app/icons/SearchIcon";
import CreateIcon from "@/app/icons/CreateIcon";
import TrashIcon from "@/app/icons/TrashIcon";
import ClientContainer from "@/app/components/ClientContainer"
import { useClients } from "@/app/components/ClientContext"
import { useState } from "react";

export default function ClientList() {
  const [searchValue, setSearchValue] = useState('');
  const [clients] = useClients();

  return (
    <div className="flex flex-col bg-gray-800 rounded-md p-4">
      <div className="flex gap-8">
        <input
          type="text"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          placeholder="Search a name or number"
          className="h-8 my-auto bg-transparent border-b-2"
        />
        <button><SearchIcon /></button>
        <button><CreateIcon /></button>
        <button><TrashIcon /></button>
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
