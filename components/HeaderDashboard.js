import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import Button from "./Button"
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/solid'

const HeaderDashboard = () => {
  return (
    <nav className="sticky top-0 z-50 grid grid-cols-3 padding-container bg-white shadow-md p-5 md:px-10">
        {/* LEFT */}
        <div>
            <Image
                src="logo-icon.svg"
                alt="Logo"
                width={80}
                height={80}
                className="relative cursor-pointer"
            />
        </div>

        {/* MIDDLE */}
        <div className="flex items-center md:border-2 rounded-full md:shadow-md">
            <input className="flex-grow overflow-hidden h-8 pl-5 bg-transparent outline-none text-md text-gray-600 placeholder-gray-400" type="text" placeholder="Search"></input>
            <SearchIcon className="hidden lg:inline-flex h-8 bg-slate-400 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
        </div>

        {/* RIGHT */}
        <div className="flex max-container items-center justify-end space-x-4 text-gray-600 md:border-2 rounded-full p-5">
            <p className="hidden md:inline-flex">User Profile</p>
        <SignedIn>
            <UserButton afterSignOutUrl="/" />
        </SignedIn>
        </div>
    </nav>
  )
}

export default HeaderDashboard