import { ReactNode } from "react";

export type Props = {
    children: ReactNode,
}

export interface ApiMakananResponse {
    status: number,
    data: Makanan[],
}

export interface Makanan {
    id: number,
    nama: string,
    deskripsi: string,
    createdAt: string,
    updatedAt: string,
    harga: number,
    stok: number,
    tokoId: number,
}


export interface User {
    id: number,
    nama: string,
    bio: string,
    created_at: string,
    updated_at: string,
    saldo: number,
    role: ROLE,
}

enum ROLE {
    PELANGGAN,
    PENJUAL,
}