import SelectedContainer from "@/app/components/SelectedContainer";

export default function SelectedList({ clients }: {
  clients: Client[],
}) {
  return (
    <div className="flex flex-col gap-2 bg-gray-800 p-4 rounded-md min-w-64">
      <h2 className="text-xl text-center mb-4">SELECIONADOS</h2>
      {
        clients.map(client => {
          return client.selected
            ? <SelectedContainer key={client.id} client={client} />
            : null
        })
      }
    </div>
  )
}
