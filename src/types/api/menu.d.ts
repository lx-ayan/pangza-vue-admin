import { RouteMeta } from 'vue-router';

export interface MenuResult {
    path: string;
    name: string;
    meta?: RouteMeta;
    children?: MenuResult[];
    [name: string]: any;
}