import {defineStore} from "pinia";

interface AuthStoreInterface {
    email: string
    name: string
    status: boolean
}

const defaultValue: { user: AuthStoreInterface } = {
    user: {
        email: '',
        name: '',
        status: false,
    }
}

export const useAuthStore = defineStore('auth', {
    state: () => defaultValue,
    getters: {
        isAuth: state => !!state.user.status
    },
    actions: {
        clear() {
            this.$patch(defaultValue)
        },
        set(input: AuthStoreInterface) {
            this.$patch({user: input})
        }
    }
})

export const useIsLoadingStore = defineStore('isLoading', {
    state: () => ({
        isLoading: true,
    }),
    actions: {
        set(data: boolean) {
            this.$patch({isLoading: data})
        },
    },
})