export default function PlatformSection() {
    return (
        <section className="section-padding">
            <div
                className="container-shell"
                style={{
                    display: "grid",
                    gap: "24px",
                    alignItems: "start",
                }}
            >
                <div className="section-heading" style={{ marginBottom: 0 }}>
                    <span className="section-eyebrow">Platform</span>
                    <h2 className="section-title">
                        Built for modern API products and developer teams
                    </h2>
                    <p className="section-description">
                        Operra helps teams centralize API infrastructure with analytics,
                        security controls, request visibility, and scalable management
                        workflows.
                    </p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gap: "24px",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    }}
                >
                    <div className="info-card">
                        <h3>Visibility</h3>
                        <p>Monitor request flow, endpoint activity, and response patterns.</p>
                    </div>

                    <div className="info-card">
                        <h3>Security</h3>
                        <p>Enforce access controls, authentication, and rate-limiting policies.</p>
                    </div>

                    <div className="info-card">
                        <h3>Scalability</h3>
                        <p>Build a stronger foundation for teams shipping and growing API products.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}