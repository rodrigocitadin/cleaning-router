import MinusIcon from "@/app/icons/MinusIcon";

export default function SelectedContainer({ client }: { client: Client }) {
  return (
    <div className="flex justify-between">
      <span className="text-lg">{client.name}</span>
      <button className="self-center"><MinusIcon /></button>
    </div>
  )
}
