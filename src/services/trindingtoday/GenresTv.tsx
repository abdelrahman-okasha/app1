
import { Result } from "@/app/types/genres";
import {
  Card,
 
} from "@/components/ui/card"
import Link from "next/link";
import AddFov from "@/app/_Component/addFov/addFov";
import AddBtn from "@/app/_Component/addBtn/addBtn";

export async function GenresTv({ item, imageUrl }: { item: Result; imageUrl: string }) {
  
   
 return (
 
  <Card className="relative h-full gap-3 overflow-hidden pt-0">
   <Link href={`/filmeDetailes/${item.id}`}>
    <img
      src={`${imageUrl}${item.poster_path}`}
      alt={item.title}
      className="aspect-[2/3] w-full object-cover"
    />
    
      {/* <span className=" text-gray-400">{item.popularity === "tv" ? "TV Series" : "Movie"}</span> */}

    
   </Link>
    <h3 className="line-clamp-1 p-4 text-2xl px-3 font-semibold">{item.title}</h3>
    <div className="mt-auto flex items-center justify-between px-3 pb-3 text-sm">
      
      <div className="flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

        <span className=" text-red-500">2h 26m</span>
      </div>

<AddFov item={item}/>

    </div>
      <AddBtn item={item}/>
  </Card>

)
}
