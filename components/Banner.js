import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="relative h-[250px] sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[750px]">
        <Image
            src="/banner.jpeg"
            alt="Banner"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="opacity-75"
        />
        <div className="absolute top-1/2 w-full bg-white bg-opacity-50 text-center">
          <p className="text-lg text-blue-950 p-2 font-bold sm:text-xl rounded-full">Explore Kabankalan Today!</p>
        </div>
    </div>
  )
}

export default Banner