import React from "react";
import { Link } from 'react-router-dom';


const Footer = (props) => {
    return (
        <div className="footer">
            <footer className="text-center text-lg-start text-white">
                <div className="container p-4 pb-0">
                    <section>
                        <div className="row">
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="contact col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p>
                                    <a className="text-white">Email: info@renthome.com</a>
                                </p>
                                <p>
                                    <a className="text-white">Phone: +1-123-456-7890</a>
                                </p>
                                <p>
                                    <a className="text-white">123 Main St, City, Country</a>
                                </p>
                                <p>
                                    <a className="text-white">Skype: renthome-skype</a>
                                </p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="link col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Quick Links
                                </h6>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Feedback</a></li>
                                    <li>
                                      <Link to="/Aboutus">About Us</Link>
                                    </li>
                                    <li><a href="#">Terms and Conditions</a></li>
                                    <li>
                                        <Link to="/Policy">Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Follow Us</h6>
                                <ul className="social-links">
                                    <li>
                                        <a href="https://www.facebook.com/" className="social-link">
                                            <i className="fab fa-facebook"></i> Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/" className="social-link">
                                            <i className="fab fa-twitter"></i> Twitter
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" className="social-link">
                                            <i className="fab fa-instagram"></i> Instagram
                                        </a>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </section>
                    <hr className="my-3" />
                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                                <div className="p-3">
                                    © 2023 Copyright:
                                    <a className="text-white" href="#">renthome.com</a>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                <a className="btn btn-outline-light btn-floating m-1" role="button">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="btn btn-outline-light btn-floating m-1" role="button">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="btn btn-outline-light btn-floating m-1" role="button">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a className="btn btn-outline-light btn-floating m-1" role="button">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
