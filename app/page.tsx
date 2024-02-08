import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCaroussel from "@/components/MoviesCaroussel";
import { Button } from "@/components/ui/button";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";
import Image from "next/image";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topratedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="">
      <CarouselBannerWrapper />
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCaroussel movies={upcomingMovies} title="Up Coming" />
        <MoviesCaroussel movies={topratedMovies} title="Top Rated" />
        <MoviesCaroussel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
