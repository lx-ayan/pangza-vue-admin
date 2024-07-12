import { RowFlex } from "@hufe921/canvas-editor";
import { PropType } from "vue";


const props = {
    modelValue: {
        type: String,
        default: ''
    },
    headerValue: {
        type: String,
        default: ''
    },
    footerValue: {
        type: String,
        default: ''
    },
    showTar: {
        type: Boolean,
        default: true
    },
    align: {
        type: String as PropType<RowFlex>,
        default: 'left'
    },
    toolBarConfig: {
        type: Array as PropType<ToolBarItem[]>,
        default: () => []
    }
};

export default props;