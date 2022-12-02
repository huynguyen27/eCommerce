
export const Menu = [
    {
        title: 'Home',
        url: '/',

    },
    {
        title: 'Champagne',
        url: '/',
        submenu: [
            {
                title: 'Wine',
                url: 'wine',
                submenu: [
                    {
                        title: 'Red Wine',
                        submenu:[
                            {
                                title: 'Cabernet Sauvignon',
                                url: 'cabernet-sauvignon'
                            },
                            {
                                title: 'Pinot Noir',
                                url: 'pinot-noir'
                            },
                            {
                                title: 'Tempranillo',
                                url: 'tempranillo'
                            },
                        ],
                    },
                    {
                        title: 'White Wine',
                        url: 'white-wine',
                    },
                    {
                        title: 'Rose Wine',
                        url: 'rose-wine',
                    },
                ],
            },
            {
                title: 'Champagne',
                url: 'champagne',
            },
            {
                title: 'Sparkling',
                url: 'sparkling',
            },
        ],
    },
    {
        title: 'Whisky',
        url: '/',
        submenu: [
            {
                title: 'Scotch Whisky',
                url: 'scotch-whisky',
            },
            {
                title: 'Bourbon',
                url: 'bourbon',
            },
            {
                title: 'Tennessee',
                url: 'tennessee',
            },
        ],

    },
    {
        title: 'Vodka',
        url: '/',

    },
    {
        title: 'Liqeur',
        url: '/',

    },
    {
        title: 'About',
        url: '/',

    },
    {
        title: 'Contact',
        url: '/',

    },
];