import { isArray } from "@/utils/is";
import { hasPermission } from "@/utils/security";
import { Directive } from "vue";

const permissionDirective = {
    name: 'permission',
    mounted(el, binding) {
        const bValue = binding.value;
        let permission: string[] = [];
        if (isArray(bValue)) {
            permission = [...bValue] as string[];
        } else {
            permission = bValue.split(',');
        }
        if (!hasPermission(permission)) {
            el.remove();
        }
    }
} as Directive

export default permissionDirective;
