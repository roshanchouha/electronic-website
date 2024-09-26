import React from 'react'

export const Button = ({name}) => {
   
  // const sm = 'w-36 h-8'
  return (
      <button className={`w-52 h-10 rounded text-white font-poppins bg-secondary `}>{name}</button>
  )
}
 