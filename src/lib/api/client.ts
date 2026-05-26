import { API_BASE_URL } from "@/config/api";
import { getToken } from "@/lib/auth/token";

type RequestOptions = RequestInit & {
    auth?: boolean;
};

export async function apiClient<T>(
    endpoint: string,
    options: RequestOptions = {}
): Promise<T> {
    const { auth = true, headers, ...rest } = options;

    const token = getToken();

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...rest,
        headers: {
            "Content-Type": "application/json",
            ...(auth && token ? { Authorization: `Bearer ${token}` } : {}),
            ...headers,
        },
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
        throw new Error(data?.message || data?.error || "API request failed");
    }

    return data as T;
}
