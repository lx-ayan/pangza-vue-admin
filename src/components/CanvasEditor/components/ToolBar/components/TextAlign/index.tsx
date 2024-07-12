import { DropdownOption } from "tdesign-vue-next";
import { defineComponent } from "vue";

export default defineComponent({
    name: 'TextAlign',
    setup(_props, ctx) {
        const { emit } = ctx;

        const contentsList: DropdownOption[] = [
            { content: '居左对齐', value: 'left', prefixIcon: () => <t-icon name="format-vertical-align-left"></t-icon> },
            { content: '居中对齐', value: 'center', prefixIcon: () => <t-icon name="format-vertical-align-center"></t-icon> },
            { content: '居右对齐', value: 'right', prefixIcon: () => <t-icon name="format-vertical-align-right"></t-icon> }
        ];

        function handleClick(value: string) {
            emit('click', { key: 'executeRowFlex', value: value as string })
        }

        return () => <>
            <t-tooltip content="对齐方式">
                <t-dropdown onClick={({ value }) => handleClick(value)} options={contentsList}>
                    <t-button size="small" variant="text"><t-icon size="17" name="view-list"></t-icon></t-button>
                </t-dropdown>
            </t-tooltip>
        </>
    }
})