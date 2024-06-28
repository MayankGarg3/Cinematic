import React from 'react'

export const Button = ({children}) => {
  return (
    <button className="w-64 text-sm font-semibold rounded text-white py-2 px-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... ">{children}</button>
  )
}
