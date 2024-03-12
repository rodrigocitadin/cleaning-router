import type { Metadata } from "next";
import { Roboto } from "next/font/google"
import "./globals.css";
import LinkNavigation from "./components/LinkNavigation";
import { ClientsProvider } from "./components/ClientContext";
import { clientsDefault } from "./utils/clients";

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
  'use client'

  return (
    <html lang="pt-br">
      <ClientsProvider clients={clientsDefault}>
        <body className={`${roboto.className} text-white bg-gray-700`}>
          <header>
            <nav className="flex gap-8 justify-center py-4 bg-gray-800">
              <LinkNavigation href="/" text="LIST" />
              <LinkNavigation href="/path" text="PATH" />
            </nav>
          </header>
          {children}
        </body>
      </ClientsProvider>
    </html>
  );
}
