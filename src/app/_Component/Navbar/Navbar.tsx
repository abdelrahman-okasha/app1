import { Content } from 'next/font/google'
import React from 'react'

export default function Navbar() {
    const path =[
        {href:'/' , content:'Home'},
        {href:'/movies' , content:'Movies'},
        {href:'/tv-showes' , content:'TV Showes'},
        {href:'/genres' , content:'Genres'},
        {href:'/watchlist' , content:'Watch List'}
    ]
  return <>

      <nav className="bg-black  p-4 text-white ">
      <div className=" mx-auto p-4 flex flex-nowrap items-center justify-between gap-6">
        {/* اللوجو */}
        <a className="flex items-center gap-3 shrink-0" href="/">
          <div className="w-12 h-12 grid place-items-center bg-neutral-900 border border-neutral-800 rounded-xl">
            <svg viewBox="0 0 48 48" width={28} height={28} fill="none" stroke="#ef4444" strokeWidth="2.5">
              <path d="M24 4 L44 24 L24 44 L4 24 Z" strokeLinejoin="round" />
              <circle cx={24} cy={24} r={7} />
              <circle cx={24} cy={24} r="2.5" fill="#ef4444" stroke="none" />
              <path d="M24 10 V17 M24 31 V38 M10 24 H17 M31 24 H38" strokeLinecap="round" />
            </svg>
          </div>

          <div>
            <h1 className="flex items-end text-2xl font-bold tracking-[0.25em] leading-none">
              CINEMORA
              <span className="inline-block w-1.5 h-1.5 mb-1 ms-1 bg-red-500 rounded-full" />
            </h1>
            <p className="mt-1.5 text-[11px] font-semibold tracking-[0.3em] text-gray-400">
              TMDB DISCOVERY
            </p>
          </div>

          {/* الاسم المكرر */}
          <span className="ms-4 text-xl font-semibold flex items-end">
            CINEMORA
            
          </span>
        </a>

        {/* اللينكات */}
        
        <ul className="hidden md:flex items-center gap-8 font-medium">
            {path.map((elem)=> {return  <li>
            <a href={elem.href} className="text-red-400" aria-current="page">{elem.content}</a>
          </li> } )}
         
         
        </ul>

        {/* البحث */}
       <div className=' flex items-center gap-3'>
         <div className="relative hidden md:block shrink-0">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search"
            placeholder="Search"
            className="block w-full ps-9 pe-3 py-2.5 bg-neutral-900 border border-neutral-800 text-white text-sm rounded-lg placeholder:text-gray-400 focus:outline-none focus:border-white"
          />
        </div>

        <div>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
</svg>


        </div>
  <div className="flex items-center py-3  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  <button type="button" className="flex text-sm bg-neutral-primary rounded-full md:me-0 focus:ring-4 focus:ring-neutral-tertiary" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
    <span className="sr-only">Open user menu</span>
    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="user photo" />
  </button>
  {/* Dropdown menu */}
  <div className="z-50 gap-3 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44" id="user-dropdown">
    <div className="px-4 text-sm border-b border-default">
      <span className="block text-heading font-medium">Joseph McFall</span>
      <span className="block text-body truncate">name@flowbite.com</span>
    </div>
  </div></div>



        
       
       </div>
      </div>
    </nav>

  







  
  
  
  </>
}
