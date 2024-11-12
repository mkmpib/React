import React from "react";
import "./App.css";
const About = () => {
  return (
    <>
      <div className="about1">
        <div className="vision">
          <div className="no">
            <h1>Our Vision</h1>
            <p>
              Be The Future Of <span style={{ color: "red" }}>Mobility</span>
            </p>
          </div>

          <img
            src="https://www.heromotocorp.com/content/dam/hero-commerce/in/en/products/practical/content-fragments/splendor-plus/assets/splendor-plus-desktop.jpg"
            alt=""
          />
        </div>

        <div className="header1">
          <div class=" pura container-group text-center">
            <div class="row">
              <div class="col5 col-4">
                <h1>#1</h1>
              </div>

              <div class=" col6 col-8">
                <h1>
                  Two-Wheeler <br /> Manufacturer in the <br /> World*
                </h1>
                <p>
                  We are empowering millions around the globe through our
                  portfolio of innovative and sustainable products. Powered by
                  technology-driven excellence, we are shaping the future of
                  mobility.
                </p>
              </div>
            </div>
          </div>
          {/* box div */}
          <div class="dabba2">
            <div class=" pura container-group text-center">
              <div class="row">
                <div class="col7 col-3">
                  <h1>
                    47<span>+</span>{" "}
                  </h1>
                  <p>Country Presence</p>
                </div>

                <div class="col7 col-3">
                  <h1>
                    115 M<span>+</span>{" "}
                  </h1>
                  <p>Happy Customers</p>
                </div>
                <div class="col7 col-3">
                  <h1>
                    9000<span>+</span>{" "}
                  </h1>
                  <p>Customers Touch-Points Worldwide</p>
                </div>
                <div class="col7 col-3">
                  <h1>
                    40<span>+</span>{" "}
                  </h1>
                  <p>Year of Trust and Tech Leadership</p>
                </div>
              </div>
            </div>
          </div>
          <h2>
            *Disclaimer:#1 in unit volumes sold by a single entity in a calender
            year
          </h2>
          <hr />
        </div>
        <div class="dabba3">
          <div class=" pura2 container-group text-center">
            <h2>VALUES</h2>
            <div class="row">
              <div class="col8 col-3">
                <img
                  src="https://img.icons8.com/?size=80&id=Y4SGqARpWAxg&format=png"
                  width={70}
                />
                <h1>Passion</h1>
                <p>Be Bold.Love What You do.Deliver Your best</p>
              </div>

              <div class="col8 col-3">
                <img
                  src="https://static.thenounproject.com/png/1684637-200.png"
                  width={70}
                />
                <h1>Integrity</h1>
                <p>
                  Be ethical and do the right thing,even when no one watching
                </p>
              </div>
              <div class="col8 col-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3633/3633144.png"
                  width={70}
                />
                <h1>Respact</h1>
                <p>
                  Be confident,but humble,Appreciate and acknowledge
                  everyone.Celebrate Diversity
                </p>
              </div>
              <div class="col8 col-3">
                <img
                  src="https://ouch-cdn2.icons8.com/rFoadryL-25MJDznusr2P84QekSzh1F4GHu04WFHR5o/rs:fit:368:549/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTE3/LzQ2YTA4YzYyLThk/MzEtNDY3NS1iNzg5/LWUyNGVlMDk4Zjkz/MC5zdmc.png"
                  width={70}
                />
                <h1>Courage</h1>
                <p>
                  Take risks and question the status quo Dare to be different
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="footer">
          <div class=" pura3 container-group text-center">
            <h2>
              <img
                src="https://1000logos.net/wp-content/uploads/2020/06/Hero-Logo1.jpg"
                width={120}
                alt=""
              />
            </h2>
            <div class="row">
              <div class="col9 col-3">
                <h4>ABOUT US</h4>
                <ul>
                  <li>Board of Directors</li>
                  <li>Leadership Team</li>
                  <li>Key Policies</li>
                  <li>Our Reports</li>
                  <li>Sustainability</li>
                </ul>
              </div>

              <div class="col9 col-3">
                <h4>MY HERO</h4>
                <ul>
                  <li>Owner's</li>
                  <li>Two Wheelers Tips</li>
                  <li>Hero Goodlife</li>
                  <li>Xclan</li>
                  <li>Be A Safe Hero</li>
                </ul>
              </div>
              <div class="col9 col-3">
                <h4>REACH US</h4>
                <ul>
                  <li>Contact Us</li>
                  <li>Suggestions</li>
                  <li>Find a Dealer</li>
                  <li>Corporate Enquery</li>
                  <li>Becomea channel leader</li>
                </ul>
              </div>
              <div class="col9 col-3">
                <h4>NEWSROOM</h4>
                <ul>
                  <li>Media Kit</li>
                  <li>In the Press</li>
                  <li>Press Releases</li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <h4>Copyright Hero MotoCorp Ltd 2024.All Right Reserved</h4>
        </div>
      </div>
    </>
  );
};
export default About;
