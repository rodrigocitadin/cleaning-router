import MinusIcon from "@/app/icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";

export default function ClientContainer({ client }: { client: Client }) {
  return (
    <div className="flex">
      <div className="flex w-full justify-between mr-4">
        <span className="text-lg">{client.name}</span>
        <span className="text-lg">{client.phone}</span>
      </div>
      <button className="self-center">
        {
          client.selected
            ? <MinusIcon />
            : <PlusIcon />
        }
      </button>
    </div>
  )
}
