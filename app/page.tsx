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
          <ClientList clients={clients}/>
        </div>
        <SelectedList clients={clients}/>
      </div>
    </main >
  );
}
