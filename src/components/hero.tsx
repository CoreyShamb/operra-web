export default function Hero() {
    return (
        <section className="section-padding">
            <div className="container-shell hero-grid">
                <div>
                    <span className="section-eyebrow">API Infrastructure Platform</span>
                    <h1 className="section-title" style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}>
                        Build, Secure, and Scale Your APIs
                    </h1>
                    <p className="section-description" style={{ maxWidth: "560px" }}>
                        Operra gives modern teams the infrastructure layer to manage API access,
                        monitor usage, enforce limits, and operate with confidence.
                    </p>

                    <div className="button-row" style={{ marginTop: "32px" }}>
                        <a href="/signup" className="btn-primary">
                            Get Started
                        </a>
                        <a href="/docs" className="btn-secondary">
                            View Docs
                        </a>
                    </div>
                </div>

                <div className="info-card">
                    <h3>Platform Snapshot</h3>
                    <p>
                        Centralize API key management, rate limiting, analytics, request
                        visibility, and developer operations in one platform.
                    </p>

                    <div style={{ marginTop: "24px", display: "grid", gap: "16px" }}>
                        <div>
                            <strong>Authentication</strong>
                            <p style={{ marginTop: "6px" }}>Organization-scoped API access and key control.</p>
                        </div>
                        <div>
                            <strong>Analytics</strong>
                            <p style={{ marginTop: "6px" }}>Track endpoints, request volume, and response behavior.</p>
                        </div>
                        <div>
                            <strong>Protection</strong>
                            <p style={{ marginTop: "6px" }}>Enforce usage limits and reduce abuse across your APIs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}