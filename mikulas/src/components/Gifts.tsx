import { useContext } from "react";
import { MikulasContext } from "../context/mikulasContext";
import { GiftComponent } from "./Gift";

export function Gifts() {
  const { ajandekok, deleteAjandek } = useContext(MikulasContext);

  return (
    <div>
      {ajandekok.map((ajandek) => (
        <GiftComponent
          key={ajandek.id}
          gift={ajandek}
          onDelete={deleteAjandek}
        />
      ))}
    </div>
  );
}