'use client'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from "./Button"
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';

const HeaderDashboard = () => {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    };

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
            <input 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-grow overflow-hidden h-8 pl-5 bg-transparent outline-none text-md text-gray-600 
            placeholder-gray-400" 
            type="text" 
            placeholder="Search"></input>
            <SearchIcon className="hidden md:inline-flex lg:inline-flex h-8 bg-slate-400 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
        </div>

        {/* RIGHT */}
        <div className="flex max-container items-center justify-end space-x-4 text-gray-600 rounded-full p-5">
            <p className="hidden md:inline-flex">User Profile</p>
        <SignedIn>
            <UserButton afterSignOutUrl="/" />
        </SignedIn>
        </div>

        {/* Search Input Calendar Pop-up */}
        {searchInput && (
            <div className="flex flex-col col-span-3 mx-auto rounded border-x-2 shadow-lg border-b-2">
                <div className="flexBetween mx-8 text-slate-900 p-2 font-bold">
                    <div>
                        <h1>Start Date</h1>
                    </div>
                    <div>
                        <h1>End Date</h1>
                    </div>
                </div>
                <DateRange 
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={["#092635"]}
                    onChange={handleSelect}
                />
            </div>
        )}
    </nav>
  )
}

export default HeaderDashboard