interface MenuMeta {
    title: string,
    icon?: string;
    close?: boolean;
    web?: boolean;
    open?: boolean;
    href?: string;
}

interface IMenuItem {
    path: string;
    meta?: MenuMeta;
}

interface IMenu extends IMenuItem {
    children?: IMenuItemp[],
}

interface TagView {
    title: string;
    path: string;
    icon?: string;
    close?: boolean;
}