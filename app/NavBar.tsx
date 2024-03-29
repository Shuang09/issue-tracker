'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { IoBug } from "react-icons/io5";
import classnames from 'classnames';

const NavBar = () => {
    const currentPath = usePathname();

    const links =[
        { label: 'Dashbaord', href: '/' },
        { label: 'Issues', href: '/issues' },
    ]

    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href="/"><IoBug/></Link>
            <ul className='flex space-x-6'>
                {links.map(link =>
                <Link
                    key={link.href}
                    className={classnames({
                        'text-zinc-900': link.href === currentPath,
                        'text-zinc-500': link.href !== currentPath,
                        'hover:text-zince-800 transition-colors': true
                    })}
                    href={link.href}>{link.label}</Link>)}
            </ul>
        </nav>
    )
}

export default NavBar