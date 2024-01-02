import Hero from "@/components/Hero";
import GetApp from "@/components/GetApp";
import { UserButton } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <GetApp />
      <Footer />
    </>
  )
}