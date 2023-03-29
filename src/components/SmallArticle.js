import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CategoryBadge from './CategoryBadge';

const SmallArticle = ({img, shortDesc}) => {
  console.log(img);
  return (
    <div class="single-post mb-4 group">
      <Link class="flex items-center gap-4" href="/pierwszy-post">
      {img && (<Image src="https://media.graphassets.com/K9zZGA2UTFG6wviwRocZ" width="100" height="200" className='w-40 rounded-md h-20 object-cover object-center md:group-hover:object-bottom transition-all duration-[2s] linear'></Image>)}
      <div>
        <p class="text-base font-bold group-hover:text-green-700">Tytuł najnowszej wiadomości</p>
      {shortDesc && (<p class="text-xs pb-1 max-w-xl font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iste natus. Provident modi ex dignissimos nemo iste ea reiciendis perspiciatis. Fuga laborum nesciunt nobis, atque facilis assumenda enim amet molestias!</p>)}
      <div className="info flex items-center gap-4">
    <div className="categories">
          <CategoryBadge />
          <CategoryBadge />
    </div>
    <span className='text-xs py-1 font-medium text-slate-500'>10:51 10.04.2023r.</span>
    </div></div></Link>
    </div>
  )
}

export default SmallArticle