import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

const LOGIN_PAGE_NAME = 'Login';
const HOME_PAGE = 'Index';

export default function ({ store /* , ssrContext */ }) {
  const Router = new VueRouter({
    scrollBehavior: () => {
      return { x: 0, y: 0 };
    },
    routes,
    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  });

  Router.beforeEach((to, from, next) => {
    const isLogin = store.getters['Personal/isLogin'];
    // eslint-disable-next-line
    if (from.name === to.name) {
    } else if (!isLogin && to.name !== LOGIN_PAGE_NAME) {
      // 未登录且要跳转的页面不是登录页
      next({
        name: LOGIN_PAGE_NAME, // 跳转到登录页
      });
    } else if (!isLogin && to.name === LOGIN_PAGE_NAME) {
      // 未登陆且要跳转的页面是登录页
      next(); // 跳转
    } else if (isLogin && to.name === LOGIN_PAGE_NAME) {
      // 已登录且要跳转的页面是登录页
      next({
        path: HOME_PAGE, // 跳转到homeName页
      });
    } else {
      next();
    }
  });

  // Router.afterEach(to => {})
  return Router;
}
