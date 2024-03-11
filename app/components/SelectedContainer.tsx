import MinusIcon from "@/app/icons/MinusIcon";
import { useClients } from "@/app/components/ClientContext";

export default function SelectedContainer({ client }: {
  client: Client,
}) {
  const [clients, setClients] = useClients();

  function handleClick() {
    const updatedClient: Client = {
      ...client,
      selected: false
    }
    const updatedClients = clients.map(c => c.id === client.id ? updatedClient : c);

    setClients(updatedClients);
  }

  return (
    <div className="flex justify-between">
      <span className="text-lg">{client.name}</span>
      <button
        className="self-center"
        onClick={handleClick}
      >
        <MinusIcon />
      </button>
    </div>
  )
}
