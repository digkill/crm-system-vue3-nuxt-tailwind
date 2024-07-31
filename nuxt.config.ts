export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: false},
    modules: [
        '@nuxt/image',
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        '@nuxtjs/google-fonts',
        '@nuxt/icon',
        '@pinia/nuxt',
        [
            '@vee-validate/nuxt',
            {
                // disable or enable auto imports
                autoImports: true,
            }
        ],
    ],
    shadcn: {
        prefix: 'UI',
        componentDir: './components/ui'
    },
    googleFonts: {
        families: {
            Roboto: true,
            Inter: [400, 700],
            'Josefin+Sans': true,
            Lato: [100, 300],
            Raleway: {
                wght: [100, 400],
                ital: [100]
            },
        }
    },
    pinia: {
        storesDirs: ['./store/**']
    },
    runtimeConfig: {
        public: {
            appWriteId:'NUXT_PUBLIC_APP_WRITE_ID',
            dbID: 'NUXT_PUBLIC_DB_ID',
            collectionDeals: 'NUXT_PUBLIC_COLLECTION_DEALS',
            collectionCustomers: 'NUXT_PUBLIC_COLLECTION_CUSTOMERS',
            collectionComments: 'NUXT_PUBLIC_COLLECTION_COMMENTS',
            storageId: 'NUXT_PUBLIC_STORAGE_ID',
        }
    },
})