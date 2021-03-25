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
      { path: '/target/targetDetail/:targetId', name: 'targetDetail', component: () => import('pages/targets/TargetDetail.vue') },
      { path: '/planTable/Daily', name: 'planTableDaily', component: () => import('pages/planTable/DailyTable.vue') },
      { path: '/planTable/Weekly', name: 'planTableWeekly', component: () => import('pages/planTable/WeeklyTable.vue') },
      { path: '/planTable/Monthly', name: 'planTableMonthly', component: () => import('pages/planTable/MonthlyTable.vue') },
      { path: '/planTable/Yearly', name: 'planTableYearly', component: () => import('pages/planTable/YearlyTable.vue') },
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
