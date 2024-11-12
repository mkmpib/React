import React, { useEffect, useLayoutEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div class="homeb">
      {/* carousel */}
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-01/25/full/1706179620-803.png"
              class="d-block w-100 p-5"
              alt="..."
              style={{ height: "600px" }}
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.motorbeam.com/wp-content/uploads/Hero-Karizma-XMR.jpg"
              class=" w-100  p-5"
              alt="..."
              style={{ height: "600px" }}
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://bd.gaadicdn.com/processedimages/hero/400cc-bike/source/400cc-bike65afdf9b2a561.jpg"
              class=" w-100  p-5"
              alt="..."
              style={{ height: "600px" }}
            />
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* title */}
      <div className="title">Explore Our Product</div>
      {/* second */}
      <div class="column">
        <div class="col1" data-aos="zoom-out">
          <img
            src="https://www.heromotocorp.com/content/dam/hero-commerce/in/en/products/performance/content-fragments/xtreme-160r-4v/assets/price-section/x160r-4v-price.png"
            alt=""
          />
        </div>
        <div class="col2">
          <h2>Hero Xtreme 160R 4V</h2>
          <h4>Specification</h4>
          <p>
            Price: Hero Xtreme 160R 4V price for its variant - Xtreme 160R 4V
            Double Disc starts at Rs. 1,28,494. The price for the other variants
            - Xtreme 160R 4V Double Disc Connected, Xtreme 160R 4V Premium and
            Xtreme 160R 4V Premium [2024] are Rs. 1,33,968, Rs. 1,37,652 and Rs.
            1,39,601. The mentioned Xtreme 160R 4V prices are the average
            ex-showroom. Hero Xtreme 160R 4V is a street bike available in 4
            variants and 5 colours. The Hero Xtreme 160R 4V is powered by
            163.2cc BS6 engine which develops a power of 16.6 bhp and a torque
            of 14.6 Nm. With both front and rear disc brakes, Hero Xtreme 160R
            4V comes up with anti-locking braking system. This Xtreme 160R 4V
            bike weighs 145 kg and has a fuel tank capacity of 12 liters. The
            Xtreme 160R 4V is a premium commuter by Hero MotoCorp. With a
            four-valve engine, it is a more performance-oriented version of the
            standard Xtreme 160R which gets two valves.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      {/* third */}
      <div class="column">
        <div class="col1" data-aos="zoom-out">
          <img
            src="https://www.heromotocorp.com/content/dam/hero-aem-website/in/en-in/premia/acja/acja/fly-out/Mavrick-matte-fly-out.png"
            alt=""
          />
        </div>
        <div class="col2">
          <h2>Hero Mavrick 440</h2>
          <h4>Specification</h4>
          <p>
            Price: Hero Mavrick 440 price for its variant - Mavrick 440 Base
            starts at Rs. 1,99,001. The price for the other variants - Mavrick
            440 Mid and Mavrick 440 Top are Rs. 2,14,001 and Rs. 2,24,001. The
            mentioned Mavrick 440 prices are the average ex-showroom. Hero
            Mavrick 440 is a street bike available in 3 variants and 5 colours.
            The Hero Mavrick 440 is powered by 440cc BS6 engine which develops a
            power of 27 bhp and a torque of 36 Nm. With both front and rear disc
            brakes, Hero Mavrick 440 comes up with anti-locking braking system.
            This Mavrick 440 bike weighs 191 kg and has a fuel tank capacity of
            13.5 liters. The Mavrick 440 is Hero’s latest and most powerful
            motorcycle so far. It is based on the Harley-Davidson X440 and is
            offered in three variants – base, mid, and top.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      {/* Fourth */}
      <div class="column">
        <div class="col1" data-aos="zoom-out">
          <img
            src="https://www.heromotocorp.com/content/dam/hero-aem-website/in/en-in/premia/acaa/fly-out-menu/Karizma-bike-flyout-menu.png"
            alt=""
          />
        </div>
        <div class="col2">
          <h2>Hero Krizma 210</h2>
          <h4>Specification</h4>
          <p>
            Price: Hero Karizma XMR price for its variant - Karizma XMR Standard
            starts at Rs. 1,79,925. The mentioned Karizma XMR price is the
            average ex-showroom. Hero Karizma XMR is a bike available in only 1
            variant and 3 colours. The Hero Karizma XMR is powered by 210cc BS6
            engine which develops a power of 25.15 bhp and a torque of 20.4 Nm.
            With both front and rear disc brakes, Hero Karizma XMR comes up with
            anti-locking braking system. This Karizma XMR bike weighs 163.5 kg
            and has a fuel tank capacity of 11 liters. The Karizma XMR 210 is
            Hero Motocorp’s latest 200cc offering and its introductory price is
            set at Rs. 1.73 lakh (ex-showroom, Delhi). It is available in three
            paint schemes – Iconic Yellow, Turbo Red, and Matte Phantom Black.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
