import { Card } from "@/components/ui/card";
import { Result } from "./trending";
import Link from "next/link";
import AddFov from "@/app/_Component/addFov/addFov";

export function TrendingCarousel({ item, imageUrl }: { item: Result; imageUrl: string }) {
  const title = item.title ?? item.name;
  const date = item.release_date ?? item.first_air_date;

  return (
    <Card className="relative h-full gap-3 overflow-hidden pt-0">
      {/* القلب فوق الصورة، برّه الـ Link */}
      <div className="absolute right-2 top-2 z-10 rounded-full bg-black/60 p-2 backdrop-blur-sm">
        <AddFov item={item} />
      </div>

      <Link href={`/filmeDetailes/${item.id}`}>
        <img
          src={`${imageUrl}${item.poster_path}`}
          alt={title}
          className="aspect-video w-full object-cover"
        />
        <h3 className="line-clamp-1 p-4 text-2xl px-3 font-semibold">{title}</h3>
        <div className="mt-auto flex items-center justify-between px-3 pb-3 text-sm">
          <span className="text-red-400">{date?.slice(0, 4)}</span>
          <span className="text-red-300">2h 26m</span>
          <span className="text-gray-400">
            {item.media_type === "tv" ? "TV Series" : "Movie"}
          </span>
        </div>
      </Link>
    </Card>
  );
}