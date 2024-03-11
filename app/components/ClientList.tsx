import ClientContainer from "@/app/components/ClientContainer"
import { useClients } from "@/app/components/ClientContext"

export default function ClientList() {
  const [clients] = useClients();

  return (
    <div className="flex flex-col mt-8 gap-2 align-middle">
      {
        clients.map(client => (
          <ClientContainer
            key={client.id}
            client={client}
          />
        ))
      }
    </div>
  )
}
