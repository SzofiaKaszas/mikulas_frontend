import type { Kid } from "./interfaces";

export function Kid({ kid }: { kid: Kid }) {
    return (
        <div>
            <h3>{kid.name}</h3>
            <p>Age: {kid.lakcim}</p>
            <p>Was Good: {kid.wasGood ? "Yes" : "No"}</p>
        </div>
    );
}