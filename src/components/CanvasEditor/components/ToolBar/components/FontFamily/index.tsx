import { defineComponent } from "vue";

export default defineComponent({
    name: 'FontFamily',
    setup(_props, ctx) {
        const { emit } = ctx;

        const contentsList = [
            { label: <span style="font-family: '微软雅黑'">微软雅黑</span>, value: '微软雅黑' },
            { label: <span style="font-family: '宋体'">宋体</span>, value: '宋体' },
            { label: <span style="font-family: '楷体'">楷体</span>, value: '楷体' },
            { label: <span style="font-family: Arial">Arial</span>, value: 'Arial' },
            { label: <span style="font-family: Fantasy">Fantasy</span>, value: 'Fantasy' },
        ];

        function handleClick(value: string) {
            emit('click', { key: 'executeFont', value: value as string })
        }

        return () => <>
            <t-tooltip content="字体">
                <t-select style="width: 42%" size="small" onChange={handleClick} options={contentsList} placeholder="请选择字体"></t-select>
            </t-tooltip>
        </>
    }
});
