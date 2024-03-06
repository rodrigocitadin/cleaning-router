import ClientContainer from "./ClientContainer"

export default function ClientList() {
  const clients: Client[] = [
    {
      id: 1,
      name: "Dominic Toretto",
      phone: "49999119911",
      selected: true
    },
    {
      id: 2,
      name: "George Jogn",
      phone: "49999119911",
      selected: true
    },
    {
      id: 3,
      name: "Keanu Reeves",
      phone: "49999119911",
      selected: false
    }
  ]

  return (
    <div className="flex flex-col mt-8 gap-2 align-middle">
      {
        clients.map(client => <ClientContainer key={client.id} client={client} />)
      }
    </div>
  )
}
