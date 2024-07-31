import type { CardInterface } from '~/components/kanban/kanban.types'

const defaultValue: { card: CardInterface | null, isOpen: boolean } = {
    card: null,
    isOpen: false,
}

export const useDealSlideStore = defineStore('dealSlide', {
    state: () => defaultValue,
    actions: {
        clear() {
            this.$patch(defaultValue)
        },
        set(card: CardInterface) {
            this.$patch({ card, isOpen: true })
        },
        toggle() {
            this.isOpen = !this.isOpen
        },
    },
})
