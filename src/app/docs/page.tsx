export default function DocsPage() {
    const sections = [
        "Authentication",
        "Organizations",
        "API Keys",
        "Rate Limiting",
        "Usage Analytics",
        "Billing",
    ];

    return (
        <main className="section-padding">
            <div className="container-shell">
                <div className="section-heading">
                    <span className="section-eyebrow">Documentation</span>
                    <h1 className="section-title">Developer docs for the Operra platform</h1>
                    <p className="section-description">
                        Explore the core building blocks for integrating authentication,
                        managing API access, monitoring usage, and scaling API operations.
                    </p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gap: "24px",
                        gridTemplateColumns: "280px 1fr",
                    }}
                >
                    <div className="info-card">
                        <h3>Sections</h3>
                        <div style={{ display: "grid", gap: "12px", marginTop: "16px" }}>
                            {sections.map((item) => (
                                <a key={item} href="#" style={{ color: "#d4d4d8" }}>
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="info-card">
                        <h3>Getting Started</h3>
                        <p>
                            Operra provides API infrastructure capabilities for teams building,
                            securing, and scaling modern API products.
                        </p>

                        <div style={{ marginTop: "24px" }}>
                            <pre
                                style={{
                                    overflowX: "auto",
                                    padding: "20px",
                                    borderRadius: "16px",
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    color: "#f4f4f5",
                                }}
                            >
                                {`curl -X GET "https://api.operra.com/v1/organizations" \
  -H "Authorization: Bearer op_live_xxxxx"`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}