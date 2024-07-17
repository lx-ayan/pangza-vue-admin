import { defineComponent } from "vue";

export default defineComponent({
    name: 'FontSize',
    setup(_props, ctx) {
        const { emit } = ctx;
        const fontSizeList = [
            { label: '72', value: 72 },
            { label: '56', value: 56 },
            { label: '48', value: 48 },
            { label: '42', value: 42 },
            { label: '36', value: 36 },
            { label: '26', value: 26 },
            { label: '24', value: 24 },
            { label: '22', value: 22 },
            { label: '18', value: 18 },
            { label: '16', value: 16 },
            { label: '15', value: 15 },
            { label: '14', value: 14 },
            { label: '12', value: 12 },
            { label: '10.5', value: 10.5 },
            { label: '9', value: 9 },
            { label: '7.5', value: 7.5 },
            { label: '6.5', value: 6.5 },
            { label: '5.5 ', value: 5.5 },
            { label: '5', value: 5 },
        ]

        const contentsList = [
            { label: '初号', value: 42 },
            { label: '小初', value: 36 },
            { label: '一号', value: 26 },
            { label: '小一', value: 24 },
            { label: '二号', value: 22 },
            { label: '小二', value: 18 },
            { label: '三号', value: 16 },
            { label: '小三', value: 15 },
            { label: '四号', value: 14 },
            { label: '小四', value: 12 },
            { label: '五号', value: 10.5 },
            { label: '小五', value: 9 },
            { label: '六号', value: 7.5 },
            { label: '小六', value: 6.5 },
            { label: '七号', value: 5.5 },
            { label: '八号', value: 5 },
            ...fontSizeList.reverse()
        ];

        function handleClick(value: number) {
            emit('click', { key: 'executeSize', value })
        }

        return () => <>
            {/* @ts-ignore */}
            <t-tooltip content="字号">
                {/* @ts-ignore */}
                <t-select style="width: 5%;" size="small" onChange={handleClick} options={contentsList} placeholder="字号"></t-select>
                {/* @ts-ignore */}
            </t-tooltip>
        </>
    }
});
