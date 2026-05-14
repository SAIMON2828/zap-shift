// import React from 'react';

import { Link } from 'react-router';
import logo from '../../assets/logo.png'

const Logo = () => {
    return (
        <Link to="/">
            <div className='flex items-end'>
                <img src={logo} alt="" />
                <h3 className="text-3xl -ms-2.5 font-bold">zapShift</h3>
            </div>
        </Link>
    );
};

export default Logo;