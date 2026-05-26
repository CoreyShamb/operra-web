import { apiClient } from "@/lib/api/client";
import { AuthResponse, LoginInput, RegisterInput, User } from "@/types/auth";

export function loginUser(input: LoginInput) {
    return apiClient<AuthResponse>("/auth/login", {
        method: "POST",
        auth: false,
        body: JSON.stringify(input),
    });
}

export function registerUser(input: RegisterInput) {
    return apiClient<AuthResponse>("/auth/register", {
        method: "POST",
        auth: false,
        body: JSON.stringify(input),
    });
}

export function getCurrentUser() {
    return apiClient<User>("/auth/me", {
        method: "GET",
        auth: true,
    });
}
