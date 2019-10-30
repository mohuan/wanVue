// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import Routers from './router';
import store from './store/store';
import components from './components/main';

// 加载插件
// iview
Vue.use(ViewUI);
// 路由
Vue.use(VueRouter);
// 组件
Vue.use(components);

Vue.config.productionTip = false;

//路由配置
const RouterConfig = {
  mode:'history',
  routes: Routers
};

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    ViewUI.LoadingBar.start();
    next();
});

router.afterEach(router => {
  ViewUI.LoadingBar.finish();
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store:store,
  router:router,
  render: h => h(App),
})
