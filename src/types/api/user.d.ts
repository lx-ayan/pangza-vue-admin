interface LoginResult extends OtherParam {
    username: string;
    permission: string | string[];
    token: string;
    nickName?: string;
    avatar?: string;
}

interface LoginDTO extends OtherParam {
    username: string;
    password: string;
}