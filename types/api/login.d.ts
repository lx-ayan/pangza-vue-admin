interface LoginResult {
    username: string;
    token: string;
    permission: string[];
    header?: string;
}

interface LoginRequest {
    username: string;
    password: string;
}