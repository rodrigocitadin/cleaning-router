'use client'

import { useState, createContext, useContext, ReactNode } from "react"

const useClientsState = (initialClients: Client[]) => useState<Client[]>(initialClients)

export const ClientsContext = createContext<ReturnType<typeof useClientsState> | null>(null);

export const useClients = () => {
  const clients = useContext(ClientsContext);

  if (!clients) throw new Error("useClients must be used within a ClientsProvider");

  return clients;
}

export const ClientsProvider = ({ clients: initialClients, children }: {
  clients: Client[],
  children: ReactNode
}) => {
  const [clients, setClients] = useClientsState(initialClients);

  return (
    <ClientsContext.Provider value={[clients, setClients]}>
      {children}
    </ClientsContext.Provider>
  )
}
