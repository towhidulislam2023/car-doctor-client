import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
            <div className='bg-white text-black p-2 rounded-lg'>
                <img src={logo} alt="" />
                <p>Car Doctor Industries Ltd.<br />Providing reliable car services since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link to="/" className="link link-hover">Branding</Link>
                <Link to="/" className="link link-hover">Design</Link>
                <Link to="/" className="link link-hover">Marketing</Link>
                <Link to="/" className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to="/" className="link link-hover">About Car Doctor Industries Ltd.</Link>
                <Link to="/" className="link link-hover">Contact</Link>
                <Link to="/" className="link link-hover">Jobs</Link>
                <Link to="/" className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link to="/" className="link link-hover">Terms of use</Link>
                <Link to="/" className="link link-hover">Privacy policy</Link>
                <Link to="/" className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;
