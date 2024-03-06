import ListInputs from "@/app/components/ListInputs";
import MinusIcon from "@/app/icons/MinusIcon";
import ClientList from "./components/ClientList";

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
          <div className="flex justify-between">
            <span className="text-lg">Dominic Toretto</span>
            <button className="self-center"><MinusIcon /></button>
          </div>
          <div className="flex justify-between">
            <span className="text-lg">George John</span>
            <button className="self-center"><MinusIcon /></button>
          </div>
        </div>
      </div>
    </main >
  );
}
