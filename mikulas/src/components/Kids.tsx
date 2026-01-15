import { useContext } from "react";
import { Kid } from "./Kid";
import { MikulasContext } from "../context/mikulasContext";

export function Kids() {
  const { gyerekek } = useContext(MikulasContext);

  return (
    <div className="container py-5">
      <div className="row g-4">
        {gyerekek.map((gyerek) => (
          <div key={gyerek.id} className="col-sm-6 col-md-4 col-lg-3">
            <Kid kid={gyerek} />
          </div>
        ))}
      </div>
    </div>
  );
}
