import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import CategoryBadge from './CategoryBadge'


const BigArticle = ({description, image, slug, title}) => {
  return (
    <div className="group cursor-pointer">
      <Link href="/pierwszy-post">
    <Image src="https://media.graphassets.com/K9zZGA2UTFG6wviwRocZ" width="920" height="500" className='w-full rounded-md h-60 md:h-80 object-cover object-center md:group-hover:object-bottom transition-all duration-[2s] linear'></Image></Link>
    <Link href="/pierwszy-post">
    {title && (<p className='text-2xl pt-3 font-bold md:group-hover:text-green-700  transition-all duration-100 ease-in'>{title}</p>)}
    </Link>
    <div className="info flex items-center gap-4">
    <div className="categories">
          <CategoryBadge />
          <CategoryBadge />
    </div>
    <span className='text-xs py-1 font-medium text-slate-500'>10:51 10.04.2023r.</span>
    </div>
    <Link href="/pierwszy-post">
    <p className='text-sm pt-1 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iste natus. Provident modi ex dignissimos nemo iste ea reiciendis perspiciatis. Fuga laborum nesciunt nobis, atque facilis assumenda enim amet molestias!</p>
    </Link>
    {/* <Link href="/pierwszy-post">
      <ButtonPrimary>Czytaj więcej</ButtonPrimary>
    </Link> */}
  </div>
  )
}

export default BigArticle