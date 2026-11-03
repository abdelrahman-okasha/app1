export default async function FilmDetails({params,}: {params: Promise<{ id: string }>;}) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.API}/movie/${id}?language=en-US&api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  return (
    <div className="container mx-auto flex flex-col gap-6 px-4 pt-8  md:flex-row md:gap-8 text-white">
      <img
        className="w-full max-w-xs self-center rounded-xl md:w-72 md:self-start"
        src={`${process.env.IMAGE_URL}${movie.poster_path}`}
        alt={movie.title}
      />

      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">{movie.title}</h1>
        <p className="mt-2 text-gray-400">
          {movie.release_date?.slice(0, 4)} • {movie.runtime} min • ★{" "}
          {movie.vote_average?.toFixed(1)}
        </p>
        <p className="mt-4 max-w-xl">{movie.overview}</p>
      </div>
    </div>
  );
}