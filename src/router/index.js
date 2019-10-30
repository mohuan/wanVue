const routers = [{
    path: '/',
    meta:{
      title: '首页',
      auth: true,
    },
    // redirect:'main',
    component: resolve => require(['@/components/HelloWorld'],resolve)
  }
];

export default routers
