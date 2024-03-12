import SelectedContainer from "@/app/components/SelectedContainer";
import { useClients } from "@/app/components/ClientContext";

export default function SelectedList() {
  const [clients] = useClients();

  return (
    <div className="flex flex-col gap-2 bg-gray-800 p-4 rounded-md min-w-64">
      <h2 className="text-xl text-center mb-4">SELECIONADOS</h2>
      {
        clients.some(c => c.selected)
          ? clients.map(client => client.selected
            ? <SelectedContainer key={client.id} client={client} />
            : null
          )
          : <span className="text-center italic">No customers selected</span>
      }
    </div>
  )
}
