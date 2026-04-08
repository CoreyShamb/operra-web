export default function Navbar() {
    return (
        <nav className="site-nav">
            <div className="site-nav-inner">
                <a href="/" className="brand">
                    Operra
                </a>

                <div className="site-nav-links">
                    <a href="/pricing">Pricing</a>
                    <a href="/docs">Docs</a>
                    <a href="/login">Login</a>
                    <a href="/signup" className="btn-primary">
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    );
}