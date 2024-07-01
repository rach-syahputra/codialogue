import React from 'react'
import logo from '../assets/CoDialogue.png'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const authUser = useSelector((state) => state.authUser)

  return (
    <div className='flex items-center justify-center w-full h-[70px] border-b-[1px] border-gray-300 fixed top-0'>
      <div className='flex w-[1024px] max-w-[1024px] justify-between m-auto'>
        <img src={logo} alt='' />
        {authUser ? (
          ''
        ) : (
          <button className='bg-blue-950 text-white px-4 py-2 rounded-md'>Log In</button>
        )}
      </div>
    </div>
  )
}

export default Navbar
