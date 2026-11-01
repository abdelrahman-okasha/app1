import { trnding } from "./trending";
import { TrendingCarousel } from "./TrendingCarousel";

export default async function Trindingtoday() {
  const res = await fetch(
    `${process.env.API}/trending/all/day?language=en-US&api_key=${process.env.API_KEY}`
  );
  const { results }: trnding = await res.json();

  return <>
  <div className="bg-neutral-800">
    <div className=" container mx-auto pt-8">
     <div className="grid grid-cols-4 gap-4">
  {results.map((item) => (
    <TrendingCarousel key={item.id} item={item} imageUrl={process.env.IMAGE_URL!} />
  ))}
</div>
  </div>
  </div>
  

  </>;
}
