
import { PopularGenres } from '../types/genres'
import { GenresTv } from '@/services/trindingtoday/GenresTv'



export default async function Genres() {
  const res = await fetch(`${process.env.API}/movie/top_rated?language=en-US&api_key=${process.env.API_KEY}`)
    const {results}: PopularGenres = await res.json()
  return <>
  
    <div className="bg-neutral-800 pt-8   mt-6">
  <div className="container mx-auto flex items-center">
    <div className="w-1.5 h-7 bg-yellow-500 rounded-full shadow-sm shadow-red-500/50"></div>
    <div className=" ps-3">
      <h1 className=" text-2xl text-white">Top Rated All-Time</h1>
      <h3 className=" text-md text-red-400">The greatest cinematic achievements crowned by universal critical consensus.</h3>
    </div>
  </div>
  
</div>


<div className="bg-neutral-800">
    <div className=" container mx-auto pt-8">
     <div className="grid grid-cols-4 gap-4">
  {results.map((item) => (
    <GenresTv key={item.id} item={item} imageUrl={process.env.IMAGE_URL!}/>
  ))}
</div>
  </div>
  </div>

   
  </>
}
