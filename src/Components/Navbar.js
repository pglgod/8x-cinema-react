import React from 'react'

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Offcanvas navbar large">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img className='logo-size' src="/images/8X-Cinema.png" alt=".." /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
                aria-controls="offcanvasNavbar2">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2"
                aria-labelledby="offcanvasNavbar2Label">
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title" id="offcanvasNavbar2Label">8X-Cinema.com</h3>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/bollywood">Bollywood</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/hollywood">Hollywood</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Collection
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="marval.html">Marval </a></li>
                                <li><a className="dropdown-item" href="dc-universe.html">DC Universe</a></li>
                                <li><a className="dropdown-item" href="x-man.html">X-MAN</a></li>
                                <li><a className="dropdown-item" href="star-wars.html">star wars</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Category
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="south.html">South</a></li>
                                <li><a className="dropdown-item" href="web-series.html">Web Series</a></li>
                                <li><a className="dropdown-item" href="tv-serial.html">TV Serial</a></li>
                                <li><a className="dropdown-item" href="reality-show.html">Reality Show</a></li>
                                <li><a className="dropdown-item" href="animation.html">Animation</a></li>
                                <li><a className="dropdown-item" href="adult.html">Adult 18+</a></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </nav> 
    </>
  )
}
