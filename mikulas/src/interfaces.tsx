export interface Kid{
    id: number;
    name: string;
    lakcim: string;
    wasGood: boolean;
}

export type Anyag = 'wood' | 'metal' | 'plastic' | 'other';

export interface Gift{
    id: number;
    name: string;
    anyag: Anyag;
    suly: number;
}

export interface MikulasContextType {
    gyerekek: Kid[];
    ajandekok : Gift[];
    fetchGyerekek: () => Promise<Kid[]>;
    fetchAjandekok: () => Promise<Gift[]>;

    createAjandek: (toy: Omit<Gift, 'id'>) => Promise<Gift>;
    deleteAjandek: (id: number) => Promise<void>;
 
    setAjandekGyereknek: (kidId: number, toyId: number) => Promise<void>;
    deleteAjandekGyerektol: (kidId: number, toyId: number) => Promise<void>;
}