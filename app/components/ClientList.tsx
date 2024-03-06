import { clients } from "@/app/utils/clients"
import ClientContainer from "@/app/components/ClientContainer"

export default function ClientList() {
  return (
    <div className="flex flex-col mt-8 gap-2 align-middle">
      {
        clients.map(client => <ClientContainer key={client.id} client={client} />)
      }
    </div>
  )
}
