import React from 'react'

const ButtonPrimary = ({children}) => {
  return (
    <div className="inline-block mt-1 bg-green-700 text-white px-5 py-2 rounded-md text-sm md:hover:scale-[1.05] transition-all duration-150 ease-in">
      {children}
    </div>
  )
}

export default ButtonPrimary