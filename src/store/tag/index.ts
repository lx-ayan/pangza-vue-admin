import { piniaSotrageConfig } from "@/config";
import router from "@/router";
import { defineStore } from "pinia";

export const tagStore = defineStore('tag', {
    state: () => ({
        tagViewList: [{ title: '仪表盘', close: false, path: '/home' }] as TagView[]
    }),
    actions: {
        addTag(tag: TagView) {
            if (tag.path == '/home') return;
            const index = this.tagViewList.findIndex(t => t.path === tag.path);
            if (index < 0) {
                this.tagViewList.push(tag);
            }
        },
        setTagViewList(data: TagView[]) {
            this.tagViewList = data;
        },
        removeAll() {
            this.tagViewList = [{ title: '仪表盘', close: false, path: '/home' }] as TagView[]
        },
        removeTag(tag: TagView) {
            const index = this.tagViewList.findIndex(t => t.path === tag.path);
            const list = [...this.tagViewList];
            const path = router.currentRoute.value.fullPath;
            if (index >= 0) {
                if (index != 0) {
                    if (path == tag.path) {
                        router.push(list[index - 1].path);
                    }
                }
                list.splice(index, 1);
                this.tagViewList = list;
            }
        }
    },
    persist: piniaSotrageConfig('tagStore')
})