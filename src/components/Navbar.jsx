import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className='flex justify-between items-center h-20 px-4'>
            <div>
                <h1 className='logo'>
                    VISA VOYAGE</h1>
            </div>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
            </ul>
            <div className='hidden md:flex'>
                <BiSearch size={25} className='mx-3' />
                <BsPerson size={25} />
            </div>
            <div className='md:hidden'>
            <div onClick={handleNav}>
                {
                    nav ? <AiOutlineClose className='text-black z-10' size={20} /> : <HiOutlineMenuAlt4 size={20} />
                }
            </div>


            <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
                <ul>
                    <h1 className='logo'> VISA VOYAGE</h1>
                    <li className='border-b'>Home</li>
                    <li className='border-b'>Destinations</li>
                    <li className='border-b'>Travel</li>
                    <li className='border-b'>View</li>
                    <li className='border-b'>Book</li>
                </ul>
                <div className='flex flex-col '>
                    <button className='my-4'>Search</button>
                    <button>Account</button>
                </div>
                <div className='flex justify-between my-6'>
                    <FaFacebook className='icon' />
                    <FaTwitter className='icon' />
                    <FaInstagram className='icon' />
                    <FaYoutube className='icon' />
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default Navbar
