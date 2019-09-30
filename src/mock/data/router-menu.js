export const routerMenu = [
  {
    path: '',
    name: 'doc',
    parentid: 0,
    meta: {
      title: '文档',
      href: 'https://lison16.github.io/iview-admin-doc/#/',
      icon: 'ios-book'
    }
  },
  {
    path: '/join',
    name: 'join',
    parentid: 0,
    component: 'Main',
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: 'join_page',
        name: 'join_page',
        meta: {
          icon: '_qq',
          title: 'QQ群'
        },
        component: '/join-page.vue'
      }
    ]
  },
  {
    path: '/message',
    name: 'message',
    component: 'Main',
    parentid: 0,
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    children: [
      {
        path: 'message_page',
        name: 'message_page',
        meta: {
          icon: 'md-notifications',
          title: '消息中心'
        },
        component: '/single-page/message/index.vue'
      }
    ]
  },
  {
    path: '/components',
    name: 'components',
    parentid: 0,
    meta: {
      icon: 'logo-buffer',
      title: '组件'
    },
    component: 'Main',
    children: [
      {
        path: 'tree_select_page',
        name: 'tree_select_page',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '树状下拉选择器'
        },
        component: '/components/tree-select/index.vue'
      },
      {
        path: 'count_to_page',
        name: 'count_to_page',
        meta: {
          icon: 'md-trending-up',
          title: '数字渐变'
        },
        component: '/components/count-to/count-to.vue'
      },
      {
        path: 'drag_list_page',
        name: 'drag_list_page',
        meta: {
          icon: 'ios-infinite',
          title: '拖拽列表'
        },
        component: '/components/drag-list/drag-list.vue'
      },
      {
        path: 'drag_drawer_page',
        name: 'drag_drawer_page',
        meta: {
          icon: 'md-list',
          title: '可拖拽抽屉'
        },
        component: '/components/drag-drawer'
      },
      {
        path: 'org_tree_page',
        name: 'org_tree_page',
        meta: {
          icon: 'ios-people',
          title: '组织结构树'
        },
        component: '/components/org-tree'
      },
      {
        path: 'tree_table_page',
        name: 'tree_table_page',
        meta: {
          icon: 'md-git-branch',
          title: '树状表格'
        },
        component: '/components/tree-table/index.vue'
      },
      {
        path: 'cropper_page',
        name: 'cropper_page',
        meta: {
          icon: 'md-crop',
          title: '图片裁剪'
        },
        component: '/components/cropper/cropper.vue'
      },
      {
        path: 'tables_page',
        name: 'tables_page',
        meta: {
          icon: 'md-grid',
          title: '多功能表格'
        },
        component: '/components/tables/tables.vue'
      },
      {
        path: 'split_pane_page',
        name: 'split_pane_page',
        meta: {
          icon: 'md-pause',
          title: '分割窗口'
        },
        component: '/components/split-pane/split-pane.vue'
      },
      {
        path: 'markdown_page',
        name: 'markdown_page',
        meta: {
          icon: 'logo-markdown',
          title: 'Markdown编辑器'
        },
        component: '/components/markdown/markdown.vue'
      },
      {
        path: 'editor_page',
        name: 'editor_page',
        meta: {
          icon: 'ios-create',
          title: '富文本编辑器'
        },
        component: '/components/editor/editor.vue'
      },
      {
        path: 'icons_page',
        name: 'icons_page',
        meta: {
          icon: '_bear',
          title: '自定义图标'
        },
        component: '/components/icons/icons.vue'
      }
    ]
  },
  {
    path: '/error_store',
    name: 'error_store',
    parentid: 0,
    meta: {
      hideInBread: true
    },
    component: 'Main',
    children: [
      {
        path: 'error_store_page',
        name: 'error_store_page',
        meta: {
          icon: 'ios-bug',
          title: '错误收集'
        },
        component: '/error-store/error-store.vue'
      }
    ]
  },
  {
    path: '/error_logger',
    name: 'error_logger',
    parentid: 0,
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    component: 'Main',
    children: [
      {
        path: 'error_logger_page',
        name: 'error_logger_page',
        meta: {
          icon: 'ios-bug',
          title: '错误收集'
        },
        component: '/single-page/error-logger.vue'
      }
    ]
  },
  {
    path: '/directive',
    name: 'directive',
    parentid: 0,
    meta: {
      hideInBread: true
    },
    component: 'Main',
    children: [
      {
        path: 'directive_page',
        name: 'directive_page',
        meta: {
          icon: 'ios-navigate',
          title: '指令'
        },
        component: '/directive/directive.vue'
      }
    ]
  },
  {
    path: '/multilevel',
    name: 'multilevel',
    parentid: 0,
    meta: {
      icon: 'md-menu',
      title: '多级菜单'
    },
    component: 'Main',
    children: [
      {
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'md-funnel',
          title: '二级-1'
        },
        component: '/multilevel/level-2-1.vue'
      },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          access: ['super_admin'],
          icon: 'md-funnel',
          showAlways: true,
          title: '二级-2'
        },
        component: 'parentView',
        children: [
          {
            path: 'level_2_2_1',
            name: 'level_2_2_1',
            meta: {
              icon: 'md-funnel',
              title: '三级'
            },
            component: '/multilevel/level-2-2/level-2-2-1.vue'
          },
          {
            path: 'level_2_2_2',
            name: 'level_2_2_2',
            meta: {
              icon: 'md-funnel',
              title: '三级'
            },
            component: '/multilevel/level-2-2/level-2-2-2.vue'
          }
        ]
      },
      {
        path: 'level_2_3',
        name: 'level_2_3',
        meta: {
          icon: 'md-funnel',
          title: '二级-3'
        },
        component: '/multilevel/level-2-3.vue'
      }
    ]
  },
  {
    path: '/argu',
    name: 'argu',
    parentid: 0,
    meta: {
      hideInMenu: true
    },
    component: 'Main',
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `{{ params }}-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: '/argu-page/params.vue'
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `{{ query }}-${route.query.id}`,
          notCache: true
        },
        component: '/argu-page/query.vue'
      }
    ]
  }
]
