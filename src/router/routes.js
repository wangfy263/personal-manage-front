const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/addExpend', component: () => import('pages/AddExpend.vue') },
      { path: '/detailExpend', component: () => import('pages/DetailExpend.vue') },
      { path: '/mangeDicts', component: () => import('pages/dictionary/DictsManage.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
