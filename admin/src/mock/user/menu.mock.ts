import type { MenuList } from '@/interface/layout/menu.interface';

import { intercepter, mock } from '../config';

const mockMenuList: MenuList = [
  {
    code: 'dashboard',
    label: {
      en_US: 'Dashboard',
    },
    icon: 'dashboard',
    path: '/dashboard',
  },
  {
    code: 'documentation',
    label: {
      en_US: 'Documentation',
    },
    icon: 'documentation',
    path: '/documentation',
  },
  {
    code: 'product',
    label: {
      en_US: 'Product',
    },
    icon: 'documentation',
    path: '/product',
  },
  {
    code: 'warehouse',
    label: {
      en_US: 'Warehouse',
    },
    icon: 'documentation',
    path: '/warehouse',
  },
  {
    code: 'rack',
    label: {
      en_US: 'Rack',
    },
    icon: 'documentation',
    path: '/rack',
  },
  {
    code: 'brand',
    label: {
      en_US: 'Brand',
    },
    icon: 'documentation',
    path: '/brand',
  },
  {
    code: 'guide',
    label: {
      en_US: 'Guide',
    },
    icon: 'guide',
    path: '/guide',
  },
  {
    code: 'permission',
    label: {
      en_US: 'Permission',
    },
    icon: 'permission',
    path: '/permission',
    children: [
      {
        code: 'routePermission',
        label: {
          en_US: 'Route Permission',
        },
        path: '/permission/route',
      },
      {
        code: 'notFound',
        label: {
          en_US: '404',
        },
        path: '/permission/404',
      },
    ],
  },
  {
    code: 'component',
    label: {
      en_US: 'Component',
    },
    icon: 'permission',
    path: '/component',
    children: [
      {
        code: 'componentForm',
        label: {
          en_US: 'Form',
        },
        path: '/component/form',
      },
      {
        code: 'componentTable',
        label: {
          en_US: 'Table',
        },
        path: '/component/table',
      },
      {
        code: 'componentSearch',
        label: {
          en_US: 'Search',
        },
        path: '/component/search',
      },
      {
        code: 'componentAside',
        label: {
          en_US: 'Aside',
        },
        path: '/component/aside',
      },
      {
        code: 'componentTabs',
        label: {
          en_US: 'Tabs',
        },
        path: '/component/tabs',
      },
      {
        code: 'componentRadioCards',
        label: {
          en_US: 'Radio Cards',
        },
        path: '/component/radio-cards',
      },
    ],
  },

  {
    code: 'business',
    label: {
      en_US: 'Business',
    },
    icon: 'permission',
    path: '/business',
    children: [
      {
        code: 'basic',
        label: {
          en_US: 'Basic',
        },
        path: '/business/basic',
      },
      {
        code: 'withSearch',
        label: {
          en_US: 'WithSearch',
        },
        path: '/business/with-search',
      },
      {
        code: 'withAside',
        label: {
          en_US: 'WithAside',
        },
        path: '/business/with-aside',
      },
      {
        code: 'withRadioCard',
        label: {
          en_US: 'With Nav Tabs',
        },
        path: '/business/with-radio-cards',
      },
      {
        code: 'withTabs',
        label: {
          en_US: 'With Tabs',
        },
        path: '/business/with-tabs',
      },
    ],
  },
];

mock.mock('/user/menu', 'get', intercepter(mockMenuList));
