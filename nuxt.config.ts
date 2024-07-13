// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: false},
    modules: [
        '@nuxt/image',
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        '@nuxtjs/google-fonts',
        "@nuxt/icon"
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
    }
})