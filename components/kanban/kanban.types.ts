import type { EnumStatus } from '~/types/deals.types'

export interface CardInterface {
    id: string,
    name: string,
    price: number,
    $createdAt: string,
    companyName: string,
    status: string
}

export interface ColumnInterface {
    id: EnumStatus,
    name: string,
    items: CardInterface[],
}