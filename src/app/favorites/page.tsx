"use client";

import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";

const IMG = "https://image.tmdb.org/t/p/w500";

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-black px-4 text-center text-white">
        <h1 className="text-2xl text-red-600 font-bold">No favorites yet</h1>
    
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-2xl font-bold sm:text-3xl">My Favorites <span className="text-red-500">({favorites.length})</span></h1>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {favorites.map((item: any) => {
            const href = item.media_type === "tv" ? `/tv/${item.id}` : `/movie/${item.id}`;

            return (
              <div
                key={`${item.media_type}-${item.id}`}
                className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900"
              >
                <Link href={href}>
                  {item.poster_path ? (
                    <img
                      src={`${IMG}${item.poster_path}`}
                      alt={item.title}
                      className="aspect-[2/3] w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="grid aspect-[2/3] w-full place-items-center bg-neutral-800 text-sm text-gray-400">
                      No Image
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2 p-3">
                    <h2 className="line-clamp-1 text-sm font-semibold">
                      {item.title}
                    </h2>
                    <span className="shrink-0 rounded bg-neutral-800 px-1.5 py-0.5 text-[10px] font-medium uppercase text-gray-300">
                      {item.media_type === "tv" ? "TV" : "Movie"}
                    </span>
                  </div>
                </Link>

                <button
                  type="button" aria-label="Remove from favorites" onClick={() => toggleFavorite(item)}
                  className="absolute end-2 top-2 grid size-8 place-items-center rounded-full bg-black 80 text-red-500 transition hover:bg-red-600 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="size-4" >
                    <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}