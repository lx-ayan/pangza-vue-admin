import useState from "@/hooks/useState";
import { defineComponent } from "vue";
import { Tooltip, Select } from "tdesign-vue-next";

const FontFamily = defineComponent({
    name: 'FontFamily',
    setup(_props, ctx) {
        const { emit } = ctx;
        const [fontFamily, setFontFamily] = useState('');

        const contentsList = [
            { label: '微软雅黑', value: '微软雅黑', content: <span style="font-family: '微软雅黑'">微软雅黑</span> },
            { label: '宋体', value: '宋体', content: <span style="font-family: '宋体'">宋体</span> },
            { label: '楷体', value: '楷体', content: <span style="font-family: '楷体'">楷体</span> },
            { label: 'Arial', value: 'Arial', content: <span style="font-family: Arial">Arial</span> },
            { label: 'Fantasy', value: 'Fantasy', content: <span style="font-family: Fantasy">Fantasy</span> },
        ];

        function handleClick(value: string) {
            setFontFamily(value);
            emit('click', { key: 'executeFont', value })
        }

        return () => <>
            {/* @ts-ignore */}
            <Tooltip content="字体">
                {/* @ts-ignore */}
                <Select value={fontFamily} style="width: 8%" size="small" onChange={handleClick} options={contentsList} placeholder="字体"></Select>
            </Tooltip>
        </>
    }
});
export default FontFamily;