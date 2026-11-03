import React from 'react'
import { PopularResponse } from '../types/movices'
import { MoviceCard } from '@/services/MoviceCard'

export default async function Movies() {
  const res = await fetch(`${process.env.API}/movie/popular?language=en-US&api_key=${process.env.API_KEY}`)
  let {results}:PopularResponse = await res.json()
  return <>
  <div className="bg-neutral-800 pt-8   mt-6">
  <div className="container mx-auto flex items-center">
    <div className="w-1.5 h-7 bg-red-600 rounded-full shadow-sm shadow-red-500/50"></div>
    <div className=" ps-3">
      <h1 className=" text-2xl text-white">Popular Movies</h1>
      <h3 className=" text-md text-red-400">Top-grossing and most tracked theatrical releases of the month </h3>
    </div>
  </div>
  
</div>



  <div className="bg-neutral-800">
    <div className=" container mx-auto pt-8">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {results.map((item) => (
    <MoviceCard key={item.id} item={item} imageUrl={process.env.IMAGE_URL!}/>
  ))}
</div>
  </div>
  </div>



  
  </>
}
