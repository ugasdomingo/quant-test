const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('pages/IndexPage.vue') },
            {
                path: '/podcast/:id',
                component: () => import('pages/PodcastPage.vue'),
            },
        ],
    },

    // Catch all 404 page not found
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
];

export default routes;
