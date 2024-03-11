import MinusIcon from "@/app/icons/MinusIcon";
import PlusIcon from "@/app/icons/PlusIcon";

export default function ClientContainer({ client, key }: {
  client: Client,
  key: number,
}) {
  return (
    <div className="flex">
      <div className="flex w-full justify-between mr-4">
        <span className="text-lg">{client.name}</span>
        <span className="text-lg">{client.phone}</span>
      </div>
      <button
        className="self-center"
      // onClick={handleClick}
      >
        {
          client.selected
            ? <MinusIcon />
            : <PlusIcon />
        }
      </button>
    </div>
  )
}
