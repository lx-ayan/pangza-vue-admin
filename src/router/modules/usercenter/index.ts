export default {
    path: '/usercenter',
    component: () => import('@/layouts/usercenter/index.vue'),
    meta: {
        title: '用户中心',
        show: false,
        auth: true
    }
}