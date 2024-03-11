import MinusIcon from "@/app/icons/MinusIcon";
import PlusIcon from "@/app/icons/PlusIcon";
import { useClients } from "@/app/components/ClientContext";

export default function ClientContainer({ client }: {
  client: Client,
}) {
  const [clients, setClients] = useClients();

  function handleClick() {
    const updatedClient: Client = {
      ...client,
      selected: !client.selected
    }
    const updatedClients = clients.map(c => c.id === client.id ? updatedClient : c);

    setClients(updatedClients);
  }

  return (
    <div className="flex">
      <div className="flex w-full justify-between mr-4">
        <span className="text-lg">{client.name}</span>
        <span className="text-lg">{client.phone}</span>
      </div>
      <button
        className="self-center"
        onClick={handleClick}
      >
        {
          client.selected
            ? <MinusIcon />
            : <PlusIcon />
        }
      </button>
    </div>
  )
}
