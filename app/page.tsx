import ListInputs from "@/app/components/ListInputs";
import ClientList from "@/app/components/ClientList";
import { clients } from "@/app/utils/clients";
import SelectedList from "@/app/components/SelectedList";

export default function Home() {
  return (
    <main>
      <div className="flex gap-16 align-top justify-center mt-24">
        <div className="flex flex-col bg-gray-800 rounded-md p-4">
          <ListInputs />
          <ClientList />
        </div>
        <div className="flex flex-col gap-2 bg-gray-800 p-4 rounded-md min-w-64">
          <h2 className="text-xl text-center mb-4">SELECIONADOS</h2>
          {
            clients.map(client => {
              if (client.selected) return <SelectedList key={client.id} client={client} />

              // return client.selected
              //   ? <SelectedList key={client.id} client={client} />
              //   : <></>
            })
          }
        </div>
      </div>
    </main >
  );
}
