'use client'

import { useState, createContext, useContext, ReactNode } from "react"
import { clientsDefault } from "@/app/utils/clients";

const useClientsState = () => useState<Client[]>(clientsDefault)

export const ClientsContext = createContext<ReturnType<typeof useClientsState> | null>(null);

export const useClients = () => {
  const clients = useContext(ClientsContext);

  if (!clients) throw new Error("useClients must be used within a ClientsProvider");

  return clients;
}

export const ClientsProvider = ({ children }: { children: ReactNode }) => {
  const [clients, setClients] = useClientsState();

  return (
    <ClientsContext.Provider value={[clients, setClients]}>
      {children}
    </ClientsContext.Provider>
  )
}
