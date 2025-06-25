interface ThemeState {
    lang: LangType;
    brandColor: string;
    nprogress?: boolean;
    menuType?: string;
    expandMutex?: boolean;
    logo?: boolean;
    gray?: boolean;
    screen?: boolean;
    collapsed?: boolean;
    menuExpandType?: string;
    collapsedBtn?: boolean;
    animate?: boolean;
    animateName?: 'fade' | 'translate';
    theme?: 'dark' | 'light';
    tagView?: boolean;
    watermark?: boolean;
}