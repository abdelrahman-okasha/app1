import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b0c10] pb-6 pt-12 text-sm text-rose-100/80">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
     
          <div>
            <h2 className="text-lg font-bold text-white">CINEMORA</h2>
            <p className="mt-4 max-w-md leading-relaxed">
              The ultimate cinematic catalog and discovery terminal for
              cinephiles and television enthusiasts. Explore trends, ratings,
              and curations powered by comprehensive global metadata.
            </p>

            <div className="mt-6 max-w-md rounded-xl bg-neutral-900 p-4 text-xs leading-relaxed">
              <span className="font-bold text-yellow-400">Notice:</span> Powered
              by TMDB API. This product uses the TMDB API but is not endorsed or
              certified by TMDB.
            </div>
          </div>

        
          <div>
            <h3 className="mb-4 text-base font-bold text-white">Discover</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white">Trending Cinema</Link></li>
              <li><Link href="#" className="hover:text-white">Critically Acclaimed TV</Link></li>
              <li><Link href="#" className="hover:text-white">Upcoming Releases</Link></li>
              <li><Link href="#" className="hover:text-white">Curated Collections</Link></li>
              <li><Link href="#" className="hover:text-white">Box Office Leaders</Link></li>
            </ul>
          </div>

        
          <div>
            <h3 className="mb-4 text-base font-bold text-white">Architecture</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white">React &amp; TMDB Exploration</Link></li>
              <li><Link href="#" className="hover:text-white">Design System Specs</Link></li>
              <li><Link href="#" className="hover:text-white">Metadata Guidelines</Link></li>
              <li><Link href="#" className="hover:text-white">Keyboard Shortcut Map</Link></li>
            </ul>
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="mt-12 flex flex-col gap-4 text-xs md:flex-row md:items-center md:justify-between">
          <p>© 2025 CINEMORA. Built for React &amp; TMDB exploration.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">API Integration</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}