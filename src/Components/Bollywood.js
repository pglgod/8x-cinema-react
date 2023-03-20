import React from 'react'
import { Link } from 'react-router-dom'

export default function Bollywood() {
    document.title="8X Cinema - Bollywood"
  return (
    <>
    <div class="container">
        <h3 class="text-center text-danger">8X-Cinema.com - Bollywood hindi 720p 480p moveis</h3>
    </div>
       <div className="container row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3 py-2 ">
            <div className="col">
                <div className="card shadow-sm">
                    <Link to="/bollywood/bramhastra">
                        <img src="/images/bramhastra_p01.jpg" className="card-img-top" alt="..."/>
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title text-center"><Link to="/bollywood/bramhastra" className="text-decoration-none">Bramhastra Part One Shiva 2022 Hindi 720/480p pDVDRip</Link>
                        </h5>
                    </div>
                </div>
            </div>
            
            <div className="col">
                <div className="card shadow-sm">
                    <a href="laal-singh.html">
                        <img src="/images/Laal-singh.jpg" className="card-img-top" alt="..."/>
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
                    <a href="liger.html">
                        <img src="/images/liger.jpg" className="card-img-top" alt="..."/>
                    </a>
                    <div className="card-body">
                        <h5 className="card-title text-center"><a href="liger.html" className="text-decoration-none">liger 2022 Hindi 720p/480p pDVDRip</a>
                        </h5>
                    </div>
                </div>
            </div>

            
        </div> 
    </>
  )
}
