import React, { useEffect, useLayoutEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Bikes = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="box">
        <div className="practicle">
          <h1>Varieties Of Bikes Acoording your Needs</h1>
          <li>Practical Bikes</li>
          <div className="bike1">
            {/* 1st */}
            <div class="card" data-aos="zoom-out">
              <img
                src="https://assets.otocapital.in/prod/black-with-silver-hero-splendorplus-right-side-view.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            {/* 2nd */}
            <div class="card" data-aos="zoom-out">
              <img
                src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/127607/splendor-plus-xtec-right-front-three-quarter.png?isig=0"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            {/* third */}
            <div class="card" data-aos="zoom-out">
              <img
                src="https://imgd.aeplcdn.com/370x208/n/cw/ec/150203/hero-hf-deluxe-right-front-three-quarter1.jpeg?isig=0&q=80"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* executive */}
        <div className="practicle">
          <li>Execultive Bikes</li>
          <div className="bike1">
            {/* 1st */}
            <div class="card" data-aos="zoom-out">
              <img
                src="https://static.autox.com/uploads/bikes/2017/05/1486029888-hero-glamour.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            {/* 2nd */}
            <div class="card" data-aos="zoom-out">
              <img
                src="https://images.carandbike.com/bike-images/colors/hero/passion-plus/hero-passion-plus-black-heavy-grey.jpg?v=1686717055"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            {/* third */}
            <div class="card" data-aos="zoom-out">
              <img
                src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/49457/super-splendor-right-side-view-2.png?isig=0"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Performance */}
        <div className="practicle">
          <li>Performance Bikes</li>
          <div className="bike1">
            {/* 1st */}
            <div class="card" data-aos="zoom-out">
              <img
                src="https://assets.otocapital.in/prod/pearl-silver-white-hero-xtreme-right-side-view.jpeg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            {/* 2nd */}
            <div class="card" data-aos="zoom-out">
              <img
                src="https://www.heromotocorp.com/content/dam/hero-dam-assets/global/np/products/xpulse-200-4v/colors-360-degree-images/blue-black/1.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            {/* third */}
            <div class="card" data-aos="zoom-out">
              <img
                src="https://imgd.aeplcdn.com/664x374/bw/models/hero-xtreme-200s.jpg?20190305130503&q=80"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bikes;
