"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Fav = {
  id: number;
  title: string;
  poster_path: string;
  media_type: "movie" | "tv";
};

type Ctx = {
  favorites: Fav[];
  loaded: boolean;
  isFavorite: (id: number, media_type: string) => boolean;
  toggleFavorite: (item: Fav) => void;
};

const FavoritesContext = createContext<Ctx | null>(null);
const KEY = "favorites";

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Fav[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) setFavorites(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(KEY, JSON.stringify(favorites));
  }, [favorites, loaded]);

  const isFavorite = (id: number, media_type: string) =>
    favorites.some((m) => m.id === id && m.media_type === media_type);

  const toggleFavorite = (item: Fav) =>
    setFavorites((prev) =>
      prev.some((m) => m.id === item.id && m.media_type === item.media_type)
        ? prev.filter((m) => !(m.id === item.id && m.media_type === item.media_type))
        : [...prev, item]
    );

  return (
    <FavoritesContext.Provider value={{ favorites, loaded, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used inside FavoritesProvider");
  return ctx;
}