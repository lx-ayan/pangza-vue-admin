import { LabelOptionList } from "@t/global";

export const ADD_ROUTE_NAME = 'app';

/**
 * @description 菜单分组样式
 */
export const MENU_TYPE_LABEL_LIST: LabelOptionList = [
    { label: '折叠', value: 'normal' },
    { label: '分组', value: 'group' }
];

/**
 * @description 菜单展开样式
 */
export const MENU_EXPAND_TYPE_LABEL_LIST: LabelOptionList = [
    { label: '折叠', value: 'normal' },
    { label: '气泡', value: 'popup' }
]

/**
 * @description 路由动画
 */
export const ROUTER_TRANSITION_LABEL_LIST: LabelOptionList = [
    { label: '显隐', value: 'fade' },
    { label: '偏移', value: 'translate' },
    { label: '弹出', value: 'scale' }
];