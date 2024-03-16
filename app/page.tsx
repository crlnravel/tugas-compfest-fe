import {Navigation} from "@/app/Components/Navigation";
import {FoodsCarousel} from "@/app/Components/FoodsCarousel";
import {FoodCatalog} from "@/app/Components/FoodCatalog";

export default function Home() {


  return (
      <main className="">
          <Navigation>
              <FoodsCarousel />
              <h3 className="p-4 px-8 text-2xl text-left block w-full font-semibold">
                  Foods
              </h3>
              <FoodCatalog />
          </Navigation>
      </main>
  );
}
