import { apiClient } from "@/lib/api/client";
import type {
    ApiAuthResponse,
    ApiRegisterResponse,
    AuthResponse,
    LoginInput,
    RegisterInput,
    User,
} from "@/types/auth";

export async function loginUser(input: LoginInput): Promise<AuthResponse> {
    const response = await apiClient<ApiAuthResponse>("/auth/login", {
        method: "POST",
        auth: false,
        body: JSON.stringify(input),
    });

    return response.data;
}

export async function registerUser(input: RegisterInput): Promise<AuthResponse> {
    await apiClient<ApiRegisterResponse>("/auth/register", {
        method: "POST",
        auth: false,
        body: JSON.stringify(input),
    });

    const loginResponse = await loginUser({
        email: input.email,
        password: input.password,
    });

    return loginResponse;
}

export async function getCurrentUser(): Promise<User> {
    const response = await apiClient<{
        success: boolean;
        message: string;
        data: User;
    }>("/auth/me", {
        method: "GET",
        auth: true,
    });

    return response.data;
}