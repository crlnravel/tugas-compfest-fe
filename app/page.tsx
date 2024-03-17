import {Navigation} from "@/app/Components/Navigation";
import {FoodsCarousel} from "@/app/Components/FoodsCarousel";
import {FoodCatalog} from "@/app/Components/FoodCatalog";
import {Suspense} from "react";

export default function Home() {

  return (
      <main className="bg-[#FFFFFF55] backdrop-blur-xl">
          <Navigation>
              <FoodsCarousel />
              <h3 className="p-4 md:px-8 lg:px-12 text-2xl text-left block w-full font-semibold">
                  Foods
              </h3>
              <Suspense>
                  <FoodCatalog />
              </Suspense>
          </Navigation>
      </main>
  );
}
