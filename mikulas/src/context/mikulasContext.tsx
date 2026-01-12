/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState, type PropsWithKid } from "react";
import type { Kid, Gift } from "../interfaces";

const defaultContextValue = {
  gyerekek: [] as Kid[],
  ajandekok: [] as Gift[],

  fetchGyerekek() {},
  fetchAjandekok() {},

  createAjandek() {},
  deleteAjandek() {},

  setAjandekGyereknek() {},
  deleteAjandekGyerektol() {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const MikulasContext = createContext(defaultContextValue);

const BASE_URL = "http://localhost:3000";

export function MikulasProvider(props: PropsWithKid) {
  const [gyerekek, setGyerekek] = useState<Kid[]>([]);
  const [ajandekok, setAjandekok] = useState<Gift[]>([]);

  async function fetchGyerekek() {
    const response = await fetch(`${BASE_URL}/children`);
    const data = await response.json();
    setGyerekek(data);
  }

  async function fetchAjandekok() {
    const response = await fetch(`${BASE_URL}/toys`);
    const data = await response.json();
    setAjandekok(data);
  }

  async function createAjandek(name: string) {
    await fetch(`${BASE_URL}/toys`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    fetchAjandekok();
  }

  async function deleteAjandek(id: number) {
    await fetch(`${BASE_URL}/toys/${id}`, {
      method: "DELETE",
    });
    fetchAjandekok();
  }

  async function setAjandekGyereknek(KidId: number, giftId: number) {
    await fetch(`${BASE_URL}/children/${KidId}/toys/${giftId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ giftId }),
    });
    fetchGyerekek();
  }

  async function deleteAjandekGyerektol(KidId: number, giftId: number) {
    await fetch(`${BASE_URL}/children/${KidId}/toys/${giftId}`, {
      method: "DELETE",
      body: JSON.stringify({ giftId }),
    });
    fetchGyerekek();
  }

  useEffect(() => {
  const loadData = async () => {
    await fetchGyerekek();
    await fetchAjandekok();
  };

  loadData();
}, []);


  const contextValue = {
    gyerekek,
    ajandekok,
    fetchGyerekek,
    fetchAjandekok,
    createAjandek,
    deleteAjandek,
    setAjandekGyereknek,
    deleteAjandekGyerektol,
  };

  return (
    <MikulasContext.Provider value={contextValue}>
      {props.children}
    </MikulasContext.Provider>
  );
}
