export interface MenuItemInterface {
    id: number,
    name: string
    link: string
    icon: string
}

export const MENU_ITEMS: MenuItemInterface[] = [
    {
        id: 1,
        name: 'Dashboard',
        link: '/',
        icon: 'ri:dashboard-fill',

    },
    {
        id: 2,
        name: 'Products',
        link: '/products',
        icon: 'ri:handbag-line',
    },
    {
        id: 3,
        name: 'Payments',
        link: '/payments',
        icon: 'ri:bank-card-fill',
    },
    {
        id: 4,
        name: 'Orders',
        link: '/orders',
        icon: 'ri:file-list-3-line',
    },
    {
        id: 5,
        name: 'Customers',
        link: '/customers',
        icon: 'ri:user-5-line',
    },
    {
        id: 6,
        name: 'Feedback',
        link: '/feedback',
        icon: 'ri:feedback-line',
    },
    {
        id: 7,
        name: 'Settings',
        link: '/settings',
        icon: 'ri:settings-3-line',
    },
    {
        id: 8,
        name: 'Help',
        link: '/help',
        icon: 'ri:question-line',
    },
]