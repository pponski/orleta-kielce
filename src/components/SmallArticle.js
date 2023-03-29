import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CategoryBadge from './CategoryBadge';

const SmallArticle = ({img, shortDesc, imgUrl}) => {

  if(img){
    var styles = 'single-post mb-4 group cursor-pointer flex items-center gap-0 md:gap-4';
  } else {
    var styles = 'single-post mb-4 group cursor-pointer flex items-center gap-0';
  }


  return (
    <div className={styles}>
      <Link href="/pierwszy-post" className=''>
      {img && (<Image src={imgUrl ? imgUrl : 'https://media.graphassets.com/K9zZGA2UTFG6wviwRocZ'} width="340" height="200" className='hidden md:block rounded-md h-40 object-cover object-center md:group-hover:object-bottom transition-all duration-[2s] linear'></Image>)}
      </Link>
      <div>
        <Link href="/pierwszy-post">
        <p class="text-base font-bold group-hover:text-green-700">Tytuł najnowszej wiadomości</p>
        </Link>
      <Link href="/pierwszy-post">
      {shortDesc && (<p class="text-xs pb-1 max-w-xl font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iste natus. Provident modi ex dignissimos nemo iste ea reiciendis perspiciatis.</p>)}
      </Link>
      <div className="info flex flex-col items-start lg:flex-row lg:gap-4 lg:items-center">
    <div className="categories">
          <CategoryBadge />
          <CategoryBadge />
    </div>
    <span className='text-xs py-1 font-medium text-gray-500'>10:51 10.04.2023r.</span>
    </div>
    </div>
    </div>
  )
}

export default SmallArticle