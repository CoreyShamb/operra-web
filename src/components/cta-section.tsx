export default function CtaSection() {
    return (
        <section className="section-padding">
            <div className="container-shell">
                <div className="cta-card">
                    <span className="section-eyebrow">Get Started</span>
                    <h2 className="section-title">Start building on Operra</h2>
                    <p
                        className="section-description"
                        style={{ maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}
                    >
                        Launch faster with a platform designed to help you secure, monitor,
                        and scale your APIs.
                    </p>

                    <div className="button-row" style={{ justifyContent: "center", marginTop: "32px" }}>
                        <a href="/signup" className="btn-primary">
                            Create Account
                        </a>
                        <a href="/docs" className="btn-secondary">
                            Read Documentation
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}