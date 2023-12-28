import React from "react";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark p-3 mb-2">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link text-light" aria-current="page" href="#">Home</a>
                        <a className="nav-link text-secondary" href="#">About</a>
                        <a className="nav-link text-secondary" href="#">Services</a>
                        <a className="nav-link text-secondary" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}