import SearchIcon from "@/app/icons/SearchIcon";
import CreateIcon from "@/app/icons/CreateIcon";
import TrashIcon from "@/app/icons/TrashIcon";

export default function ListInputs() {
  return (
    <div className="flex gap-8">
      <input className="h-8 my-auto bg-transparent border-b-2" />
      <button><SearchIcon /></button>
      <button><CreateIcon /></button>
      <button><TrashIcon /></button>
    </div>
  )
}
