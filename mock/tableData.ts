import Mock from 'mockjs';
import { ProTableRequest, ProTableResult } from 'procomponent-tdesign-vue';

const { Random } = Mock;

export default [
    {
        url: '/api/table_data',
        method: 'post',
        response: ({ body }: { body: ProTableRequest }) => {
            const total = Math.random() * (10 - 1) + 1;
            const list: any[] = [];
            for (let i = 0; i < 10; i++) {
                list.push({
                    'id': i + 1,
                    'username': Random.cname(),
                    'title': Random.ctitle(),
                    'description': Random.cword(5, 15),
                    'address': Random.county(true),
                    'code': Random.zip(),
                    'createtime': Random.now('day', 'yyyy-MM-dd HH:mm:ss')
                })
            }
            return {
                code: 200,
                data: {
                    pageNum: body.pageNum,
                    total: 100,
                    list,
                },
                message: '请求成功'
            }
        },
    }
] 