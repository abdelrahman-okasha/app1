import { GetWatchList } from "@/services/addTowatchList/addTowatchList";

export default async function Watchlist() {
  const data = await GetWatchList();

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        My Watchlist
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {data.results?.map((movie: any) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-lg"
            />

            <h2 className="mt-2 font-semibold">
              {movie.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}