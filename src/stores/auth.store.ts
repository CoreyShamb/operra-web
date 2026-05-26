"use client";

import { create } from "zustand";
import { getCurrentUser, loginUser, registerUser } from "@/lib/api/auth";
import { getToken, removeToken, setToken } from "@/lib/auth/token";
import type { LoginInput, RegisterInput, User } from "@/types/auth";

type AuthState = {
    user: User | null;
    token: string | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    error: string | null;

    login: (input: LoginInput) => Promise<void>;
    register: (input: RegisterInput) => Promise<void>;
    loadUser: () => Promise<void>;
    logout: () => void;
    clearError: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    token: null,
    isLoading: false,
    isAuthenticated: false,
    error: null,

    login: async (input) => {
        try {
            set({ isLoading: true, error: null });

            const response = await loginUser(input);

            setToken(response.token);

            set({
                user: response.user,
                token: response.token,
                isAuthenticated: true,
                isLoading: false,
            });
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : "Login failed",
                isLoading: false,
            });
        }
    },

    register: async (input) => {
        try {
            set({ isLoading: true, error: null });

            const response = await registerUser(input);

            setToken(response.token);

            set({
                user: response.user,
                token: response.token,
                isAuthenticated: true,
                isLoading: false,
            });
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : "Registration failed",
                isLoading: false,
            });
        }
    },

    loadUser: async () => {
        try {
            const token = getToken();

            if (!token) {
                set({
                    user: null,
                    token: null,
                    isAuthenticated: false,
                });
                return;
            }

            set({ isLoading: true, error: null });

            const user = await getCurrentUser();

            set({
                user,
                token,
                isAuthenticated: true,
                isLoading: false,
            });
        } catch {
            removeToken();

            set({
                user: null,
                token: null,
                isAuthenticated: false,
                isLoading: false,
            });
        }
    },

    logout: () => {
        removeToken();

        set({
            user: null,
            token: null,
            isAuthenticated: false,
            error: null,
        });
    },

    clearError: () => {
        set({ error: null });
    },
}));