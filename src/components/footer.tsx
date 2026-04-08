export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container-shell">
                © {new Date().getFullYear()} Operra. All rights reserved.
            </div>
        </footer>
    );
}