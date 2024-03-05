import ListInputs from "@/app/components/ListInputs";
import PlusIcon from "@/app/icons/PlusIcon";
import MinusIcon from "@/app/icons/MinusIcon";

export default function Home() {
  return (
    <main>
      <div className="flex gap-28 align-top justify-center mt-24">
        <div className="flex flex-col bg-gray-800 rounded-md p-4">
          <ListInputs />
          <div className="flex flex-col mt-8 gap-2 align-middle">
            <div className="flex justify-between">
              <span className="text-lg">Dominic Toretto</span>
              <button className="self-center"><MinusIcon /></button>
            </div>
            <div className="flex justify-between">
              <span className="text-lg">George John</span>
              <button className="self-center"><PlusIcon /></button>
            </div>
            <div className="flex justify-between">
              <span className="text-lg">John Wick</span>
              <button className="self-center"><PlusIcon /></button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-gray-800 p-4 rounded-md">
          <h2 className="text-xl">SELECIONADOS</h2>
          <div className="flex justify-between">
            <span className="text-lg">Dominic Toretto</span>
            <button className="self-center"><MinusIcon /></button>
          </div>
        </div>
      </div>
    </main>
  );
}
