import Image from 'next/image'
import React from 'react'

const Sponsors = () => {
  return (
    <>
    <p className='heading'>Sponsorzy</p>
    <div className="group sponsor cursor-pointer">
    <Image src="https://media.graphassets.com/ht7bZwOoRVuMgsCNUFpt" width="120" height="120" className='w-full grayscale rounded-md h-auto object-cover object-center group-hover:grayscale-0 transition duration-200'></Image>
    <p className='pt-3 text-xl font-bold'>BIERNAT DACHY</p>
    <p className='text-xs'>BUDOWNICTWO</p>
    <p className='text-sm pt-1 pb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam accusantium ducimus nisi aperiam ipsum illo.</p>
    </div>
    </>
  )
}

export default Sponsors