import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-700">404</h1>
        <p className="mt-4 text-slate-400">Page not found.</p>
        <Link
          href="/"
          className="mt-6 inline-block text-sm text-blue-400 hover:text-blue-300"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
