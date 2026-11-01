import React from 'react'

export default function PartTwo() {
  return <>
  
  
  <div className="container mx-auto mt-20">
  <div className="w-fit bg-gray-400 rounded-2xl ps-2 pe-3">
    <div className="flex items-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-yellow-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
          />
        </svg>
      </div>

      <h4 className="text-yellow-400 pe-1"># 1 TRENDING WORLDWIDE TODAY</h4>

      <div className="flex items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-yellow-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </div>
        <div>
          <h4 className="text-white ps-1"><span className=' text-yellow-300'>8.5</span> TMDB SCORE</h4>
        </div>
      </div>
    </div>
  </div>

  <h1 className=' text-5xl pt-4 font-bold text-white'>DUNE: PART TWO</h1>

  <div className="container mx-auto mt-4 pt-3">
  <div className="flex items-center gap-3 text-sm">
    
    <span className="bg-neutral-800 text-white px-3 py-1 rounded-md">2024</span>

    
    <span className="bg-neutral-800 text-orange-200 px-3 py-1 rounded-md">PG-13</span>

    
    <div className="flex items-center gap-1 text-orange-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4 shrink-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <span>2h 46m</span>
    </div>

    
    <span className="size-1 rounded-full bg-gray-500" />

   
    {["SCI-FI", "ADVENTURE", "DRAMA"].map((genre) => (
      <span
        key={genre}
        className="bg-neutral-800 text-white text-xs font-semibold px-3 py-1 rounded-full"
      >
        {genre}
      </span>
    ))}
  </div>
</div>

<h3 className=' text-orange-300 pt-2'>Paul Atreides unites with Chani and the Fremen while seeking revenge against the</h3>
<h3 className=' text-orange-300'> conspirators who destroyed his family. Facing a choice between the love of his life and the</h3>
<h3 className=' text-orange-300'> fate of the known universe, he endeavors to prevent a terrible future only he can foresee.</h3>

<div className=' flex'>
    <div className=' flex items-center bg-red-500 rounded-xl mt-8 w-fit p-4'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>
<button className=' ps-2 text-white'>Explore Detailes</button>

</div>
<div className=' flex items-center bg-neutral-800 ms-3 rounded-xl mt-8 w-fit p-4'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>

<button className=' ps-2 text-white'>Add To WashList</button>

</div>
<div className=' flex items-center bg-neutral-800 ms-3 rounded-xl mt-8 w-fit p-4'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>

</div>
</div>




</div>




  
  
  </>
}
