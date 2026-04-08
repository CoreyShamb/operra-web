"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const planLabels: Record<string, string> = {
    free: "Free",
    starter: "Starter",
    growth: "Growth",
    business: "Business",
    professional: "Professional",
};

export default function SignupPage() {
    const searchParams = useSearchParams();
    const selectedPlanKey = useMemo(
        () => (searchParams.get("plan") || "free").toLowerCase(),
        [searchParams]
    );

    const selectedPlan = planLabels[selectedPlanKey] || "Free";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        password: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    function handleChange(
        event: React.ChangeEvent<HTMLInputElement>
    ): void {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> {
        event.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    plan: selectedPlanKey,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data?.error || "Signup failed.");
            }

            setSuccessMessage("Account created successfully.");
            setFormData({
                name: "",
                email: "",
                company: "",
                password: "",
            });

            // Later:
            // window.location.href = "/login";
        } catch (error) {
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong."
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="section-padding">
            <div className="container-shell responsive-two-col">
                <div className="section-heading" style={{ marginBottom: 0 }}>
                    <span className="section-eyebrow">Signup</span>
                    <h1 className="section-title">Create your Operra account</h1>
                    <p className="section-description">
                        Start with the <strong>{selectedPlan}</strong> plan and begin
                        building with Operra.
                    </p>

                    <div className="info-card" style={{ marginTop: "32px" }}>
                        <h3>Selected Plan</h3>
                        <p>
                            You are currently signing up for the{" "}
                            <strong>{selectedPlan}</strong> plan.
                        </p>
                    </div>
                </div>

                <div className="info-card">
                    <h3 style={{ marginBottom: "20px" }}>Account Details</h3>

                    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "16px" }}>
                        <div style={{ display: "grid", gap: "8px" }}>
                            <label htmlFor="name">Full Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                        </div>

                        <div style={{ display: "grid", gap: "8px" }}>
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                        </div>

                        <div style={{ display: "grid", gap: "8px" }}>
                            <label htmlFor="company">Company Name</label>
                            <input
                                id="company"
                                name="company"
                                type="text"
                                placeholder="Enter your company name"
                                value={formData.company}
                                onChange={handleChange}
                                style={inputStyle}
                            />
                        </div>

                        <div style={{ display: "grid", gap: "8px" }}>
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Create a password"
                                value={formData.password}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                        </div>

                        <input type="hidden" name="plan" value={selectedPlanKey} />

                        {errorMessage && (
                            <div
                                style={{
                                    border: "1px solid rgba(239, 68, 68, 0.35)",
                                    background: "rgba(239, 68, 68, 0.08)",
                                    color: "#fca5a5",
                                    borderRadius: "12px",
                                    padding: "12px 14px",
                                    fontSize: "0.95rem",
                                }}
                            >
                                {errorMessage}
                            </div>
                        )}

                        {successMessage && (
                            <div
                                style={{
                                    border: "1px solid rgba(34, 197, 94, 0.35)",
                                    background: "rgba(34, 197, 94, 0.08)",
                                    color: "#86efac",
                                    borderRadius: "12px",
                                    padding: "12px 14px",
                                    fontSize: "0.95rem",
                                }}
                            >
                                {successMessage}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn-primary"
                            style={{ width: "100%", opacity: isSubmitting ? 0.7 : 1 }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Creating Account..." : `Create ${selectedPlan} Account`}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}

const inputStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "48px",
    padding: "0 14px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    color: "#ffffff",
    outline: "none",
};