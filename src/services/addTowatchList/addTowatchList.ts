'use server'
export async function AddTowatchList({media_id,media_type}: {media_id: number;media_type: string;
}){


    const response = await fetch(`${process.env.API}/account/${process.env.TMDB_ACCOUNT_ID}/watchlist?session_id=${process.env.TMDB_SESSION_ID}`,{
        method:'POST',
            headers: {
        accept: "application/json",
        "content-type": "application/json",
         Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
      body: JSON.stringify({media_type,media_id, watchlist: true,}),
    })
    
    const payload = await response.json()
    console.log(payload)
    return payload


}

export async function GetWatchList() {
  const response = await fetch(
    `${process.env.API}/account/${process.env.TMDB_ACCOUNT_ID}/watchlist/movies?session_id=${process.env.TMDB_SESSION_ID}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
      cache: "no-store",
    }
  );

  const payload = await response.json();
  console.log(payload);

  return payload;
}