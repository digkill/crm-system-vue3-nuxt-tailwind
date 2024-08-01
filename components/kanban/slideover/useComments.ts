import {useQuery} from '@tanstack/vue-query'
import {COLLECTION_DEALS, DB_ID} from '~/env'
import {DB} from "~/lib/appwrite";

export function useComments() {
    const store = useDealSlideStore()
    const cardId: string = store.card?.id || ''

    return useQuery({
        queryKey: ['deal', cardId],
        queryFn: () => DB.getDocument(DB_ID, COLLECTION_DEALS, cardId),
    })
}
