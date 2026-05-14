// import React from 'react';

import { Outlet } from "react-router";
import Logo from "../Components/Logo/Logo";
import authImage from '../assets/authImage.png';

const AuthLayOut = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Logo></Logo>
            <div className="flex items-center mt-10">
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
                <div className="flex-1">
                    <img src={authImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayOut;