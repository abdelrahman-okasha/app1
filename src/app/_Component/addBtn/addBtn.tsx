'use client'

import { AddTowatchList } from "@/services/addTowatchList/addTowatchList"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"


export default function AddBtn({item}:{item:any}) {
  
  const {data , isPending , error ,isError , mutate:addWList} = useMutation({
    mutationFn:AddTowatchList,
    onSuccess:(data)=>{
      toast.success(data.status_message)
    },
    onError:(data)=>{
      toast.error(data.message)
    }
  })
  console.log(data)
  
  return <>
    <div className=" container mx-auto flex  justify-center ">
          <button onClick={()=>{addWList({ media_id: item.id,
            media_type: item.media_type ?? "movie",})}} type="button" className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg transition hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 active:scale-95"> Add to Watchlist</button>
   </div>
  </>
}
