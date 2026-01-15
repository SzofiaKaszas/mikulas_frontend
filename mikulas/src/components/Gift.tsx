import type { Gift } from "../interfaces";

type Props = {
  gift: Gift;
  onDelete: (id: number) => Promise<void>;
};

export function GiftComponent({ gift, onDelete }: Props) {
  return (
    <div>
      <h3>{gift.name}</h3>
      <p>{gift.anyag}</p>
      <p>Weight: {gift.suly} kg</p>

      <button onClick={() => onDelete(gift.id)}>
        Delete
      </button>
    </div>
  );
}
