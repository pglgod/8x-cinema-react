import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <hr/>
    <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">About</a></li>
            <li className="nav-item"><a href="contact.html" className="nav-link px-2 text-muted">Contact us</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">How to Download</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">FAQs</a></li>
        </ul>
        <p className="text-center text-muted">© 2022 8X-Cinema</p>
    </footer> 
    </>
  )
}
