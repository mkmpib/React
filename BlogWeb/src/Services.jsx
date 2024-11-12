import React from "react";
import "./App.css";
const Services = () => {
  return (
    <>
      <div className="dabba">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://www.heromotocorp.com/content/dam/hero-aem-website/service-journey-assets/overview/banner/service-01-updated.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.heromotocorp.com/content/dam/hero-aem-website/service-journey-assets/overview/banner/hero-joyride-creative_web-banner.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.heromotocorp.com/content/dam/hero-aem-website/service-journey-assets/overview/banner/Banner_Carousel_2_web.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <hr />
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

        {/* content */}

        <div className="head">We Provide End-To-End Two-Wheeler services</div>

        {/* second */}
        <div class="container-group text-center">
          <div class="row">
            <div class=" col4 col4 col-3">
              <h4>
                <img
                  src="https://cdn-icons-png.freepik.com/256/15814/15814752.png?semt=ais_hybrid"
                  width={30}
                />{" "}
                OVERVIEW
              </h4>
              <p>Know more about our services ,Plans and Warrenty</p>
            </div>
            <div class="col4 col-3">
              <h4>
                <img
                  src="https://cdn-icons-png.freepik.com/256/2069/2069014.png?semt=ais_hybrid"
                  width={30}
                />{" "}
                BOOK SERVICE
              </h4>
              <p>
                Book a service at our authoriesed servier center where we ensure
                highest standards of srvice quality and reliability
              </p>
            </div>
            <div class="col4 col-3">
              <h4>
                <img
                  src="https://cdn-icons-png.freepik.com/256/747/747310.png?semt=ais_hybrid"
                  width={30}
                />{" "}
                MAINTENANCE
              </h4>
              <p>
                Proper care and maintence are paramount for trouble free
                operation and optimum perfirmance of trouble free operation and
                optimum performance of your two wheeler
              </p>
            </div>
            <div class="col4 col-3">
              <h4>
                <img
                  src="https://cdn-icons-png.freepik.com/256/388/388531.png?semt=ais_hybrid"
                  width={30}
                />{" "}
                WARRANTY
              </h4>
              <p>Know more about our services ,Plans and Warrenty</p>
            </div>
          </div>
        </div>
        {/* third */}
        <div class="container-group text-center">
          <div class="row">
            <div class="col4 col-3">
              <h4>
                <img
                  src="https://cdn-icons-png.freepik.com/256/8927/8927661.png?semt=ais_hybrid"
                  width={30}
                />{" "}
                HERO JOYRIDE
              </h4>
              <p>
                As a member of this annual maintance package you will enjoy a
                host of benefits and saving when getting your two-wheelr service
              </p>
            </div>
            <div class="col4 col-3">
              <h4>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3145/3145740.png?semt=ais_hybrid"
                  width={30}
                />{" "}
                OWNER'S MANUAL
              </h4>
              <p>
                To know more about your hero two-wheeler,select your vehicle and
                download the owner manual
              </p>
            </div>
            <div class="col4 col-3">
              <h4>
                <img
                  src="https://cdn-icons-png.freepik.com/256/10437/10437999.png?semt=ais_hybrid"
                  width={30}
                />{" "}
                DIY VIDEOS
              </h4>
              <p>Easy hacks to take care of your two wheelers</p>
            </div>
            <div class="col4 col-3">
              <h4>
                <img
                  src="https://cdn-icons-png.freepik.com/256/12615/12615421.png?semt=ais_hybrid"
                  width={30}
                />{" "}
                TWO-WHEELER'S TIPS
              </h4>
              <p>Tips for save riding</p>
            </div>
          </div>
        </div>
        {/* fourth */}
        <div class="container-group text-center">
          <div class="row">
            <div class="col4 col-3">
              <h4>
                {" "}
                <img
                  src="https://cdn-icons-png.freepik.com/256/388/388531.png?semt=ais_hybrid"
                  width={30}
                />{" "}
                BE A SAFE HERO
              </h4>
              <p>
                we focus on assisting individual in making correct judgement on
                the road and helping them choose the proper riding great htet
                can help save lives.
              </p>
            </div>
            <div class="col4 col-3">
              <h4>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/16031/16031706.png"
                  width={30}
                />
                HERO ASSURED PRIZE
              </h4>
              <p>
                Get an approximate sevice estimate for your Hero two-wheeler
                vehicle.
              </p>
            </div>
            <div class="col-3"></div>
            <div class="col-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
