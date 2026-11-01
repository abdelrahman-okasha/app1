import React from 'react'

export default function DashBord() {
  return <>
  {/* dashbord */}
<div className='container mx-auto mt-20   '>
    <div className=' grid grid-cols-4 gap-4 '>
        <div className='  flex items-center bg-neutral-800 ms-3 rounded-xl mt-8 w-fit p-4'>
          <div>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg></div>
<div className=' ps-2'>
    <h1 className='text-2xl text-white'>1,490,260+</h1>
    <h4 className=' text-gray-400'>Title Indexed</h4>
</div>


        </div>
        <div className='  flex items-center bg-neutral-800 ms-3 rounded-xl mt-8 w-fit p-4'>
          <div>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-400">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
</div>
<div className='ps-3'>
    <h1 className='text-2xl text-white'>94.08% Accurate</h1>
    <h4 className=' text-gray-400'>TMDB Weighted Scores</h4>
</div>


        </div>
        <div className='  flex items-center bg-neutral-800 ms-3 rounded-xl mt-8 w-fit p-4'>
          <div>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

</div>
<div className='ps-3'>
    <h1 className='text-2xl text-white'>Horly  sync</h1>
    <h4 className=' text-gray-400'>Globale Box Office & OTT</h4>
</div>


        </div>
        <div className='  flex items-center pe-16 bg-neutral-800 ms-3 rounded-xl mt-8 w-fit p-4'>
          <div>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-300">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>


</div>
<div className='ps-3'>
    <h1 className='text-2xl text-white'>8.4 M Traced</h1>
    <h4 className=' text-gray-400'>CinePhile WashList</h4>
</div>


        </div>  
          </div>
</div>
  </>

}
