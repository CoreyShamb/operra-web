import { NextResponse } from "next/server";

type SignupPayload = {
    name: string;
    email: string;
    company?: string;
    password: string;
    plan: string;
};

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as Partial<SignupPayload>;

        const name = body.name?.trim();
        const email = body.email?.trim().toLowerCase();
        const company = body.company?.trim() || "";
        const password = body.password;
        const plan = body.plan?.trim().toLowerCase() || "free";

        if (!name || !email || !password) {
            return NextResponse.json(
                { error: "Name, email, and password are required." },
                { status: 400 }
            );
        }

        const apiUrl = process.env.OPERRA_API_URL;

        if (!apiUrl) {
            return NextResponse.json(
                { error: "Server configuration error: OPERRA_API_URL is missing." },
                { status: 500 }
            );
        }

        const response = await fetch(`${apiUrl}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
                company,
                plan,
            }),
            cache: "no-store",
        });

        const data = await response.json().catch(() => null);

        if (!response.ok) {
            return NextResponse.json(
                {
                    error: data?.error || data?.message || "Signup failed.",
                },
                { status: response.status }
            );
        }

        return NextResponse.json(
            {
                message: "Account created successfully.",
                data,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Signup route error:", error);

        return NextResponse.json(
            { error: "Something went wrong while creating the account." },
            { status: 500 }
        );
    }
}