const routers = [{
    path: '/',
    meta:{
      title: '首页',
      auth: true,
    },
    // redirect:'main',
    component: resolve => require(['../views/main.vue'],resolve)
  },
  {
    path: '/login',
    meta: {
      title: '登录',
      auth: false,
    },
    component: resolve => require(['../views/login.vue'],resolve)
  },
  {
    path: '*',
    component: resolve => require(['../views/404.vue'],resolve)
  }
];

export default routers
