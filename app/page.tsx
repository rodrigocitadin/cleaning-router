import ListInputs from "@/app/components/ListInputs";
import PlusIcon from "./icons/PlusIcon";

export default function Home() {
  return (
    <main>
      <div className="flex gap-28 align-top justify-center mt-24">
        <div className="flex flex-col bg-gray-800 rounded-md p-4">
          <ListInputs />
          <div className="flex flex-col mt-8 gap-2">
            <div className="flex justify-between align-middle">
              <span className="text-lg">George Josh</span>
              <button><PlusIcon/></button>
            </div>
            <div className="flex justify-between align-middle">
              <span className="text-lg">John Wick</span>
              <button><PlusIcon/></button>
            </div>
            <div className="flex justify-between align-middle">
              <span className="text-lg">Dominic Toretto</span>
              <button><PlusIcon/></button>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gray-800 p-4 rounded-md">
          <h2 className="text-xl">SELECIONADOS</h2>
        </div>
      </div>
    </main>
  );
}
