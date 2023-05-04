import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CategoryBadge from './CategoryBadge';

const SmallArticle = ({article}) => {

  if(article){
    var styles = 'single-post mb-4 group cursor-pointer flex items-center gap-0 md:gap-4';
  } else {
    var styles = 'single-post mb-4 group cursor-pointer flex items-center gap-0';
  }

  return (
    <div className={styles}>
      {article.slug && (<Link href={article.slug} className=''>
      {article.image.url && (<Image src={article.image.url} width="340" height="200" className='hidden md:block rounded-md h-40 object-cover object-center md:group-hover:object-bottom transition-all duration-[2s] linear'></Image> )}
      </Link>)}
      <div>
      {article.slug && (<Link href={article.slug}>
        <p class="text-base font-bold group-hover:text-green-700">{article.title}</p>
        </Link>)}
        {article.slug && (<Link href={article.slug}>
      {article.shortDescription && (<p class="text-xs pb-1 max-w-xl font-normal">{article.shortDescription}</p>)}
      </Link>)}
      <div className="info flex flex-col items-start lg:flex-row lg:gap-4 lg:items-center">
    {/* <div className="categories">
          <CategoryBadge />
          <CategoryBadge />
    </div> */}
    {/* <span className='text-xs py-1 font-medium text-gray-500'>10:51 10.04.2023r.</span> */}
    </div>
    </div>
    </div>
  )
}

export default SmallArticle