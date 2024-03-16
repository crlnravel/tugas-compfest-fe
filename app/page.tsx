import {Navigation} from "@/app/Components/Navigation";

export default function Home() {


  return (
      <main className="">
          <Navigation>
              <div className="carousel rounded-box space-x-4">
                  <div className="carousel-item">

                  </div>
                  <div className="carousel-item">
                      <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger"/>
                  </div>
                  <div className="carousel-item">
                      <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger"/>
                  </div>
                  <div className="carousel-item">
                      <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger"/>
                  </div>
                  <div className="carousel-item">
                      <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger"/>
                  </div>
                  <div className="carousel-item">
                      <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger"/>
                  </div>
                  <div className="carousel-item">
                      <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger"/>
                  </div>
              </div>
              <h3 className="text-2xl font-semibold">
                  Foods
              </h3>
          </Navigation>
      </main>
  );
}
