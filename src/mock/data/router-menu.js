export const routerMenu = [
  {
    path: '/mycenter',
    name: 'mycenter',
    component: 'Main',
    meta: {
      icon: 'md-flower',
      title: '我的',
      showAlways: true
    },
    children: [
      {
        path: 'info',
        name: 'info',
        meta: {
          icon: 'md-flower',
          title: '个人信息'
        },
        component: '/myview/mycenter/info'
      }
    ]
  },
  {
    path: '/system',
    name: 'system',
    component: 'Main',
    meta: {
      icon: 'md-flower',
      title: '系统设置',
      showAlways: true
    },
    children: [
      {
        path: 'setting',
        name: 'setting',
        meta: {
          icon: 'md-flower',
          title: '系统设置'
        },
        component: '/myview/system/settings/setting'
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: 'Main',
    meta: {
      icon: 'md-flower',
      title: '用户管理',
      showAlways: true
    },
    children: [
      {
        path: 'list',
        name: 'list',
        meta: {
          icon: 'md-flower',
          title: '用户列表'
        },
        component: '/myview/user/user'
      }
    ]
  },
  {
    path: '/goods',
    name: 'goods',
    component: 'Main',
    meta: {
      icon: 'md-flower',
      title: '商品管理',
      showAlways: true
    },
    children: [
      {
        path: 'goodslist',
        name: 'goodslist',
        meta: {
          icon: 'md-flower',
          title: '商品列表'
        },
        component: '/myview/goods/goods'
      }
    ]
  }
]
