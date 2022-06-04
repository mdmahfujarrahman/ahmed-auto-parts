import React from 'react';
import { Link } from 'react-router-dom';
import facebook from "../../asset/facebook.png";
import linkdin from "../../asset/lindin.png";
import logo from "../../asset/logo-red.png";


const Footer = () => {
     const today = new Date();
     const year = today.getFullYear();

    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <Link to="/">
                    <img className="w-28" src={logo} alt="Ahmed autos parts" />
                </Link>
                <p>
                    Ahmed Autos Parts
                    <br /> Perfect Parts For Powering Your Autos
                </p>
                <p>Copyright © {year} - All right reserved</p>
            </div>
            <div>
                <span className="footer-title">Products</span>
                <Link to="/products" className="link link-hover">
                    Engine Parts
                </Link>
                <Link to="/products" className="link link-hover">
                    Suspension Parts
                </Link>
                <Link to="/products" className="link link-hover">
                    Body & Device
                </Link>
                <Link to="/products" className="link link-hover">
                    Lighting Systems
                </Link>
            </div>
            <div>
                <span className="footer-title">Contact Info</span>
                <p>Address: Chiribandar, Dinajpur, Bangladesh</p>
                <p>Email: info@ahmedautoparts.com</p>
                <p>Phone: +8801786950046</p>
                <div className="flex space-x-2">
                    <a
                        href="https://www.facebook.com/Mahfuj.ahmed0"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="w-10" src={facebook} alt="facebook" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mahfuj-ahmed/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="w-10" src={linkdin} alt="linkdin" />
                    </a>
                </div>
            </div>
            <div>
                <span className="footer-title">Map</span>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.497228704852!2d88.82186071537093!3d25.787165213838747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e357cf29f5ea63%3A0x64f274ea5a071f44!2sAhmed%20Auto%20Parts!5e0!3m2!1sen!2sbd!4v1653480311041!5m2!1sen!2sbd"
                    width="300"
                    height="200"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </footer>
    );
};

export default Footer;