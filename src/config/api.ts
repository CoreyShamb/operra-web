export const API_CONFIG = {
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
    apiVersion: "/api/v1",
};

export const API_BASE_URL = `${API_CONFIG.baseURL}${API_CONFIG.apiVersion}`;
