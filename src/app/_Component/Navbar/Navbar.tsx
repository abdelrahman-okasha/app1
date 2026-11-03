"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", content: "Home" },
  { href: "/movies", content: "Movies" },
  { href: "/tv-showes", content: "TV Shows" },
  { href: "/genres", content: "Genres" },
  { href: "/watchlist", content: "Watch List" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
        {/* اللوجو */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl border border-neutral-800 bg-neutral-900 sm:size-12">
            <svg viewBox="0 0 48 48" width={28} height={28} fill="none" stroke="#ef4444" strokeWidth="2.5">
              <path d="M24 4 L44 24 L24 44 L4 24 Z" strokeLinejoin="round" />
              <circle cx={24} cy={24} r={7} />
              <circle cx={24} cy={24} r="2.5" fill="#ef4444" stroke="none" />
              <path d="M24 10 V17 M24 31 V38 M10 24 H17 M31 24 H38" strokeLinecap="round" />
            </svg>
          </div>

          <div>
            <div className="flex items-end text-lg font-bold leading-none tracking-[0.2em] sm:text-2xl sm:tracking-[0.25em]">
              CINEMORA
              <span className="mb-1 ms-1 inline-block size-1.5 rounded-full bg-red-500" />
            </div>
            <p className="mt-1.5 hidden text-[11px] font-semibold tracking-[0.3em] text-gray-400 sm:block">
              TMDB DISCOVERY
            </p>
          </div>
        </Link>

        {/* اللينكات (لابتوب بس) */}
        <ul className="hidden items-center gap-8 font-medium lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-red-400 hover:text-red-300">
                {link.content}
              </Link>
            </li>
          ))}
        </ul>

        {/* الجانب الأيمن */}
        <div className="flex items-center gap-3">
          {/* البحث (لابتوب بس) */}
          <div className="relative hidden shrink-0 lg:block">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <svg className="size-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="block w-56 rounded-lg border border-neutral-800 bg-neutral-900 py-2.5 pe-3 ps-9 text-sm text-white placeholder:text-gray-400 focus:border-white focus:outline-none"
            />
          </div>

          {/* الجرس */}
          <button type="button" aria-label="Notifications" className="shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
            </svg>
          </button>

          {/* زرار القايمة (موبايل وتابلت بس) */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="shrink-0 lg:hidden"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* قايمة الموبايل */}
      {open && (
        <div className="border-t border-neutral-800 px-4 pb-4 lg:hidden">
          <input
            type="text"
            placeholder="Search"
            className="mt-4 block w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2.5 text-sm text-white placeholder:text-gray-400 focus:border-white focus:outline-none"
          />
          <ul className="mt-4 flex flex-col gap-4 font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-red-400 hover:text-red-300"
                >
                  {link.content}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}