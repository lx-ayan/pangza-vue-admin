import { RowFlex } from "@hufe921/canvas-editor";
import { defineComponent } from "vue";

export default defineComponent({
    name: 'TextAlign',
    setup(_props, ctx) {
        const { emit } = ctx;

        function handleClick(value: RowFlex) {
            
            emit('click', { key: 'executeRowFlex', value })
        }

        return () => <>
            <t-tooltip content="左对齐">
                <t-button onClick={() => handleClick(RowFlex.LEFT)} size="small" variant="text"><t-icon name="format-vertical-align-left"></t-icon></t-button>
            </t-tooltip>
            <t-tooltip content="居中">
                <t-button onClick={() => handleClick(RowFlex.CENTER)} size="small" variant="text"><t-icon name="format-vertical-align-center"></t-icon></t-button>
            </t-tooltip>
            <t-tooltip content="右对齐">
                <t-button onClick={() => handleClick(RowFlex.RIGHT)} size="small" variant="text"><t-icon name="format-vertical-align-right"></t-icon></t-button>
            </t-tooltip>
            <t-tooltip content="分散对齐">
                <t-button onClick={() => handleClick(RowFlex.JUSTIFY)} size="small" variant="text"><t-icon name="view-list"></t-icon></t-button>
            </t-tooltip>
        </>
    }
})