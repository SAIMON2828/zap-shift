// import React from 'react';

import { Link, NavLink } from "react-router";
import Logo from "../../../Components/Logo/Logo";
import useAuth from "../../../Hookes/useAuth";

const NavBar = () => {


    const { user, signOutUser } = useAuth();
    const handleSignOut = () => {
        signOutUser()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    const links = <>
        <li><NavLink to="">services</NavLink></li>
        <li><NavLink to="/Coverage">Coverage</NavLink></li>
        <li><NavLink to="">About us</NavLink></li>
        <li><NavLink to="/send-parcel">Send_Parcels</NavLink></li>
        {
            user && <>
                    <li><NavLink to="/dashboard/my-parcels">My_Parcel</NavLink></li>

            </>
        }

    </>
    return (
        <div className="navbar bg-[#FFFFFF] shadow-sm rounded-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Logo></Logo>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <a onClick={handleSignOut} className="btn">LogOut</a> :
                        <Link className="btn" to="/login">Login</Link>
                }
                <Link className="btn btn-primary text-black mx-4" to="/rider">Be a Rider</Link>

            </div>
        </div>
    );
};

export default NavBar;