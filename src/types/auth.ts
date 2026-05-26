export type User = {
    id: string;
    email: string;
    name?: string | null;
    createdAt?: string;
    updatedAt?: string;
};

export type LoginInput = {
    email: string;
    password: string;
};

export type RegisterInput = {
    name?: string;
    email: string;
    password: string;
};

export type AuthResponse = {
    user: User;
    token: string;
};

export type ApiAuthResponse = {
    success: boolean;
    message: string;
    data: AuthResponse;
};

export type ApiRegisterResponse = {
    success: boolean;
    message: string;
    data: User;
};