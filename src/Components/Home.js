import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  document.title="8X Cinema - Home"
  return (
    <>
      <div class="container">
        <h3 className="text-center text-danger">
          8X-Cinema.com Bollywood Movies South Hindi Dubbed Movies Hindi TV
          Shows HD Movies Hollywood Dubbed Dual Audio Movies Hindi WEB Series
        </h3>
      </div>
      <hr/>
      <div className="container">
        <div className="container row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3 ">
          <div className="col">
            <div className="card shadow-sm">
              <Link to="/bollywood/bramhastra">
                <img
                  src="/images/bramhastra_p01.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title text-center">
                  <Link
                    to="/bollywood/bramhastra"
                    className="text-decoration-none"
                  >
                    Bramhastra Part One Shiva 2022 Hindi 720/480p pDVDRip
                  </Link>
                </h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <a href="she-hulk.html">
                <img
                  src="/images/she-hulk.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h5 className="card-title text-center">
                  <a href="she-hulk.html" className="text-decoration-none">
                    She Hulk : Attorney at Law 2022 S01 Hindi 720p/480p WEB-DL
                  </a>
                </h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <a href="liger.html">
                <img
                  src="/images/liger.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h5 className="card-title text-center">
                  <a href="liger.html" className="text-decoration-none">
                    liger 2022 Hindi 720p/480p pDVDRip
                  </a>
                </h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <Link to="/hollywood/i_am_groot">
                <img
                  src="/images/groot.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title text-center">
                  <Link to="/hollywood/i_am_groot" className="text-decoration-none">
                    I Am Groot - S01 Hindi 720p WEB-DL
                  </Link>
                </h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <a href="laal-singh.html">
                <img
                  src="/images/Laal-singh.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h5 className="card-title text-center">
                  <a href="laal-singh.html" className="text-decoration-none">
                    Laal singh Chaddha - Hindi 720p 480p pDVDRip
                  </a>
                </h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <a href="thor-love-and-thumder.html">
                <img
                  src="/images/Thor-love-&-thunder.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h5 className="card-title text-center">
                  <a
                    href="thor-love-and-thumder.html"
                    className="text-decoration-none"
                  >
                    Thor Love and Thundre - Hindi Dubbed 720p 480p WEB-DL
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
