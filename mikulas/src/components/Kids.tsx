import { useContext } from "react";
import { Kid } from "./Kid";
import { MikulasContext } from "../context/mikulasContext";

export function Kids() {
    const context = useContext(MikulasContext);

    return (
        <div>
            {context.gyerekek.map(gyerek => (
                <Kid kid={gyerek} key={gyerek.id} />
            ))}
        </div>
    );
}