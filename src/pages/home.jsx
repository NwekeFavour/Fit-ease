/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Man from '../assets/images/Group 4.svg'
import { Button } from '../components/ui/button';
import HeaderContent from '../components/header';
import {  ArrowLeft, ArrowRight, CalendarRange, ChevronRight, Mail, MoveRight, User } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Google from '../assets/images/Google.svg'
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

    import SMan from '../assets/images/sideview.svg'
    import WierdMan from '../assets/images/Frame 377.svg'
    import MuscleMan from '../assets/images/Frame 5 (1) 1.svg'
    import Vector from '../assets/images/Vector (14).svg'
    import Newspaper  from '../assets/images/bi_newspaper.svg'
    import { Label } from '../components/ui/label';
    import { Input } from '../components/ui/input';
    import Footer from '../components/footer';
    import Frame1 from '../assets/images/Frame 476.svg'
function Home() {
    const [ActiveTab, isTab] = useState(true)
    const [ActiveTabOne, isTabTwo] = useState(false)
    const TabActive = () => {
        isTab(false)
        isTabTwo(true)
    }
    const TabActiveTwo = () => {
        isTab(true)
        if(ActiveTabOne == true){
            isTabTwo(false)
        }
    }

    const content = "I’ve been using Fitmaker for the past three months, and I’m genuinely impressed. The website is easy to navigate, and everything is laid out clearly. I purchased the Premium Plan, and the personalized coaching has been a game-changer for me. My coach is incredibly supportive and always available to answer my questions. The weekly video sessions keep me motivated, and the custom meal plans have helped me stay on track with my goals. Highly recommended for anyone serious about their fitness journey!" 

    return (
        <div className=''>
            <div className="hero">
                <HeaderContent/>
            </div>
            <div className='lg:flex hero items-center md:justify-items-center justify-center'>
                <div className='lg:w-[50%] lg:my-0 md:my-5 md:w-full'> 
                    <div  className='flex items-center justify-center'>
                        <div>
                            <div>
                                <p className="m-0 font-bold md:text-[25px] text-[16px] lg:text-[30px] text-center text-white">Achive Your </p>
                            </div>
                            <div className="text-4xl my-2 lg:my-3 font-bold bg-gradient-to-r from-[#D20C13]  to-[#CC4E17] bg-clip-text text-transparent">
                                <p className="m-0 font-bold  lg:text-[50px] fit text-[18px] md:text-[40px] text-center uppercase">fitness goals</p>
                            </div>
                            <div className=''>
                                <p className="m-0 font-bold md:text-[25px] text-[16px] lg:text-[30px] text-center text-white capitalize">with fitmaker</p>
                            </div>
                        </div>
                        <div className="md:hidden sm:block">
                            <img src={Frame1} alt="" />
                        </div>
                    </div>
                    <div className='lg:w-[80%] md:w-[90%] md:my-5 lg:mt-7 mx-4'>
                        <p className='text-white md:text-[16px] text-[14px] m-0'>
                            {
                                "Join the Fitmaker community and transform your fitness journey. Our expert coaches and personalized programs are designed to help you achieve your goals and exceed your expectations. Ready to make a change?"
                            }
                        </p>
                    </div>
                    <div className='flex items-center gap-5 my-4 lg:my-0 md:my-8 justify-center md:gap-10'>
                        <div>
                            <Button className='bg-[#D90A14] lg:px-0 md:px-9 lg:w-[120%]'>Start Your Journey</Button>                    
                        </div>
                        <div>
                            <Button className='bg-transparent lg:px-0 md:px-9 focus:bg-none  border border-[#CD4E17] rounded-[18px]  md:w-[120%]'>Explore Programs</Button>
                        </div>
                    </div>
                </div>
                <div className='md:flex hidden justify-center '>
                    <img className='lg:w-[500px] md:w-[400px]  max-w-[500px]' src={Man} alt="man_svg" />
                </div>
            </div>
            <div className='lg:flex md:grid-cols-2 md:grid items-center md:mx-3 my-8 md:my-3 justify-center'>
                <div className='md:border-r-4 md:border-b-0 border-b-2 md:pb-0 pb-4 md:mx-0  md:my-0 my-4  border-[#D90A14]'>
                    <div className='flex items-center gap-3 justify-center'>
                        <div>
                            <p className="m-0 font-bold text-red-500 lg:text-[36px]">96%</p>
                        </div>
                        <div>
                        <p className="m-0 text-white">Client Satisfaction</p>
                        </div>
                    </div>
                    <div>
                        <p className="m-0 text-[#888888] text-center">Our members love their results and experience</p>
                    </div>
                </div>
                <div className='md:border-r-4  md:border-b-0 border-b-2 md:pb-0 pb-4 md:mx-0  md:my-0 my-4  px-7 border-[#D90A14]'>
                    <div className='flex items-center gap-3 justify-center'>
                        <div>
                            <p className="m-0 font-bold text-orange-500 lg:text-[36px]">+5</p>
                        </div>
                        <div>
                            <p className="m-0 text-white">Years of Experience</p>
                        </div>
                    </div>
                    <div>
                        <p className="m-0 text-[#888888] text-center">Trust in our proven track record of transforming</p>
                    </div>
                </div>
                <div className='md:border-r-4  md:border-b-0 border-b-2 md:pb-0 pb-4  md:my-0 my-4  md:mt-4 lg:mt-0 px-7 border-[#D90A14]'>
                    <div className='flex items-center gap-3 justify-center'>
                        <div>
                            <p className="m-0 text-red-500 font-bold lg:text-[36px]">+800</p>
                        </div>
                        <div>
                        <p className="m-0 text-white">Active Members</p>
                        </div>
                    </div>
                    <div>
                        <p className="m-0 text-[#888888] text-center">Join our thriving fitness community</p>
                    </div>
                </div>
                <div className='md:border-r-4 md:border-b-0 border-b-2 md:pb-0 pb-4 md:mx-0 md:my-0 my-4  px-7 lgmt-0 md:mt-4 border-[#D90A14]'>
                    <div className='flex items-center gap-3 justify-center'>
                        <div>
                            <p className="m-0 font-bold text-orange-500 lg:text-[36px]">24/7</p>
                        </div>
                        <div>
                        <p className="m-0 text-white">Support Available</p>
                        </div>
                    </div>
                    <div>
                        <p className="m-0 text-[#888888] text-center">Expert assistance whenever you need it</p>
                    </div>
                </div>
            </div>
            <div className='md:mt-24'>
                <div className='flex items-center md:my-3 justify-center gap-2'>
                    <div>
                        <p className="m-0 md:text-[32px] text-[20px] text-white font-bold">Our</p>
                    </div>
                    <div>
                        <p className="m-0 md:text-[32px] text-[20px] text-red-500 font-bold">Services</p>
                    </div>
                </div>
                <div>
                    <p className='text-center md:text-[16px] text-[14px] md:mx-0 mx-5 text-white'>At This Part You Can Easily access all of our servises. take a look at them and chose wich ever you want.</p>
                </div>
                <div className='lg:flex md:justify-items-center justify-items-center  md:my-5 md:grid-cols-2 md:grid items-center  justify-center'>
                    <div className='coachone'>
                        <div className='relative top-[250px] start-[-70px] flex items-center gap-3 justify-center'>
                            <div>
                                <p className="m-0 text-white">Learn More</p>
                            </div>
                            <div>
                                <MoveRight className='moveR text-orange-500 '/>
                            </div>
                        </div>
                    </div>
                    <div className='coachtwo md:my-0 my-4'>
                        <div className='relative top-[250px] start-[-70px] flex items-center gap-3 justify-center'>
                            <div>
                                <p className="m-0 text-white">Learn More</p>
                            </div>
                            <div>
                                <MoveRight className='moveR text-orange-500 '/>
                            </div>
                        </div>
                    </div>
                    <div className='coachthree lg:my-0 md:my-5 my-4'>
                        <div className='relative top-[250px] start-[-70px] flex items-center gap-3 justify-center'>
                            <div>
                                <p className="m-0 text-white">Learn More</p>
                            </div>
                            <div>
                                <MoveRight className='moveR text-orange-500 '/>
                            </div>
                        </div>
                    </div>
                    <div className='coachfour lg:my-0 md:my-5 my-4'>
                        <div className='relative top-[250px] start-[-70px] flex items-center gap-3 justify-center'>
                            <div>
                                <p className="m-0 text-white">Learn More</p>
                            </div>
                            <div>
                                <MoveRight className='moveR text-orange-500 '/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cards md:px-6'>
                <div className='flex md:py-0 py-4 justify-center items-center gap-2'>
                    <div>
                        <p className="m-0 text-white md:text-[32px] text-[20px] font-bold">Our</p>
                    </div>
                    <div>
                        <p className="m-0 font-bold md:text-[32px] text-[20px] text-red-500">Plans</p>
                    </div>
                </div>
                <div className='md:mb-0 mb-4'>
                    <p className="m-0 md:text-[16px] text-[14px] text-center text-white">Select the plan that suits your fitness goals and let our expert coaches guide you every step of the way.</p>
                </div>
                <div className='flex items-center justify-center md:my-6 my-4'>
                    <div  className="w-[266px]  rounded-full border border-red-500">
                        <div className="p-0 bg-transparent">
                            <Button onClick={TabActiveTwo} className={`hover:bg-transparent w-[132px] bg-transparent text-white md:h-[38px] ${ActiveTab ? 'bg-red-500 rounded-[50px]' : ''}`}>Monthly</Button>
                            <Button className={`text-white hover:bg-transparent bg-transparent w-[132px] ${ActiveTabOne ?  ' bg-red-500 rounded-[50px]' : ''}`} onClick={TabActive}>Annually</Button>
                        </div>
                    </div>
                </div>
                <div className='lg:flex md:grid-cols-2 mx-6 items-center justify-center gap-4 md:mx-5 md:my-3 py-2 md:py-0'>
                    <Card className="bg-transparent border-4 md:my-0 my-4 md:border-2 border-orange-500">
                        <CardHeader>
                            <CardTitle className="text-orange-500 md:text-[18px] text-center">Package</CardTitle>
                            <CardDescription className="uppercase font-bold text-center md:py-5 text-white md:text-[41px]">pro plan</CardDescription>
                            <CardTitle className="text-orange-500 md:text-[15px] text-center">Description</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className=" flex items-center space-x-4 p-4">
                                <p className="m-0 text-white">
                                    Our Pro Plan offers advanced workouts and personalized nutrition coaching to help you reach your goals faster. Sign Up Right Now!    
                                </p>                            
                            </div>
                            <div>
                                <CardTitle className="text-orange-500 md:text-[15px] text-center">Features</CardTitle>
                                <div>
                                    <ul className='list-disc text-white'>
                                        <li>
                                            Access to All Of Our Exercise Videos 
                                        </li>
                                        <li>
                                            Progress Tracking
                                        </li>
                                        <li>
                                            Supportive Online Community
                                        </li>
                                        <li>
                                            Advanced, Personalized Workout Plans
                                        </li>
                                        <li>
                                            Comprehensive Nutrition Coaching
                                        </li>
                                        <li>
                                            Access to Advanced Workout Programs
                                        </li>
                                        <li>
                                            Body Composition Analysis
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="m-0 uppercase text-center text-white "><span className='font-bold text-[28px]'>99$</span>/usdt</p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full hover:bg-[#CD4E17] bg-[#CD4E17]">
                                Choose Your Plan
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="bg-transparent border-4 md:my-4 my-4  md:border-2 border-red-500">
                        <CardHeader>
                            <CardTitle className="text-red-600 md:text-[18px] text-center">Package</CardTitle>
                            <CardDescription className="uppercase font-bold text-center md:py-5 text-white md:text-[41px]">Custom plan</CardDescription>
                            <CardTitle className="text-red-600 md:text-[15px] text-center">Description</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className=" flex items-center space-x-4 p-4">
                                <p className="m-0 text-white">
                                    Our Pro Plan offers advanced workouts and personalized nutrition coaching to help you reach your goals faster. Sign Up Right Now!    
                                </p>                            
                            </div>
                            <div>
                                <CardTitle className="text-red-600 md:text-[15px] text-center">Features</CardTitle>
                                <div>
                                    <ul className='list-disc text-white'>
                                        <li>
                                            Access to All Of Our Exercise Videos 
                                        </li>
                                        <li>
                                            Progress Tracking
                                        </li>
                                        <li>
                                            Supportive Online Community
                                        </li>
                                        <li>
                                            Advanced, Personalized Workout Plans
                                        </li>
                                        <li>
                                            Comprehensive Nutrition Coaching
                                        </li>
                                        <li>
                                            Access to Advanced Workout Programs
                                        </li>
                                        <li>
                                            Body Composition Analysis
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="m-0 uppercase text-center text-white "><span className='font-bold text-[28px]'>149$</span>/usdt</p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full hover:bg-[#D90A14] bg-[#D90A14]">
                                Choose Your Plan
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="bg-transparent border-4 md:my-4 my-4  md:border-2 border-orange-600">
                        <CardHeader>
                            <CardTitle className="text-orange-600 md:text-[18px] text-center">Package</CardTitle>
                            <CardDescription className="uppercase font-bold text-center md:py-5 text-white md:text-[41px]">Beginner plan</CardDescription>
                            <CardTitle className="text-orange-600 md:text-[15px] text-center">Description</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className=" flex items-center space-x-4 p-4">
                                <p className="m-0 text-white">
                                    Our Pro Plan offers advanced workouts and personalized nutrition coaching to help you reach your goals faster. Sign Up Right Now!    
                                </p>                            
                            </div>
                            <div>
                                <CardTitle className="text-orange-600 md:text-[15px] text-center">Features</CardTitle>
                                <div>
                                    <ul className='list-disc text-white'>
                                        <li>
                                            Access to All Of Our Exercise Videos 
                                        </li>
                                        <li>
                                            Progress Tracking
                                        </li>
                                        <li>
                                            Supportive Online Community
                                        </li>
                                        <li>
                                            Advanced, Personalized Workout Plans
                                        </li>
                                        <li>
                                            Comprehensive Nutrition Coaching
                                        </li>
                                        <li>
                                            Access to Advanced Workout Programs
                                        </li>
                                        <li>
                                            Body Composition Analysis
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="m-0 uppercase text-center text-white "><span className='font-bold text-[28px]'>99$</span>/usdt</p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full hover:bg-[#CD4E17]  bg-[#CD4E17]">
                                Choose Your Plan
                            </Button>
                        </CardFooter>
                    </Card>                    
                </div>                
                <div className=' md:hidden hidden lg:flex mx-6  items-center justify-center gap-4 md:mx-5 md:my-3'>
                    <Card className="bg-transparent border-4 md:my-0 my-4  md:border-2 border-orange-500">
                        <CardHeader>
                            <CardTitle className="text-orange-500 md:text-[18px] text-center">Package</CardTitle>
                            <CardDescription className="uppercase font-bold text-center md:py-5 text-white md:text-[41px]">pro plan</CardDescription>
                            <CardTitle className="text-orange-500 md:text-[15px] text-center">Description</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className=" flex items-center space-x-4 p-4">
                                <p className="m-0 text-white">
                                    Our Pro Plan offers advanced workouts and personalized nutrition coaching to help you reach your goals faster. Sign Up Right Now!    
                                </p>                            
                            </div>
                            <div>
                                <CardTitle className="text-orange-500 md:text-[15px] text-center">Features</CardTitle>
                                <div>
                                    <ul className='list-disc text-white'>
                                        <li>
                                            Access to All Of Our Exercise Videos 
                                        </li>
                                        <li>
                                            Progress Tracking
                                        </li>
                                        <li>
                                            Supportive Online Community
                                        </li>
                                        <li>
                                            Advanced, Personalized Workout Plans
                                        </li>
                                        <li>
                                            Comprehensive Nutrition Coaching
                                        </li>
                                        <li>
                                            Access to Advanced Workout Programs
                                        </li>
                                        <li>
                                            Body Composition Analysis
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="m-0 uppercase text-center text-white "><span className='font-bold text-[28px]'>99$</span>/usdt</p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full hover:bg-[#CD4E17] bg-[#CD4E17]">
                                Choose Your Plan
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="bg-transparent border-4 md:my-0 my-4  md:border-2 border-red-500">
                        <CardHeader>
                            <CardTitle className="text-red-600 md:text-[18px] text-center">Package</CardTitle>
                            <CardDescription className="uppercase font-bold text-center md:py-5 text-white md:text-[41px]">Custom plan</CardDescription>
                            <CardTitle className="text-red-600 md:text-[15px] text-center">Description</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className=" flex items-center space-x-4 p-4">
                                <p className="m-0 text-white">
                                    Our Pro Plan offers advanced workouts and personalized nutrition coaching to help you reach your goals faster. Sign Up Right Now!    
                                </p>                            
                            </div>
                            <div>
                                <CardTitle className="text-red-600 md:text-[15px] text-center">Features</CardTitle>
                                <div>
                                    <ul className='list-disc text-white'>
                                        <li>
                                            Access to All Of Our Exercise Videos 
                                        </li>
                                        <li>
                                            Progress Tracking
                                        </li>
                                        <li>
                                            Supportive Online Community
                                        </li>
                                        <li>
                                            Advanced, Personalized Workout Plans
                                        </li>
                                        <li>
                                            Comprehensive Nutrition Coaching
                                        </li>
                                        <li>
                                            Access to Advanced Workout Programs
                                        </li>
                                        <li>
                                            Body Composition Analysis
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="m-0 uppercase text-center text-white "><span className='font-bold text-[28px]'>149$</span>/usdt</p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full hover:bg-[#D90A14] bg-[#D90A14]">
                                Choose Your Plan
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="bg-transparent border-4 md:my-0 my-4  md:border-2 border-orange-600">
                        <CardHeader>
                            <CardTitle className="text-orange-600 md:text-[18px] text-center">Package</CardTitle>
                            <CardDescription className="uppercase font-bold text-center md:py-5 text-white md:text-[41px]">Beginner plan</CardDescription>
                            <CardTitle className="text-orange-600 md:text-[15px] text-center">Description</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className=" flex items-center space-x-4 p-4">
                                <p className="m-0 text-white">
                                    Our Pro Plan offers advanced workouts and personalized nutrition coaching to help you reach your goals faster. Sign Up Right Now!    
                                </p>                            
                            </div>
                            <div>
                                <CardTitle className="text-orange-600 md:text-[15px] text-center">Features</CardTitle>
                                <div>
                                    <ul className='list-disc text-white'>
                                        <li>
                                            Access to All Of Our Exercise Videos 
                                        </li>
                                        <li>
                                            Progress Tracking
                                        </li>
                                        <li>
                                            Supportive Online Community
                                        </li>
                                        <li>
                                            Advanced, Personalized Workout Plans
                                        </li>
                                        <li>
                                            Comprehensive Nutrition Coaching
                                        </li>
                                        <li>
                                            Access to Advanced Workout Programs
                                        </li>
                                        <li>
                                            Body Composition Analysis
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="m-0 uppercase text-center text-white "><span className='font-bold text-[28px]'>99$</span>/usdt</p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full hover:bg-[#CD4E17]  bg-[#CD4E17]">
                                Choose Your Plan
                            </Button>
                        </CardFooter>
                    </Card>                    
                </div>
            </div>
            <div className='flex items-center mt-6 mx-5 md:mt-10 md:mb-4 md:mx-4 justify-between'>
                <div>
                    <p className="m-0 font-bold text-white md:text-[28px] text-[22px] lg:text-[32px]">Our Fitness <span className='text-red-500'>Tools</span></p>
                </div>
                <div className='flex items-center gap-2 justify-center'>
                    <Button className='border-2  md:w-full md:h-[40px] w-[30px] h-[30px] border-white'>
                        <ArrowLeft className='text-white'/>   
                    </Button>
                    <Button className='border-2  md:w-full md:h-[40px] w-[30px] h-[30px] border-white'>
                        <ArrowRight className='text-white'/>                         
                    </Button>
                </div> 
            </div>  
            <div className='md:my-0 my-3'>
                <p className="m-0 text-center text-white">Access a variety of tools to help you reach your fitness goals more effectively</p>
            </div>
            <Carousel opts={{
                align: "start",
            }}
            className="w-full md:my-0 my-5 bg2">

                <CarouselContent className="justify-center">
                    <div className='md:my-8 md:mx-5'> 
                        {Array.from({ length: 1 }).map((_, index) => (

                        <CarouselItem key={index}>
                            <div className='flex md:grid-cols-3 md:my-7  gap-3 items-center md:grid md:grid-rows-2 lg:justify-center'>
                                <div className='fitone'>
                                    <div className='relative top-[180px] start-[-40px] flex items-center gap-3 justify-center'>
                                        <div>
                                            <p className="m-0 text-white">Learn More</p>
                                        </div>
                                        <div>
                                            <MoveRight className='moveR text-red-500 '/>
                                        </div>
                                    </div>
                                </div>
                                <div className='fittwo'>
                                    <div className='relative top-[180px] start-[-40px] flex items-center gap-3 justify-center'>
                                        <div>
                                            <p className="m-0 text-white">Learn More</p>
                                        </div>
                                        <div>
                                            <MoveRight className='moveR text-red-500 '/>
                                        </div>
                                    </div>
                                </div>
                                <div className='fitthree'>
                                    <div className='relative top-[180px] start-[-40px] flex items-center gap-3 justify-center'>
                                        <div>
                                            <p className="m-0 text-white">Learn More</p>
                                        </div>
                                        <div>
                                            <MoveRight className='moveR text-red-500 '/>
                                        </div>
                                    </div>
                                </div>
                                <div className='fitfour'>
                                    <div className='relative top-[180px] start-[-40px] flex items-center gap-3 justify-center'>
                                        <div>
                                            <p className="m-0 text-white">Learn More</p>
                                        </div>
                                        <div>
                                            <MoveRight className='moveR text-red-500 '/>
                                        </div>
                                    </div>
                                </div>
                                <div className='fitfive'>
                                    <div className='relative top-[180px] start-[-40px] flex items-center gap-3 justify-center'>
                                        <div>
                                            <p className="m-0 text-white">Learn More</p>
                                        </div>
                                        <div>
                                            <MoveRight className='moveR text-red-500 '/>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </CarouselItem>   
                        ))}    
                        {/* <CarouselItem>
                            <div className='lg:flex md:grid-cols-2 md:my-7 block gap-3 items-center md:grid md:grid-rows-2 lg:justify-center'>
                                <div className='fitone'>
                                    <div className='relative top-[180px] start-[-40px] flex items-center gap-3 justify-center'>
                                        <div>
                                            <p className="m-0 text-white">Learn More</p>
                                        </div>
                                        <div>
                                            <MoveRight className='moveR text-red-500 '/>
                                        </div>
                                    </div>
                                </div>
                                <div className='fittwo'>
                                    <div className='relative top-[180px] start-[-40px] flex items-center gap-3 justify-center'>
                                        <div>
                                            <p className="m-0 text-white">Learn More</p>
                                        </div>
                                        <div>
                                            <MoveRight className='moveR text-red-500 '/>
                                        </div>
                                    </div>
                                </div>
                                <div className='fitthree'>
                                    <div className='relative top-[180px] start-[-40px] flex items-center gap-3 justify-center'>
                                        <div>
                                            <p className="m-0 text-white">Learn More</p>
                                        </div>
                                        <div>
                                            <MoveRight className='moveR text-red-500 '/>
                                        </div>
                                    </div>
                                </div>
                                <div className='fitfour'>
                                    <div className='relative top-[180px] start-[-40px] flex items-center gap-3 justify-center'>
                                        <div>
                                            <p className="m-0 text-white">Learn More</p>
                                        </div>
                                        <div>
                                            <MoveRight className='moveR text-red-500 '/>
                                        </div>
                                    </div>
                                </div>
                                <div className='fitfive'>
                                    <div className='relative top-[180px] start-[-40px] flex items-center gap-3 justify-center'>
                                        <div>
                                            <p className="m-0 text-white">Learn More</p>
                                        </div>
                                        <div>
                                            <MoveRight className='moveR text-red-500 '/>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </CarouselItem>                    */}
                    </div>
                </CarouselContent>
            </Carousel>          
            <div>
                <div>
                    <span>
                        <p className="m-0 md:text-[24px] text-[20px] lg:text-[32px] font-bold text-center text-white">What our <span className='text-red-500'>Customers Say</span></p>
                    </span>
                </div>
                <div>
                    <p className="m-0 text-white text-center">At This Part you can See Few Of The Many Positive reviews Of Our Customers.</p>
                </div>
                <div className='flex md:mx-6 md:gap-4 md:my-5  bg items-center justify-around'>
                    <div className='md:block hidden'>
                        <img className='md:w-[273px' src={SMan} alt="shirtless-man" />
                    </div>
                    <div className='md:my-0 my-4'>
                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            className=" md:w-[350px]  w-[250px] lg:w-[600px]"
                            >
                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="">
                                    <div className="p-1">
                                        <Card className="bg-red-900  w-[100%]">
                                            <CardContent className=" p-6">
                                                <div className='flex  justify-between'>
                                                    <div>
                                                        <p className="m-0 text-white">Steven Harvard</p>
                                                        <div>
                                                            <p className="m-0 text-[#8B8B8B]">Our Trainer</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img src={Vector} alt="Quotes" />
                                                    </div>
                                                </div>
                                                <div className='md:block hidden'>
                                                    <p className="m-0 text-white">
                                                        {content}
                                                    </p>
                                                </div>
                                                <div className='md:hidden block'>
                                                    <p className="m-0 text-white">
                                                        {content.substring(0,320)}
                                                    </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className='absolute md:end-[80px] md:bottom-2 bottom-[5px]  lg:mt-6 lg:me-3 end-[50px]'>
                            <CarouselPrevious className="rounded-[10px]"/>
                            <CarouselNext className="rounded-[10px]"/>
                            </div>
                        </Carousel>
                    </div>
                    <div className='md:block hidden'>
                        <img src={WierdMan} alt="wierdguy" />
                    </div>
                </div>
            </div>  
            <div className='flex items-center mx-3 mb-3 mt-5 md:mt-10 md:mb-4 md:mx-4 justify-between'>
                <div>
                    <p className="m-0 font-bold text-white md:text-[24px] text-[22px] lg:text-[32px]">Meet our <span className='text-red-500'>Trainers</span></p>
                </div>
                <div className='flex items-center gap-2 justify-center'>
                    <Button className='border-2 md:w-full md:h-[40px] w-[30px] h-[30px] border-white'>
                        <ArrowLeft className='text-white'/>   
                    </Button>
                    <Button className='border-2 md:w-full md:h-[40px] w-[30px] h-[30px] border-white'>
                        <ArrowRight className='text-white'/>                         
                    </Button>
                </div> 
            </div>  
            <div>
                <p className="m-0 text-center text-white">At This Part you can See Few Of The Many Positive reviews Of Our Customers.</p>
            </div>
            <Carousel opts={{
                align: "start",
            }}
            className=" bg2 md:my-6">

                <CarouselContent>
                    <div className='md:my-8 flex mx-2 items-center justify-center md:mx-9'> 
                        {Array.from({ length: 5 }).map((_, index) => (

                        <CarouselItem className="flex items-center gap-5" key={index}>
                            <div className="md:max-w-sm max-w-[200px] bg-[#262626] rounded-lg shadow ">
                                <a href="#">
                                    <img className="rounded-t-lg w-full" src={MuscleMan} alt="MuscleMan" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#fff] dark:text-white">Sam Cole</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">Pesonal Trainer</p>
                                    <div className=' flex items-center gap-3 justify-start'>
                                        <div>
                                            <p className="m-0 text-white">Learn More</p>
                                        </div>
                                        <div>
                                            <MoveRight className='moveR text-red-500 '/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:max-w-sm max-w-[200px] bg-[#262626] rounded-lg shadow ">
                                <a href="#">
                                    <img className="rounded-t-lg w-full" src={MuscleMan} alt="MuscleMan" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#fff] dark:text-white">Sam Cole</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">Pesonal Trainer</p>
                                    <div className=' flex items-center gap-3 justify-start'>
                                        <div>
                                            <p className="m-0 text-white">Learn More</p>
                                        </div>
                                        <div>
                                            <MoveRight className='moveR text-red-500 '/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:max-w-sm max-w-[200px] bg-[#262626] rounded-lg shadow ">
                                <a href="#">
                                    <img className="rounded-t-lg w-full" src={MuscleMan} alt="MuscleMan" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#fff] dark:text-white">Sam Cole</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">Pesonal Trainer</p>
                                    <div className=' flex items-center gap-3 justify-start'>
                                        <div>
                                            <p className="m-0 text-white">Learn More</p>
                                        </div>
                                        <div>
                                            <MoveRight className='moveR text-red-500 '/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:max-w-sm max-w-[200px]bg-[#262626] rounded-lg shadow ">
                                <a href="#">
                                    <img className="rounded-t-lg w-full" src={MuscleMan} alt="MuscleMan" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#fff] dark:text-white">Sam Cole</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">Pesonal Trainer</p>
                                    <div className=' flex items-center gap-3 justify-start'>
                                        <div>
                                            <p className="m-0 text-white">Learn More</p>
                                        </div>
                                        <div>
                                            <MoveRight className='moveR text-red-500 '/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>   
                        ))}    
                    </div>
                </CarouselContent>
                <div className='flex items-center justify-center'>
                    <Button className='capitalize  bg-transparent border border-[#CD4E17]'>
                        <div>
                            <p className="m-0 text-[#CD4E17]">view all</p>
                        </div>
                        <div>
                            <ChevronRight className='text-[#CD4E17]'/>
                        </div>
                    </Button>
                </div>
            </Carousel> 
            <div className='flex items-center md:mt-10 md:mb-4 mx-3 md:mx-4 justify-between'>
                <div>
                    <p className="m-0 font-bold text-white md:text-[28px] text-[22px] lg:text-[32px]">Fitmaker <span className='text-red-500'>Blog Posts</span></p>
                </div>
                <div className='flex items-center gap-2 justify-center'>
                    <Button className='border-2 md:w-full md:h-[40px] w-[30px] h-[30px] border-white'>
                        <ArrowLeft className='text-white'/>   
                    </Button>
                    <Button className='border-2 md:w-full md:h-[40px] w-[30px] h-[30px] border-white'>
                        <ArrowRight className='text-white'/>                         
                    </Button>
                </div> 
            </div>  
            <div>
                <p className="m-0 text-center text-white">Discover essential tips to maximize your workout results and reach your fitness goals faster.</p>
            </div>
            <Carousel opts={{
                align: "start",
            }}
            className=" bg2 md:my-6">

                <CarouselContent className="md:justify-items-stretch justify-items-center w-[100%] block">
                    <div className='md:my-8 flex items-center justify-center md:mx-4'> 
                        {Array.from({ length: 1 }).map((_, index) => (

                        <CarouselItem className="flex items-center gap-5" key={index}>
                            <div className='md:flex items-center gap-3'>
                                <div className='boxer md:my-0 my-5 rounded-[20px]  relative'>
                                    <div className="absolute md:px-4 bottom-[20px] w-full text-white">
                                        <p className="m-0 text-[18px] md:text-[24px]">5 Essential Exercises for Building Muscle</p>
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center  gap-7 '>
                                                <div className='flex items-center justify-center gap-2'>
                                                    <div>
                                                        <CalendarRange/>
                                                    </div>
                                                    <div>
                                                        <p className="md:text-[16px] text-[10px] m-0">August 14</p>
                                                    </div>
                                                </div>
                                                <div className='flex items-center justify-center gap-2'>
                                                    <div>
                                                        <img src={Newspaper} alt='newspaper-icon'/>
                                                    </div>
                                                    <div>
                                                        <p className="m-0 md:text-[16px] text-[10px]">Strength Training</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className=' flex items-center md:gap-3 justify-center'>
                                                    <div>
                                                        <p className="m-0 md:text-[16px] text-[14px] text-white">Learn More</p>
                                                    </div>
                                                    <div>
                                                        <MoveRight className='moveR text-orange-500 '/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='md:w-[600px] '>
                                    <div className='flex gap-3 md:my-2 items-center justify-center'>
                                        <div className='foodOne relative w-1/2'>
                                            <div className='absolute md:px-4 bottom-[20px]'>
                                                <div>
                                                    <p className="m-0 text-white text-[18px] md:text-[24px]">The Ultimate Guide to a Balanced Diet</p>
                                                </div>
                                                <div className='flex items-center justify-between'>
                                                    <div className='md:flex items-center justify-start gap-2'>
                                                        <div>
                                                            <img src={Newspaper} alt="newspaper-icon" />
                                                        </div>
                                                        <div>
                                                            <p className="m-0 md:text-[16px] text-[11px] text-white">Nutrition</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className=' flex items-center gap-3 justify-center'>
                                                            <div>
                                                                <p className="m-0 text-white">Learn More</p>
                                                            </div>
                                                            <div>
                                                                <MoveRight className='moveR text-orange-500 '/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='foodTwo relative w-1/2'>
                                            <div className='absolute md:px-4 bottom-[20px]'>
                                                <div>
                                                    <p className="m-0 text-white text-[18px] md:text-[24px]">the Benefits of HIIT Training</p>
                                                </div>
                                                <div className='flex items-center justify-between'>
                                                    <div className='md:flex items-center justify-start gap-2'>
                                                        <div>
                                                            <img src={Newspaper} alt="newspaper-icon" />
                                                        </div>
                                                        <div>
                                                            <p className="m-0 md:text-[16px] text-[11px] text-white">Cardio</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className=' flex items-center gap-3 justify-center'>
                                                            <div>
                                                                <p className="m-0 text-[16px] text-white">Learn More</p>
                                                            </div>
                                                            <div>
                                                                <MoveRight className='moveR text-orange-500 '/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-3 md:my-0 my-3 items-center justify-center'>
                                        <div className='foodThree relative w-1/2'>
                                            <div className='absolute md:px-4 bottom-[20px]'>
                                                <div>
                                                    <p className="m-0 text-white text-[16px] md:text-[24px]">Home Workouts for Busy people</p>
                                                </div>
                                                <div className='flex items-center justify-between'>
                                                    <div className='md:flex items-center justify-start gap-2'>
                                                        <div>
                                                            <img src={Newspaper} alt="newspaper-icon" />
                                                        </div>
                                                        <div>
                                                            <p className="m-0  md:text-[16px] text-[11px]  text-white">Home Workouts</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className=' flex items-center gap-3 justify-center'>
                                                            <div>
                                                                <p className="m-0 text-white">Learn More</p>
                                                            </div>
                                                            <div>
                                                                <MoveRight className='moveR text-orange-500 '/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='foodFour relative w-1/2'>
                                            <div className='absolute md:px-4 bottom-[20px]'>
                                                <div>
                                                    <p className="m-0 text-white text-[16px] md:text-[24px]">How to Always Stay Motivated </p>
                                                </div>
                                                <div className='flex items-center justify-between'>
                                                    <div className='md:flex items-center justify-start gap-2'>
                                                        <div>
                                                            <img src={Newspaper} alt="newspaper-icon" />
                                                        </div>
                                                        <div>
                                                            <p className="m-0  md:text-[16px] text-[11px]  text-white">Motivation</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className=' flex items-center gap-3 justify-center'>
                                                            <div>
                                                                <p className="m-0 text-white">Learn More</p>
                                                            </div>
                                                            <div>
                                                                <MoveRight className='moveR text-orange-500 '/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>   
                        ))}    
                    </div>
                </CarouselContent>
                <div className='flex items-center justify-center'>
                    <Button className='capitalize bg-transparent border border-[#CD4E17]'>
                        <div>
                            <p className="m-0 text-[#CD4E17]">view all</p>
                        </div>
                        <div>
                            <ChevronRight className='text-[#CD4E17]'/>
                        </div>
                    </Button>
                </div>
            </Carousel> 
            <div className='md:flex md:mx-0 mx-3 items-center justify-center'>
                <div className='md:w-1/2'>
                    <div>
                        <p className="m-0 text-white font-bold md:text-[28px] text-[22px] lg:text-[32px]">Join Our <span className='text-red-500'>Fitness Community</span></p>
                    </div>
                    <div className='md:mb-0 mb-5'>
                        <p className="m-0 md:text-[16px]  text-[14px] text-white">Sign up now to unlock exclusive access to personalized workout plans, expert coaching, and a supportive community that will help you achieve your fitness goals.</p>
                    </div>
                    <div className='bg md:mb-0 mb-6'>
                        <div className='flex gap-4 items-center justify-center'>
                            <div className='bg-[#1D1D1D] md:px-4 md:py-0 py-2 md:my-3 md:w-[290px] md:h-[114px]'>
                                <div className='md:my-2'>
                                    <p className="m-0 text-center text-red-500">
                                        Personalised <span className='text-white'>Workout Plans</span>
                                    </p>
                                </div>
                                <div>
                                    <p className="m-0 text-[14px] text-white md:text-[12px]">
                                    Customized routines that match your fitness level and goals, ensuring you achieve the best results in the most efficient way.
                                    </p>
                                </div>
                            </div>
                            <div className='bg-[#1D1D1D] md:px-4 px-3 md:py-0 py-2 md:my-3 md:w-[290px] md:h-[114px]'>
                                <div className='md:my-2'> 
                                    <p className="m-0 text-center text-red-500">
                                        Expert <span className='text-white'>Coaching</span>
                                    </p>
                                </div>
                                <div>
                                    <p className="m-0 text-[14px] md:text-[12px] text-white">
                                        {"Work with certified trainers who will guide you every step of the way to ensure you're on the right track."}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 md:mb-4 items-center justify-center'>
                            <div className='bg-[#1D1D1D] md:px-4 px-3 my-2 md:my-3 md:w-[290px] md:h-[114px]'>
                                <div className='md:my-2'>
                                    <p className="m-0 text-red-500 text-center">
                                        Community <span className='text-white'>Support</span>
                                    </p>
                                </div>
                                <div>
                                    <p className="m-0 text-[14px] md:text-[12px] text-white">
                                        {"Join a vibrant community of fitness enthusiasts where you can share experiences, get motivated, and stay inspired."}
                                    </p>
                                </div>
                            </div> 
                            <div className='bg-[#1D1D1D] md:px-4 px-3 my-2 md:my-3 md:w-[290px] md:h-[114px]'>
                                <div className='md:my-2'>
                                    <p className="m-0 text-center text-red-500">
                                        Exclusive <span className='text-white'>Resources</span>
                                    </p>
                                </div>
                                <div>
                                    <p className="m-0 text-[14px] md:text-[12px] text-white">
                                        {"Access premium content, including video tutorials, nutrition guides, and member-only discounts on fitness gear."}
                                    </p>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
                <div className='md:w-[600px]'>
                    <Tabs defaultValue="signup" className="bg-red-900 h-[372px] ">
                        <TabsList className="grid bg-red-900 w-full grid-cols-2">
                            <TabsTrigger  className="hover:border-b-2" value="signup">Sign Up</TabsTrigger>
                            <TabsTrigger className="hover:border-b-2" value="login">Login</TabsTrigger>
                        </TabsList>
                        <TabsContent value="signup">
                            <Card className="bg-red-900 border-none"> 
                                <CardContent className="space-y-2">
                                    <div className="space-y-1 ">
                                        <Label htmlFor="name">Name</Label>
                                        <div className='border flex items-center justify-center border-gray-200'>
                                            <div  className='md:ms-3'>
                                                <User/>
                                            </div>
                                            <Input className='border-none' id="name" placeholder="Enter Your Name" />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="email">Email</Label>
                                        <div className='flex items-center border border-gray-200 justify-center'>
                                            <div className='md:ms-3'>
                                                <Mail/>
                                            </div>
                                            <Input className="border-none" id="username" placeholder="Enter Your E-mail"  />
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="pb-3 flex items-center justify-center ">
                                    <Button className='w-[100%] bg-red-500'>Sign Up</Button>
                                </CardFooter>
                                <div className='flex items-center gap-2 justify-center'>
                                    <div>
                                        <div className="hr"></div>
                                    </div>
                                    <div>
                                        <p className="m-0">or</p>
                                    </div>
                                    <div>
                                        <div className="hr"></div>
                                    </div>
                                </div>
                                <div className="mx-5">
                                    <Button className='bg-transparent w-full  hover:bg-transparent border border-gray-100'>
                                        <div>
                                            <img src={Google} alt="google-icon"/>
                                        </div>
                                        <div>
                                            <p className="m-0">
                                                Sign up with Google
                                            </p>
                                        </div>
                                    </Button>
                                </div>
                                
                            </Card>
                        </TabsContent>
                        <TabsContent  value="login">
                            <Card className="bg-red-900 border-none">                       
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="email">Email</Label>
                                        <div className='flex items-center border border-gray-200 justify-center'>
                                            <div className='md:ms-3'>
                                                <Mail/>
                                                </div>
                                            <Input className="border-none" id="username" placeholder="Enter Your E-mail"  />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                    <Label htmlFor="new">Password</Label>
                                    <Input id="new" type="password" placeholder='*********' />
                                    </div>
                                </CardContent>
                                <CardFooter className="my-5">
                                    <Button className='bg-red-500 w-full '>Submit</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
            <div className='text-white my-10  mx-auto '>
                <div>
                    <div className='my-3'>
                        <p className="m-0 text-center md:text-[32px] text-white">FAQ</p>
                    </div>
                    <Accordion type="single" collapsible className="mx-auto border border-red-600 w-[80%]">
                        <AccordionItem className=" border border-red-600" value="item-1">
                            <AccordionTrigger >What is FitMaker and how can it help me reach my fitness goals?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className=" border border-red-600" value="item-2">
                            <AccordionTrigger>How do I get started with a workout plan on FitMaker?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className=" border border-red-600" value="item-3">
                            <AccordionTrigger>What is included in the Custom Plan?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you
                            prefer.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className=" border border-red-600" value="item-3">
                            <AccordionTrigger>Can I change my plan after signing up?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you
                            prefer.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className=" border border-red-600" value="item-3">
                            <AccordionTrigger>What kind of support can I expect from my trainer?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you
                            prefer.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>        
            </div>
            <Footer/>
        </div>
    );
}

export default Home;