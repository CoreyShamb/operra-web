export default function PricingPage() {
    const plans = [
        {
            name: "Starter",
            price: "$19",
            description: "For early-stage projects validating usage and API demand.",
            features: [
                "1 organization",
                "API key management",
                "Basic analytics",
                "Rate limiting",
                "Email support",
            ],
            cta: "Start Starter",
            featured: false,
        },
        {
            name: "Growth",
            price: "$49",
            description: "For growing SaaS products that need visibility and control.",
            features: [
                "Everything in Starter",
                "Advanced usage analytics",
                "Higher request limits",
                "Organization controls",
                "Priority support",
            ],
            cta: "Start Growth",
            featured: true,
        },
        {
            name: "Business",
            price: "$99",
            description: "For teams operating production APIs at a larger scale.",
            features: [
                "Everything in Growth",
                "Enhanced reporting",
                "Higher scale limits",
                "Team access workflows",
                "Premium support",
            ],
            cta: "Start Business",
            featured: false,
        },
        {
            name: "Professional",
            price: "$199",
            description: "For advanced platforms and multi-product API operations.",
            features: [
                "Everything in Business",
                "Multi-team support",
                "Operational controls",
                "Custom onboarding",
                "Dedicated support",
            ],
            cta: "Contact Sales",
            featured: false,
        },
    ];

    return (
        <main className="section-padding">
            <div className="container-shell">
                <div className="section-heading">
                    <span className="section-eyebrow">Pricing</span>
                    <h1 className="section-title">Simple pricing for modern API teams</h1>
                    <p className="section-description">
                        Start with a plan that fits your current stage, then scale into more
                        advanced controls and infrastructure as your platform grows.
                    </p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gap: "24px",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    }}
                >
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className="feature-card"
                            style={{
                                borderColor: plan.featured
                                    ? "rgba(255,255,255,0.22)"
                                    : "rgba(255,255,255,0.10)",
                                transform: plan.featured ? "translateY(-4px)" : "none",
                            }}
                        >
                            <div style={{ marginBottom: "20px" }}>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        gap: "12px",
                                        marginBottom: "10px",
                                    }}
                                >
                                    <h2 style={{ margin: 0, fontSize: "1.35rem", fontWeight: 700 }}>
                                        {plan.name}
                                    </h2>
                                    {plan.featured && (
                                        <span
                                            style={{
                                                fontSize: "0.75rem",
                                                padding: "6px 10px",
                                                borderRadius: "999px",
                                                border: "1px solid rgba(255,255,255,0.12)",
                                                color: "#d4d4d8",
                                            }}
                                        >
                                            Most Popular
                                        </span>
                                    )}
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "baseline",
                                        gap: "6px",
                                        marginBottom: "10px",
                                    }}
                                >
                                    <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                                        {plan.price}
                                    </span>
                                    <span style={{ color: "#a1a1aa" }}>/mo</span>
                                </div>

                                <p style={{ margin: 0, color: "#a1a1aa", lineHeight: 1.7 }}>
                                    {plan.description}
                                </p>
                            </div>

                            <div style={{ marginBottom: "24px" }}>
                                <ul
                                    style={{
                                        listStyle: "none",
                                        padding: 0,
                                        margin: 0,
                                        display: "grid",
                                        gap: "12px",
                                        color: "#d4d4d8",
                                    }}
                                >
                                    {plan.features.map((feature) => (
                                        <li key={feature}>• {feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href="/signup"
                                className={plan.featured ? "btn-primary" : "btn-secondary"}
                                style={{ width: "100%" }}
                            >
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}