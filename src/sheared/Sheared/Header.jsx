import React, { useContext } from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { authProviderContex } from '../../Provider/AuthProvider/AuthProvider';
const Header = () => {
    const { user,logout,loading }=useContext(authProviderContex)
    console.log(loading, "from header");
    const manageLogout=()=>{
        logout()
        .then(()=>{
         
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="navbar bg-base-100 h-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/"}>About</Link></li>
                        <li><Link to={"/"}>Services</Link></li>
                        <li><Link to={"/"}>Blog</Link></li>
                        <li><Link to={"/"}>Contact</Link></li>
                    </ul>
                </div>
                <img src={logo} className='h-11 md:h-20 ' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/"}>About</Link></li>
                    <li><Link to={"/"}>Services</Link></li>
                    <li><Link to={"/"}>Blog</Link></li>
                    <li><Link to={"/"}>Contact</Link></li>
                    <li><Link to={"/"}>{user?.displayName}</Link></li>
                    {
                        user ? <li><button onClick={manageLogout}>Log Out</button></li> : <li><Link to={"/login"}>Login</Link></li>
                    }
                   
                </ul>
            </div>
            <div className="navbar-end">
               <div className='flex justify-between items-center'>
                    <Link to={"/bookingCart"}><FaShoppingCart className='text-3xl mr-3 text-neutral-400 cursor-pointer hover:text-black'></FaShoppingCart></Link>  
                    <FaSearch className='text-3xl mr-3 text-neutral-400 cursor-pointer hover:text-black'></FaSearch>
               </div>
                <button className="btn btn-outline btn-error">Appointment</button>
            </div>
        </div>
    );
};

export default Header;