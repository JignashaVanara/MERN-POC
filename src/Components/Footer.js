import React from "react";
import { Link } from "react-router-dom"
import './style.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="bg-dark text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                    <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
                        ><i className="fab fa-facebook-f"></i
                    ></Link>
                    <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
                        ><i className="fab fa-twitter"></i
                    ></Link>
                    <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
                        ><i className="fab fa-instagram"></i
                    ></Link>

                    <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
                        ><i className="fab fa-linkedin-in"></i
                    ></Link>

                    <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
                        ><i className="fab fa-github"></i
                    ></Link>
                    </section>
                </div>

                <div className="text-center p-3">
                    © 2023 &nbsp;
                    <Link className="text-white" href="#">Company XXX</Link>
                </div>
                </footer>
        );
    }
}

export default Footer;