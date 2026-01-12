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