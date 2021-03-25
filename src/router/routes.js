const routes = [
  {
    path: '/',
    redirect: '/index',
    component: () => import('layouts/BasicLayout.vue'),
    children: [
      { path: '/index', name: 'Index', component: () => import('pages/Index.vue') },
      { path: '/expend/addExpend', name: 'addExpend', component: () => import('pages/expends/AddExpend.vue') },
      { path: '/expend/detailExpend', name: 'detailExpend', component: () => import('pages/expends/DetailExpend.vue') },
      { path: '/expend/mangeDicts', name: 'dicts', component: () => import('pages/dictionary/DictsManage.vue') },
      { path: '/target/targetList', name: 'target', component: () => import('pages/targets/TargetList.vue') },
      { path: '/target/plan', name: 'plan', component: () => import('pages/targets/TargetPlan.vue') },
      { path: '/target/targetDetail', name: 'targetDetail', component: () => import('pages/targets/TargetDetail.vue') },
      // 方法论
      { path: '/methodology/swot', name: 'swot', component: () => import('pages/methodology/SwotAnalyse.vue') },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('components/Login.vue'),
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
