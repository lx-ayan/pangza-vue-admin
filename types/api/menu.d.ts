import { RouteMeta } from "vue-router";

interface MenuResult {
    path: string;
    name: string;
    meta: RouteMeta;
    children?: MenuResult[];
    [name: string]: any;
}