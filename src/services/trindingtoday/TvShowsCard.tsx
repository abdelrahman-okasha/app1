
import { Result } from "@/app/types/tvshow";
import {
  Card,
 
} from "@/components/ui/card"
import Link from "next/link";

export function TvMoviceCard({ item, imageUrl }: { item: Result; imageUrl: string }) {
   
 return (
 
  <Card className="relative h-full gap-3 overflow-hidden pt-0">
   <Link href={`/filmeDetailes/${item.id}`}>
    <img
      src={`${imageUrl}${item.poster_path}`}
      alt={item.name}
      className="aspect-video w-full object-cover"
    />
    <h3 className="line-clamp-1 p-4 text-2xl px-3 font-semibold">{item.name}</h3>
    <div className="mt-auto flex items-center justify-between px-3 pb-3 text-sm">
      
      <span className=" text-red-300">2h 26m</span>
      <span className=" text-gray-400">{item.first_air_date === "tv" ? "TV Series" : "Movie"}</span>
    </div></Link>
  </Card>

)
}
