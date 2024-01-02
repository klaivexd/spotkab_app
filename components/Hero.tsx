'use client';
import Image from "next/image";
import TypeWriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="bg_dark_blue padding-container flex flex-col gap-11 py-10 pb-32 md:gap-20 lg:py-20 xl:flex-row">
        <div className="max-container relative z-20 flex flex-1 flex-col justify-center items-center">
          <div className="hero-map"></div>
          <Image 
            src="header-img1.svg"
            alt="Header Image"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
        <div className="max-container relative flex flex-1 flex-col">
        <h1 className="bold-40 md:bold-88 lg:bold-88">Your</h1>
            <span className="text-pink-600 bold-40 md:bold-88 lg:bold-88">
            <TypeWriter
              options={{
                strings: [
                  "Tour Guide",
                  "Companion",
                ],
                autoStart: true,
                delay: 20,
                loop: true,
              }}
            />
            </span>
          
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            Explore the city of Kabankalan. Wherever, whenever.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-md">
              <div className="text-2xl mb-2">
                <Image
                  src="store1.svg"
                  alt="Stores"
                  width={50}
                  height={50}
                />
              </div>
              <div className="font-bold">Stores</div>
            </div>
            <div className="p-4 rounded-md">
              <div className="text-2xl mb-2">
                <Image
                  src="store2.svg"
                  alt="Stores"
                  width={50}
                  height={50}
                />
              </div>
              <div className="font-bold">Bank</div>
            </div>
            <div className="p-4 rounded-md">
              <div className="text-2xl mb-[15px]">
                <Image
                  src="store3.svg"
                  alt="Stores"
                  width={50}
                  height={50}
                />
              </div>
              <div className="font-bold">Groceries</div>
            </div>
            <div className="p-4 rounded-md">
              <div className="text-2xl mb-[8px]">
                <Image
                  src="store4.svg"
                  alt="Stores"
                  width={50}
                  height={50}
                />
              </div>
              <div className="font-bold">Restaurants</div>
            </div>
            <div className="p-4 rounded-md">
              <div className="text-2xl mb-2">
                <Image
                  src="store5.svg"
                  alt="Stores"
                  width={40}
                  height={40}
                />
              </div>
              <div className="font-bold">Pharmacies</div>
            </div>
            <div className="p-4 rounded-md">
              <div className="text-2xl mt-[20px]">
                <Image
                  src="store6.svg"
                  alt="Stores"
                  width={50}
                  height={50}
                />
              </div>
              <div className="font-bold">Hotels</div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero