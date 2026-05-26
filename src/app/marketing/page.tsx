import Link from "next/link";

export default function MarketingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white">
      <div className="max-w-2xl px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight">Operra</h1>
        <p className="mt-4 text-lg text-slate-400">
          Developer infrastructure for modern SaaS teams.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/public/login"
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold hover:bg-blue-500 transition"
          >
            Sign in
          </Link>
          <Link
            href="/public/register"
            className="rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold hover:bg-white/5 transition"
          >
            Get started
          </Link>
        </div>
      </div>
    </main>
  );
}
