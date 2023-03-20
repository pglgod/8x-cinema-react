import React from "react";
import { Link } from "react-router-dom";

export default function Hollywood() {
    document.title="8X Cinema - Hollywood"
  return (
    <>
      <div class="container">
        <h3 class="text-center text-danger">
          8X-Cinema.com - Hollywood dual audio hindi dubbed 720p 480p moveis
        </h3>
      </div>
      <div class="container row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
        <div class="col">
          <div class="card shadow-sm">
            <Link to="/hollywood/i_am_groot">
              <img src="/images/groot.jpg" class="card-img-top" alt="..." />
            </Link>
            <div class="card-body">
              <h5 class="card-title text-center">
                <Link to="/hollywood/i_am_groot" class="text-decoration-none">
                  I Am Groot - S01 Hindi 720p WEB-DL
                </Link>
              </h5>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <a href="she-hulk.html">
              <img src="/images/she-hulk.jpg" class="card-img-top" alt="..." />
            </a>
            <div class="card-body">
              <h5 class="card-title text-center">
                <a href="she-hulk.html" class="text-decoration-none">
                  She Hulk : Attorney at Law 2022 S01 Hindi 720p/480p WEB-DL
                </a>
              </h5>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <a href="thor-love-and-thumder.html">
              <img
                src="/images/Thor-love-&-thunder.jpg"
                class="card-img-top"
                alt="..."
              />
            </a>
            <div class="card-body">
              <h5 class="card-title text-center">
                <a
                  href="thor-love-and-thumder.html"
                  class="text-decoration-none"
                >
                  Thor Love and Thundre - Hindi Dubbed 720p 480p WEB-DL
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
