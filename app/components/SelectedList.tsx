import SelectedContainer from "@/app/components/SelectedContainer";
import { useClients } from "@/app/components/ClientContext";

export default function SelectedList() {
  const [clients] = useClients();

  return (
    <div className="flex flex-col bg-gray-800 p-4 rounded-md min-w-64">
      <h2 className="text-2xl text-center">SELECTED</h2>
      <div className="mt-8">
        {
          clients.some(c => c.selected)
            ? clients.map(client => client.selected
              ? <SelectedContainer key={client.id} client={client} />
              : null
            )
            : <span className="block m-[-1.5rem] text-center italic">No customers selected</span>
        }
      </div>
    </div>
  )
}
