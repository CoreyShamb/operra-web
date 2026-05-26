"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/stores/auth.store";

type AuthProviderProps = {
    children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
    const loadUser = useAuthStore((state) => state.loadUser);

    useEffect(() => {
        loadUser();
    }, [loadUser]);

    return <>{children}</>;
}

