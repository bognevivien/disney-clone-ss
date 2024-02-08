import MoviesCaroussel from "@/components/MoviesCaroussel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1 className="">lets build disney</h1>
      {/* CarouselBannerWrapper */}

      <div className="flex flex-col space-y-2 xl:-mt-48">
        {/* MoviesCarousel movies={...}  title = */}
        <MoviesCaroussel movies={[]} title="testing"/>
        {/* MoviesCarousel movies={...}  title = */}
        {/* MoviesCarousel movies={...}  title = */}
      </div>
    </main>
  );
}
