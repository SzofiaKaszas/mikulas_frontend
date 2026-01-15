import { useContext, useState } from "react";
import { MikulasContext } from "../context/mikulasContext";
import type { Anyag, Gift } from "../interfaces";

export function CreateGift() {
  const { createAjandek } = useContext(MikulasContext);

  const [name, setName] = useState("");
  const [anyag, setAnyag] = useState<Anyag>("other");
  const [suly, setSuly] = useState<number>(0.1);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await createAjandek({
      name,
      anyag,
      suly,
    });

    setName("");
    setAnyag("other");
    setSuly(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>New Gift</h3>

      <input
        placeholder="Gift name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <select
        value={anyag}
        onChange={(e) => setAnyag(e.target.value as Gift["anyag"])}
      >
        <option value="wood">Wood</option>
        <option value="plastic">Plastic</option>
        <option value="metal">Metal</option>
        <option value="other">Other</option>
      </select>

      <input
        type="number"
        min="0"
        step="0.1"
        value={suly}
        onChange={(e) => setSuly(Number(e.target.value))}
        required
      />

      <button type="submit">Create Gift</button>
    </form>
  );
}
