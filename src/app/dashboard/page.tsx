"use client";

import { useAuthStore } from "@/stores/auth.store";

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Operra Dashboard</h1>
            <p className="mt-2 text-sm text-slate-400">
              Welcome back{user?.name ? `, ${user.name}` : ""}.
            </p>
          </div>

          <button
            onClick={logout}
            className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-300 hover:bg-white/10"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-slate-400">API Requests</p>
            <h2 className="mt-3 text-3xl font-semibold">0</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-slate-400">Active API Keys</p>
            <h2 className="mt-3 text-3xl font-semibold">0</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-slate-400">Current Plan</p>
            <h2 className="mt-3 text-3xl font-semibold">Free</h2>
          </div>
        </div>
      </div>
    </main>
  );
}