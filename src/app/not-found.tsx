import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-black px-4 text-white">
      <div className="flex max-w-lg flex-col items-center text-center">
   

       
        <h1 className="mt-8 text-7xl font-bold tracking-[0.2em] text-red-500 sm:text-8xl">404</h1>

        <h2 className="mt-4 text-xl font-semibold sm:text-2xl">Not Found</h2>


     
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="rounded-lg bg-red-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg transition hover:bg-red-500">Back to Home</Link>

          <Link href="/movies" className="rounded-lg border border-neutral-800 bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-red-500"> Browse Movies</Link>
        </div>
      </div>
    </main>
  );
}