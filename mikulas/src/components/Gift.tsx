import type { Gift } from "../interfaces";

type Props = {
  gift: Gift;
  onDelete: (id: number) => Promise<void>;
};

export function GiftComponent({ gift, onDelete }: Props) {
  return (
    <div className="card shadow-sm rounded-4 h-100">
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{gift.name}</h5>
        <p className="card-text mb-3">
          Anyag: {gift.anyag} <br />
          Súly: {gift.suly} kg
        </p>
        <button
          className="btn btn-danger w-100 btn-sm"
          onClick={() => onDelete(gift.id)}
        >
          Törlés
        </button>
      </div>
    </div>
  );
}
