import { useContext, useState } from "react";
import { MikulasContext } from "../context/mikulasContext";
import type { Anyag } from "../interfaces";

export function CreateGift() {
  const { createAjandek } = useContext(MikulasContext);

  const [name, setName] = useState("");
  const [anyag, setAnyag] = useState<Anyag>("other");
  const [suly, setSuly] = useState<number>(0.1);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await createAjandek({ name, anyag, suly });
      alert("Ajándék sikeresen létrehozva!");
      setName("");
      setAnyag("other");
      setSuly(0.1);
    } catch (error) {
      console.error(error);
      alert("Hiba történt az ajándék létrehozásakor");
    }
  }

  return (
    <div className="container py-5 d-flex justify-content-center">
      <form 
        onSubmit={handleSubmit} 
        className="p-4 shadow-sm rounded-4 bg-light w-100" 
        style={{ maxWidth: "400px" }}
      >
        <h3 className="text-center mb-4">Új Ajándék</h3>

        <div className="mb-3">
          <label className="form-label">Név</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ajándék neve"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Anyag</label>
          <select
            className="form-select"
            value={anyag}
            onChange={(e) => setAnyag(e.target.value as Anyag)}
          >
            <option value="wood">Fa</option>
            <option value="plastic">Műanyag</option>
            <option value="metal">Fém</option>
            <option value="other">Egyéb</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label">Súly (kg)</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            className="form-control"
            value={suly}
            onChange={(e) => setSuly(Number(e.target.value))}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-success w-100"
          disabled={!name || suly <= 0}
        >
          Ajándék létrehozása
        </button>
      </form>
    </div>
  );
}
