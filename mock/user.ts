//@ts-ignore
import Mock from 'mockjs';

const { Random } = Mock;

const userList: LoginResult[] = [
    {
        username: 'admin',
        password: '123456',
        name: '管理员',
        permission: ['role_ADMIN', 'role_USER'],
        permissionZh: ['管理员', '普通用户'],
        token: '',
        header: 'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_0ff39d393338f349964dabc7179a1eb8.jpeg?from=2956013662',
        id: 1
    },
    {
        username: 'user',
        password: '123456',
        name: '普通用户',
        permission: ['role_USER'],
        permissionZh: ['普通用户'],
        token: '',
        header: 'https://images.unsplash.com/photo-1575318634028-6a0cfcb60c59?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        id: 2
    }
]

export default [
    {
        url: '/api/login',
        method: 'post',
        response: ({ body }: { body: LoginForm }) => {
            const user = userList.find(user => user.username == body.username && user.password == body.password);
            if (!user) {
                return {
                    code: 500,
                    data: undefined,
                    message: '用户名密码输入错误'
                }
            } else {
                const resultUser = { ...user };
                resultUser.password = void 0;
                return {
                    code: 200,
                    data: {
                        ...resultUser,
                        token: Random.string(150)
                    },
                    message: '登录成功'
                }
            }
        }
    }
] 