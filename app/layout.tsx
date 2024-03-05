import type { Metadata } from "next";
import { Roboto } from "next/font/google"
import "./globals.css";
import Link from "next/link";

const roboto = Roboto({ weight: ['400', '700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Facilita Juridico teste",
  description: "Aprova nos ai!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} text-white`}>
        <header className="flex gap-8 justify-center py-2 bg-gray-600">
          <Link href="/" className="text-3xl">LISTA</Link>
          <Link href="/route" className="text-3xl">ROTA</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
