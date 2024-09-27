import React from "react";
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="container-fluid fixed-top">
            <div className="container px-0">
                <nav className="navbar navbar-light bg-hotgreen navbar-expand-xl">
                    <Link to={'/'} className="navbar-brand"><h1 className="text-white display-6">RyanaCalendars</h1></Link>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-hotgreen" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <Link to={'/'} className="nav-item nav-link text-white active">Home</Link>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to={'/shop'} class="dropdown-item">All</Link></li>
                                    <li><Link to={'/'} class="dropdown-item">Calendars</Link></li>
                                    <li><Link to={'/'} class="dropdown-item" href="#">Diaries</Link></li>
                                    <li><Link to={'/'} class="dropdown-item" href="#">Notebook</Link></li>
                                    <li><Link to={'/'} class="dropdown-item" href="#">Journals</Link></li>
                                </ul>
                            </li>
                            <Link to={'/contact'} className="nav-item nav-link text-white ">Contact Us</Link>
                            <Link to={'/about'} className="nav-item nav-link text-white ">Helping Communities</Link>
                        </div>
                        <div className="navbar-nav d-flex">
                            <Link to={'/'} className="nav-item nav-link text-white "><i class="bi bi-person"></i></Link>
                            <Link to={'/'} className="nav-item nav-link text-white "><i class="bi bi-cart"></i></Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}