/* eslint-disable no-unused-vars */
import React from 'react';
import Error from '../assets/images/error.svg'
import Group from '../assets/images/Group 1.svg'
import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <div className='md:m-5 m-8'>
            <div>
                <p className="m-0 text-white text-center font-[900] md:text-[30px] lg:text-[50px] text-[20px]">Oops!</p>
            </div>
            <div className="text-center">
                <p className="m-0  font-bold text-white">Welcome To The {"70'"}s</p>
            </div>
            <div className='flex error items-center justify-center'>
                <img className='md:w-[300px] w-[200px] lg:w-[400px]' src={Error} alt="error_svg" />
            </div>
            <Link to={'/'}>
                <div className='flex items-center  justify-center gap-3'>
                    <div className='flex items-center'>
                        <img src={Group} alt="arrow_back" />
                    </div>
                    <div className='flex items-center'>
                        <p className="m-0 text-white">Go Home</p>
                    </div>
                </div>
                <div className="hrs mx-auto"></div>
            </Link>
        </div>
    );
}

export default NotFound;