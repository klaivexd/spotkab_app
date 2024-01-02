'use client'
import { useState } from 'react';
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="logo-icon.svg" alt="Logo" width={200} height={30} />
      </Link>
      <ul className={`h-full gap-12 lg:flex ${isMenuOpen ? 'menu-open' : 'hidden'}`}>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-15 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
          
      <div className={`lg:flexCenter hidden ${isMenuOpen ? 'menu-open' : ''}`}>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in">
            <Button type="button" title="Get Started" variant="btn_dark_blue" />
          </Link>
        </SignedOut>
      </div>

      <Image
        src="menu-icon.svg"
        alt="Menu"
        width={30}
        height={30}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;