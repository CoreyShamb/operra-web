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
