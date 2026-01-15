import type { Kid as KidType } from "../interfaces";

export function Kid({ kid }: { kid: KidType }) {
  return (
    <div className="card shadow-sm rounded-4 h-100">
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{kid.name}</h5>
        <p className="card-text mb-2">
          Cím: {kid.lakcim}
        </p>
        <span
          className={`badge ${
            kid.wasGood ? "bg-success" : "bg-danger"
          }`}
        >
          {kid.wasGood ? "Jó volt" : "Nem volt jó"}
        </span>
      </div>
    </div>
  );
}
