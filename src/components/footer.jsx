/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../assets/images/header.svg'
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';
function Footer() {
    return (
        <div>
            <footer className="bg-[#181818]">
                <div className="mx-auto w-full max-w-screen-xl p-4 lg:px-10 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:w-[40%] md:mb-0">
                            <Link to={'/'} className="flex items-center">
                                <img src={Header} alt='header-icon'/>
                            </Link>
                            <div>
                                <p className="m-0 text-[#888888]">
                                    Transform Your Body with FitMaker, Your Trusted Partner in Fitness. With Over 5 Years of Experience, We Offer Expert Coaching, Tailored Workout Plans, and Comprehensive Nutritional Guidance. Join Our Community and Start Your Journey Towards a Healthier, Stronger You. Ready to Make a Change?
                                </p>
                            </div>
                            <div className='flex my-4 items-center justify-between md:my-8 md:mx-6'>
                                <div>
                                    <Facebook className='text-white'/>
                                </div>
                                <div>
                                    <Instagram className='text-white'/>
                                </div>
                                <div>
                                    <Twitter className='text-white'/>
                                </div>
                                <div>
                                    <Youtube className='text-white'/>
                                </div>
                            </div>
                        </div>
                        <div className="grid  grid-cols-2  md:grid-cols-2 gap-[1px] sm:gap-2 sm:grid-cols-4">
                            <div>
                                <h2 className="mb-6 text-start md:text-center text-sm font-semibold text-red-500 capitalize dark:text-white md:text-[16px] text-[14px]">Company</h2>
                                <ul className="text-gray-500 text-start md:text-center dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link to={'/about-us'}className="md:text-[16px] text-[14px] hover:underline">About Us</Link>
                                    </li>
                                    <li className='mb-4'>
                                        <Link to={'/services'} className="md:text-[16px] text-[14px] hover:underline">Our Services</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to={'/careers'}className="md:text-[16px] text-[14px] hover:underline">Careers</Link>
                                    </li>
                                    <li className='mb-4'>
                                        <Link to={'/blog'} className="md:text-[16px] text-[14px] hover:underline">Blog</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to={'/testimony'}className="md:text-[16px] text-[14px] hover:underline">Testimonial</Link>
                                    </li>
                                    <li>
                                        <Link to={'/contact-us'} className="md:text-[16px] text-[14px] hover:underline">Contact Us</Link>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-start md:text-center  text-sm font-semibold text-red-500 uppercase dark:text-white md:text-[16px] text-[14px]">Resources</h2>
                                <ul className="text-gray-500 text-start md:text-center  dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link to={'/fitness'} className="md:text-[16px] text-[14px] hover:underline">Fitness Tools</Link>
                                    </li>
                                    <li className='mb-4'>
                                        <Link to={'/workout-videos'} className="md:text-[16px] text-[14px] capitalize hover:underline">Workout videos</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to={'/nutrition'} className="md:text-[16px] text-[14px] hover:underline">Nutrition Guides</Link>
                                    </li>
                                    <li className='mb-4'>
                                        <Link to={'/faq'} className="md:text-[16px] text-[14px] capitalize hover:underline">FAQ</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to={'/success-stories'} className="md:text-[16px] text-[14px] hover:underline">Success Stories</Link>
                                    </li>
                                    <li>
                                        <Link to={'/membership'} className="capitalize hover:underline md:text-[16px] text-[14px]">Membership</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-start md:text-center  text-sm font-semibold text-red-500 uppercase dark:text-white md:text-[16px] text-[14px] ">Programs</h2>
                                <ul className="text-gray-500 text-start md:text-center  dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link to={'/weight-loss'} className="md:text-[16px] text-[14px] hover:underline">Weight Loss</Link>
                                    </li>
                                    <li className='mb-4'>
                                        <Link to={'/building-muscles'} className="capitalize hover:underline md:text-[16px] text-[14px]">Building Muscles</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to={'/home-workout'} className="md:text-[16px] text-[14px] hover:underline">Home Workout</Link>
                                    </li>
                                    <li className='mb-4'>
                                        <Link to={'/gym-plan'} className="md:text-[16px] text-[14px] capitalize hover:underline">Gym Plan</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to={'/plans'} className="md:text-[16px] text-[14px] hover:underline">Our Plans</Link>
                                    </li>
                                    <li>
                                        <Link to={'/fitness-group'} className="md:text-[16px] text-[14px] capitalize hover:underline">Fitness Group</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm text-start md:text-center  font-semibold text-orange-500 uppercase dark:text-white md:text-[16px] text-[14px]">Contact Us</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4 flex gap-2 items-center md:justify-start justify-start">
                                        <div>
                                            <MapPin className='text-white'/>
                                        </div>
                                        <div>
                                            <span className='md:text-[16px] text-[14px] text-[#888888]'>usa - Washngton DC</span>
                                        </div>
                                    </li>
                                    <li className='mb-4 flex gap-2 items-center '>
                                        <div>
                                            <Phone className='text-white'/>
                                        </div>
                                        <div>
                                            <span className='md:text-[16px] text-[14px] text-[#888888]'>1234-56789</span>
                                        </div>
                                    </li>
                                    <li className='mb-4 flex gap-2 items-center '>
                                        <div>
                                            <Mail className='text-white'/>
                                        </div>
                                        <div>
                                            <span className='md:text-[16px] text-[14px] text-[#888888]'>Fitmakerrr@Gmail.com</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                </div>
            </footer>
        </div>
    );
}

export default Footer;