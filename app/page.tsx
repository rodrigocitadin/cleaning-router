import CreateIcon from "./icons/CreateIcon";
import SearchIcon from "./icons/SearchIcon";
import TrashIcon from "./icons/TrashIcon";

export default function Home() {
  return (
    <main>
      <div className="flex gap-28 align-top justify-center mt-24">
        <div className="bg-gray-800 flex gap-8 p-4 rounded-md">
          <input className="h-8 my-auto bg-transparent border-b-2" />
          <button><SearchIcon /></button>
          <button><CreateIcon /></button>
          <button><TrashIcon /></button>
        </div>
        <div className="bg-gray-800 p-4 rounded-md">
          <h2 className="text-xl">SELECIONADOS</h2>
        </div>
      </div>
    </main>
  );
}
