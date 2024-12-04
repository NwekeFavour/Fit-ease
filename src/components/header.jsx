/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle 
  } from "./ui/navigation-menu"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
  import Header from '../assets/images/header.svg'
import { Link } from 'react-router-dom';
import { Menu, Search } from 'lucide-react';
import { Button } from './ui/button';
import { cva } from 'class-variance-authority';
import { Input } from './ui/input';
function HeaderContent() {
    const [activeLink, setActiveLink] = useState(null)
    const [openNav, isopenNav] = useState(false)

    const links = ["Home", "Membership", "About"];

    const handleLinkClick = (index) => {
      setActiveLink(index);
    };

    const ActiveLinkTrigger =cva(
      'bg-gradient-to-r from-[#D90A14] to-[#CD4E17] h-[3px] w-[100%]'
    )

    const toggleisnavOpen = () => {
      if(openNav == true){
        isopenNav(false)
      } else{
        isopenNav(true)
      }
    }
  

    return (
      <div className='flex  items-center gap-4 lg:mx-0 md:mx-5 justify-between mx-4 md:py-0 py-3 lg:justify-center md:justify-between'>            
        <NavigationMenu className='md:block lg:flex md:my-4 justify-center'>
          <NavigationMenuList className='flex'>
            <Link className='' to="/" >
              <img src={Header} alt="Header_svg"/>
            </Link>
            <NavigationMenuItem className='md:ps-3'>
              <Button className='lg:block hidden bg-[#262626] '>
                  <Search className='md:w-[25px] md:h-[25px]'/>
              </Button>
              <div className='lg:hidden ps-4 rounded-[10px] bg-[#262626] items-center flex'>
                <Search className='md:w-[15px] text-white  md:h-[25px]'/>
                <div>
                  <Input placeholder='Search' className='border-none'/>
                </div>
              </div>
            </NavigationMenuItem>            
            <div className={`lg:flex  lg:relative fixed lg:h-0 h-[100vh] start-[0px] lg:top-0 w-[70%] lg:w-[50%] top-[1px] lg:bg-transparent  bg-[#262626] ${openNav ? 'block' : 'hidden'} justify-items-start items-center lg:px-12 gap-16`}>
              {
                links.map((text, index) => (
                  <NavigationMenuItem className='md:py-0 py-2' key={index}>
                    <Link  onClick={(e) => {
                      handleLinkClick(index);
                    }}
                    
                    className={`  font-bold text-white p-2`} to={`/${text.toLowerCase().replace(/\s+/g, '-')}`}>
                      {text}
                    </Link>
                    <div className={`${activeLink == index ? ActiveLinkTrigger() : ''}`}></div>
                  </NavigationMenuItem>
                ))
              }
              <div className="hr md:hidden block"></div>
              <div className='lg:flex md:block items-center md:justify-between gap-9'>
                <DropdownMenu>
                  <DropdownMenuTrigger className="md:py-0 py-3  font-bold text-white ps-2 md:ps-2 block  outline-none">Programs</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger className="md:py-0 py-3  font-bold text-white ps-2 md:ps-2 outline-none">Coaching</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className='lg:flex hidden gap-5'>
              <Button className='bg-transparent rounded-[15px] focus:bg-transparent  border border-[#CD4E17]'>Login</Button>
              <Button className='bg-[#D90A14] md:w-[80px]'>Sign up</Button>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="md:block lg:hidden block">
          <Menu onClick={() => toggleisnavOpen()} className='text-white'/>
        </div>
      </div>
    );
}

export default HeaderContent;