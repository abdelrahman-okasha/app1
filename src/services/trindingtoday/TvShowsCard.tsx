import { Result } from "@/app/types/tvshow";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import AddFov from "@/app/_Component/addFov/addFov";

export function TvMoviceCard({ item, imageUrl }: { item: Result; imageUrl: string }) {
  return (
    <Card className="relative h-full gap-3 overflow-hidden pt-0">
      {/* القلب فوق الصورة، برّه الـ Link */}
      <div className="absolute right-2 top-2 z-10 rounded-full bg-black/60 p-2 backdrop-blur-sm">
        <AddFov item={{ ...item, media_type: "tv" }} />
      </div>

      <Link href={`/filmeDetailes/${item.id}`}>
        <img
          src={`${imageUrl}${item.poster_path}`}
          alt={item.name}
          className="aspect-video w-full object-cover"
        />
        <h3 className="line-clamp-1 p-4 text-2xl px-3 font-semibold">{item.name}</h3>
        <div className="mt-auto flex items-center justify-between px-3 pb-3 text-sm">
          <span className="text-red-300">2h 26m</span>
          <span className="text-gray-400">TV Series</span>
        </div>
      </Link>
    </Card>
  );
}