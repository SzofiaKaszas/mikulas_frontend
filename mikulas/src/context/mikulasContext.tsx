/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import type { Kid, Gift, MikulasContextType } from "../interfaces";

const defaultContextValue: MikulasContextType = {
  gyerekek: [] as Kid[],
  ajandekok: [] as Gift[],

  fetchGyerekek: async () => [] as Kid[],
  fetchAjandekok: async () => [] as Gift[],
  getToysOfChild: async (id: number) => [] as Gift[],

  createAjandek: async (toy: Omit<Gift, "id">) => ({
    id: 0,
    name: "",
    anyag: "other",
    suly: 0,
  }),
  deleteAjandek: async (id: number) => {},

  setAjandekGyereknek: async (KidId: number, giftId: number) => {},
  deleteAjandekGyerektol: async (KidId: number, giftId: number) => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const MikulasContext = createContext(defaultContextValue);

const BASE_URL = "http://localhost:3000";

export function MikulasProvider(props: PropsWithChildren) {
  const [gyerekek, setGyerekek] = useState<Kid[]>([]);
  const [ajandekok, setAjandekok] = useState<Gift[]>([]);

  async function fetchGyerekek() {
    const response = await fetch(`${BASE_URL}/children`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Create gift failed:", errorText);
      throw new Error(errorText);
    }

    const data = await response.json();
    setGyerekek(data);
    return data;
  }

  async function fetchAjandekok() {
    const response = await fetch(`${BASE_URL}/toys`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Create gift failed:", errorText);
      throw new Error(errorText);
    }

    const data = await response.json();
    setAjandekok(data);
    return data;
  }

  async function getToysOfChild(id: number) {
    const response = await fetch(`${BASE_URL}/children/${id}/toys`);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Get toys of child failed:", errorText);
      throw new Error(errorText);
    }
    const data = await response.json();
    return data;
  }

  async function createAjandek(toy: Omit<Gift, "id">) {
    const response = await fetch(`${BASE_URL}/toys`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: toy.name,
        material: toy.anyag,
        weight: toy.suly,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Create gift failed:", errorText);
      throw new Error(errorText);
    }

    const data = await response.json();
    fetchAjandekok();
    return data;
  }

  async function deleteAjandek(id: number) {
    const response = await fetch(`${BASE_URL}/toys/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Create gift failed:", errorText);
      throw new Error(errorText);
    }

    fetchAjandekok();
  }

  async function setAjandekGyereknek(KidId: number, giftId: number) {
    const response = await fetch(
      `${BASE_URL}/children/${KidId}/toys/${giftId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ giftId }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Create gift failed:", errorText);
      throw new Error(errorText);
    }

    fetchGyerekek();
  }

  async function deleteAjandekGyerektol(KidId: number, giftId: number) {
    const response = await fetch(`${BASE_URL}/children/${KidId}/toys/${giftId}`, {
      method: "DELETE",
      body: JSON.stringify({ giftId }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Create gift failed:", errorText);
      throw new Error(errorText);
    }

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
    getToysOfChild,
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
