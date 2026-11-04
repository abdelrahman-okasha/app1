'use client'

import { useFavorites } from '@/context/FavoritesContext'

export default function AddFov({ item }: { item: any }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const mediaType = item.media_type ?? 'movie'
  const active = isFavorite(item.id, mediaType)

  return (
    <button
      onClick={() =>
        toggleFavorite({
          id: item.id,
          title: item.title ?? item.name,
          poster_path: item.poster_path,
          media_type: mediaType,
        })
      }
      aria-label="Toggle favorite"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={active ? 'currentColor' : 'none'}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-red-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </button>
  )
}