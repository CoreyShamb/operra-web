export default function FeatureGrid() {
    const features = [
        {
            title: "API Key Management",
            description:
                "Create, rotate, and revoke API keys with organization-level control.",
        },
        {
            title: "Rate Limiting",
            description:
                "Protect your platform with configurable request limits and usage controls.",
        },
        {
            title: "Usage Analytics",
            description:
                "Track requests, endpoints, response trends, and platform activity in real time.",
        },
        {
            title: "Developer Infrastructure",
            description:
                "Give engineering teams the tools they need to secure and scale API products.",
        },
    ];

    return (
        <section className="section-padding">
            <div className="container-shell">
                <div className="section-heading">
                    <span className="section-eyebrow">Core Capabilities</span>
                    <h2 className="section-title">
                        Everything you need to operate APIs with confidence
                    </h2>
                </div>

                <div className="card-grid features-4">
                    {features.map((feature) => (
                        <div key={feature.title} className="feature-card">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}