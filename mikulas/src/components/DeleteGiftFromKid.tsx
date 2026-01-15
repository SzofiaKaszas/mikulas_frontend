import { useContext, useEffect, useState } from "react";
import { MikulasContext } from "../context/mikulasContext";
import type { Gift } from "../interfaces";

export function DeleteGiftFromKid() {
  const { gyerekek, getToysOfChild, deleteAjandekGyerektol } =
    useContext(MikulasContext);

  const [selectedKidId, setSelectedKidId] = useState<number | "">("");
  const [selectedGiftId, setSelectedGiftId] = useState<number | "">("");
  const [kidGifts, setKidGifts] = useState<Gift[]>([]);

  useEffect(() => {
    const loadGifts = async () => {
      if (selectedKidId !== "") {
        try {
          const gifts = await getToysOfChild(selectedKidId);
          setKidGifts(gifts);
          setSelectedGiftId("");
        } catch (error) {
          console.error(error);
          setKidGifts([]);
        }
      } else {
        setKidGifts([]);
      }
    };
    loadGifts();
  }, [selectedKidId, getToysOfChild]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedKidId === "" || selectedGiftId === "") {
      alert("Válassz gyereket és ajándékot!");
      return;
    }

    try {
      await deleteAjandekGyerektol(selectedKidId, selectedGiftId);
      alert("Ajándék sikeresen törölve");

      const gifts = await getToysOfChild(selectedKidId);
      setKidGifts(gifts);
      setSelectedGiftId("");
    } catch (error) {
      console.error(error);
      alert("Hiba történt az ajándék törlésekor");
    }
  };

  return (
    <div className="container py-5 d-flex justify-content-center">
      <form 
        onSubmit={handleSubmit} 
        className="p-4 shadow-lg rounded-4 bg-light w-100"
        style={{ maxWidth: "400px" }}
      >
        <h3 className="text-center mb-4">Ajándék törlése a gyerektől</h3>

        <div className="mb-3">
          <label className="form-label">Gyerek</label>
          <select
            className="form-select"
            value={selectedKidId}
            onChange={(e) => setSelectedKidId(e.target.value === "" ? "" : Number(e.target.value))}
          >
            <option value="">-- válassz gyereket --</option>
            {gyerekek.map((gyerek) => (
              <option key={gyerek.id} value={gyerek.id}>
                {gyerek.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label">Ajándék</label>
          <select
            className="form-select"
            value={selectedGiftId}
            disabled={kidGifts.length === 0}
            onChange={(e) => setSelectedGiftId(e.target.value === "" ? "" : Number(e.target.value))}
          >
            <option value="">-- válassz ajándékot --</option>
            {kidGifts.map((gift) => (
              <option key={gift.id} value={gift.id}>
                {gift.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-danger w-100"
          disabled={!selectedKidId || !selectedGiftId}
        >
          Törlés
        </button>
      </form>
    </div>
  );
}
