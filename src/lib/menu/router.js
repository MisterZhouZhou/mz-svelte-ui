import { writable } from 'svelte/store'
import Link from '../pages/link/Link.svelte'
import Button from '../pages/button/Button.svelte'
import QuickStartMd from '../pages/guide/QuickStart.md?raw'
import OverViewMd from '../pages/guide/OverView.md?raw'
import Markdown from '../markdown.svelte'

const routes = [
  {
    key: '',
    displayName: '开发指南',
    children: [
      {
        key: 'overview',
        displayName: '概述',
        component: Markdown,
        meta: {
          markdown: OverViewMd
        }
      },
      {
        key: 'guide',
        displayName: '快速开始',
        component: Markdown,
        meta: {
          markdown: QuickStartMd
        }
      },
    ]
  },
  {
    key: 'link',
    displayName: 'Link 文字链接',
    component: Link,
  },
  {
    key: 'button',
    displayName: 'Button 按钮',
    component: Button,
  },
]

// 当前路由信息
export const currentRoute = writable('-1')
/// 设置当前路由信息
export const setCurrentRoute = (route) => {
  currentRoute.set(route)
}

export default routes
