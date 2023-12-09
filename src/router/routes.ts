import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'MyHeader',
        name: 'MyHeader',
        component: () => import('components/MyHeader.vue'),
      },
      {
        path: 'InfiniteCarousel',
        name: 'InfiniteCarousel',
        component: () => import('components/InfiniteCarousel.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    name: 'NotFound',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
