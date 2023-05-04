import React from 'react'
import Link from 'next/link'

const CategoryBadge = () => {
  return (
    <Link href="#">
      <p className="bg-gray-200 rounded-full px-3 text-xs py-[2px] text-gray-500 hover:bg-gray-300 hover:text-gray-600 transition-all duration-150 ease-in">Akademia</p>
    </Link>
  )
}

export default CategoryBadge