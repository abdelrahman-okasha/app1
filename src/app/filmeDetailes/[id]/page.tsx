export default async function FilmDetails({params,}: {params: Promise<{ id: string }>;}) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.API}/movie/${id}?language=en-US&api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  return (
    <div className="container mx-auto flex gap-8 pt-8 text-white">
      <img
        className="w-72 rounded-xl"
        src={`${process.env.IMAGE_URL}${movie.poster_path}`}
        alt={movie.title}
      />

      <div>
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="mt-2 text-gray-400">
          {movie.release_date?.slice(0, 4)} • {movie.runtime} min • ★{" "}
          {movie.vote_average?.toFixed(1)}
        </p>
        <p className="mt-4 max-w-xl">{movie.overview}</p>
      </div>
    </div>
  );
}