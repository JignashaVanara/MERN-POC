import React from "react";
import { Link } from "react-router-dom"
import './style.css';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fas fa-bars text-light"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
                            <li className="nav-item text-center mx-2 mx-lg-1">
                                <Link className="nav-link active" aria-current="page" to="/home">
                                    <div>
                                    <i className="fas fa-home fa-lg mb-1"></i>
                                    </div>
                                    Home
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
                            <li className="nav-item text-center mx-2 mx-lg-1">
                                <Link className="nav-link" href="#!">
                                    <div>
                                    <i className="fas fa-bell fa-lg mb-1"></i>
                                    <span className="badge rounded-pill badge-notification bg-info">11</span>
                                    </div>
                                    Messages
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
                            <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="button" data-mdb-ripple-color="dark">
                            Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;