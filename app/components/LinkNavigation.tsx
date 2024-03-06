import Link from "next/link";

export default function LinkNavigation({ text, href }: { text: string, href: string }) {
  return (
    <Link
      href={href}
      className="text-3xl leading-7 border-b-[3px] border-t-[3px] border-transparent hover:border-b-white"
    >
      {text}
    </Link>
  )
}
