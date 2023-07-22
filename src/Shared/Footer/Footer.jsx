/* eslint-disable no-unused-vars */
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-purple-800 text-white'>
            <div className='container pt-16 bg-dark md:flex justify-around'>
                <div className='ms-4'>
                    <h2 className='text-white text-xl mb-4'>Subscribe</h2>
                    <hr style={{ borderColor: 'white', padding: '8px' }} />
                    <p className='mt-2'>Register and get notified about all the news & updates before it gets too late.</p>
                    <div>
                        <input className='ps-2 bg-dark h-10 border text-gray-700 rounded' type="email" name="" id="" placeholder='Your email address' />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ms-2 py-2 px-3 rounded focus:outline-none focus:shadow-outline mt-4 md:mt-0">Sign up</button>
                    </div>
                </div>

                <div className=' ms-4'>
                    <h2 className='text-white text-xl mb-4 mt-8 md:mt-0'>Explore</h2>
                    <hr style={{ borderColor: 'white', padding: '8px' }} />
                    <ul className=''>
                        <li className='mb-2'>Browser Reciepe</li>
                        <li className='mb-2'>Submit A Recipe</li>
                        <li className='mb-2'>Our Chefs</li>
                        <li className='mb-2'>Latest News</li>
                        <li className='mb-2'>Contact</li>
                    </ul>
                </div>

                <div className='text-white ms-4 pb-4'>
                    <h2 className='text-white text-xl mb-4 mt-8 md:mt-0'>Contact</h2>
                    <hr style={{ borderColor: 'white', padding: '8px' }} />
                    <div className='flex items-center mb-3'>
                        <FaMapMarkerAlt></FaMapMarkerAlt>
                        <span className='ms-3'>787 Mark View Street,
                            <br />
                            New Town, California</span>
                    </div>
                    <div className='flex items-center'>
                        <FaPhone></FaPhone>
                        <span className='ms-3'>666 444 0000</span>
                    </div>
                </div>
            </div>
            <div className='container text-center bg-slate-800 pt-8'>
                <p className='ms-3'>All rights reserved. Your company name here.</p>
                <div className='text-white flex justify-center gap-3 text-2xl p-4'>
                    <FaFacebook></FaFacebook>
                    <FaTwitter></FaTwitter>
                    <FaInstagram></FaInstagram>
                    <FaYoutube></FaYoutube>
                </div>
            </div>
        </div>
    );
};

export default Footer;