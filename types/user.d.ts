interface LoginForm {
    username: string;
    password: string;
}

interface LoginResult {
    username: string;
    name: string;
    token: string;
    id?: number | string;
    header?: string;
    password?: string;
    permission?: string[];
    permissionZh?: string[];
}