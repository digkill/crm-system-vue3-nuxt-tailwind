import {useQuery} from "@tanstack/vue-query";
import {DB} from "~/lib/appwrite";
import {DB_ID, COLLECTION_DEALS} from "~/env";
import {KANBAN_DATA} from "~/components/kanban/kanban.data";
import type {CardInterface, ColumnInterface} from "~/components/kanban/kanban.types";
import type {DealInterface} from "~/types/deals.types";

export function useKanbanQuery() {
    return useQuery({
        queryKey: ['deals'],
        queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
        select(data) {
            const newBoard: ColumnInterface[] = [...KANBAN_DATA]
            const deals: DealInterface[] = data.documents as unknown as DealInterface[]
            console.log(newBoard, deals)

            deals.forEach((deal: DealInterface): void => {
                const column: ColumnInterface | undefined = newBoard.find((col: ColumnInterface): boolean => col.id === deal.status)
                if (column) {
                    column.items.push({
                        id: deal.$id,
                        $createdAt: deal.$createdAt,
                        name: deal.name,
                        price: deal.price,
                        companyName: deal.customer.name,
                        status: column.name
                    })
                }
            })

            return newBoard
        },
    })
}