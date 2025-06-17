export default function HomePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">Welcome to Our App</h1>
        <p className="text-lg text-gray-600 mb-8">
          Start building your journey. Sign in or create an account to continue.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/sign-in"
            className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-900 transition"
          >
            Sign In
          </a>
          <a
            href="/sign-up"
            className="px-6 py-3 rounded-lg border border-black text-black hover:bg-gray-100 transition"
          >
            Sign Up
          </a>
        </div>
      </div>
    </main>
  );
}