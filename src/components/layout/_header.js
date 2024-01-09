import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Bars4Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Header = () => {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menu = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Services',
            link: '/about'
        },
        {
            name: 'Products',
            link: '/products'
        },
        {
            name: 'People & Culture',
            link: '/peopleandculture'
        },
        {
            name: 'Contact',
            link: '/contact'
        }
    ]

    return (
        <header class={`fixed top-0 left-0 w-screen z-[999] transition-colors duration-500 ease-in-out text-md ${isMobileMenuOpen ? 'bg-kroppa' : 'bg-white'}`}>
            <div className='h-100 flex items-center justify-between px-6 md:px-20 py-5' >
                <Link href='/'>
                    <Image src='/img/logo.svg' alt='Logo Kroppa' width={200} height={200} />
                </Link>

                <div className='md:hidden'>
                    <Bars4Icon className={`h-6 w-6 ${isMobileMenuOpen && 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                </div>

                <div className='hidden md:flex md:space-x-16'>
                    {menu.map((item, index) => (
                        <a key={index} href={item.link}
                            className={router.pathname === item.link ? 'font-semibold' : ''}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className='flex flex-col items-start px-6 md:hidden min-h-screen bg-kroppa text-white'>
                    {menu.map((item, index) => (
                        <a key={index} href={item.link} className={`my-2 ${router.pathname === item.link ? 'font-bold' : ''}`}>
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    )
}

export default Header