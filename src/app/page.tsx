import Image from "next/image";
import PartTwo from "./PartTwo/PartTwo";
import DashBord from "./DashBord/DashBord";
import Trindingtoday from "@/services/trindingtoday/trindingtoday";

export default function Home() {
   
  return <>
<PartTwo/>
<DashBord/>

{/* Trending Today */}

<div className="bg-neutral-800 pt-8   mt-6">
  <div className="container mx-auto flex items-center">
    <div className="w-1.5 h-7 bg-red-600 rounded-full shadow-sm shadow-red-500/50"></div>
    <div className=" ps-3">
      <h1 className=" text-2xl text-white">Trending Today</h1>
      <h3 className=" text-md text-red-400">Movies and Shows ganing massive global traction right now </h3>
    </div>
  </div>
  
</div>

{/* Call Api */}

<Trindingtoday/>

{/*Paul Atreides unites */}

<div className="  container flex  flex-wrap flex-col lg:flex-row px-4 gap-6 lg:items-center lg:justify-between mx-auto pb-15 mt-8 ">
 <div>
   <span className="bg-red-500 font-bold rounded-lg p-2">CINEMORA ENGINE</span>
  <span className="ps-2 text-yellow-500 font-bold">v3.4 Production Pipeline</span>
  <h1 className="pt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">Discover, Log, and Curate Without Distraction</h1>
  <p className="text-red-400  max-w-2xl pt-3 ">Built for cinephiles who value detailed technical metadata, crew credits, aspect ratio <br /> catalogs, and high-fidelity poster art. Create custom lists or sync your personal ratings.</p>
 </div>
 <div className="flex items-center gap-4 ps-10">
 
  <div className="flex items-center gap-3 rounded-xl bg-neutral-800 px-4 py-3">
    <span className="size-3 shrink-0 rounded-full bg-green-500" />
    <div className="text-sm leading-tight">
      <p className="font-bold text-white">TMDB Cluster Online</p>
      <p className="text-orange-300">Avg latency: 42ms</p>
    </div>
  </div>

  <button className="rounded-xl bg-neutral-800 px-6 py-4 font-bold text-white hover:bg-neutral-700">
    Configure Filters
  </button>
  
</div>

</div>


  
  
  </>
}
