import {defineStore} from "pinia";

interface LoadingInterface {
    isLoading: boolean
}

const defaultValue: { loading: LoadingInterface } = {
    loading: {isLoading: false}
}

export const useIsLoadingStore = defineStore('isLoading', {
    state: () => defaultValue,
    actions: {
        set(data: LoadingInterface) {
            this.$patch({loading: data})
        }
    }
})