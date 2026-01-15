import { useContext } from "react";
import { MikulasContext } from "./context/mikulasContext";
import { Kid } from "./Kid";

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