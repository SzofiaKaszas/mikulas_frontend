import { useContext } from "react";
import { MikulasContext } from "../context/mikulasContext";
import { GiftComponent } from "./Gift";

export function Gifts() {
  const { ajandekok, deleteAjandek } = useContext(MikulasContext);

  return (
    <div className="container py-5">
      <div className="row g-4">
        {ajandekok.map((ajandek) => (
          <div key={ajandek.id} className="col-sm-6 col-md-4 col-lg-3">
            <GiftComponent gift={ajandek} onDelete={deleteAjandek} />
          </div>
        ))}
      </div>
    </div>
  );
}
