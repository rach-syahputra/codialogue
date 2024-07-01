import React, { useState } from 'react'
import logo from '../assets/CoDialogue.png'
import { useDispatch, useSelector } from 'react-redux'
import firstLetter from '../utils/firstLetter'
import { asyncUnsetAuthUser } from '../states/authUser/action'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState(false)
  const authUser = useSelector((state) => state.authUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleOpenProfileMenu = () => {
    setOpenProfileMenu(!openProfileMenu)
  }

  const onLogin = () => {
    navigate('/login')
  }

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser())
  }

  return (
    <div className='flex items-center justify-center w-full h-[70px] border-b-[1px] border-gray-300 fixed top-0'>
      <div className='flex w-[1024px] max-w-[1024px] items-center justify-between m-auto'>
        <img src={logo} alt='' className='h-8' />
        {authUser ? (
          <div className='relative'>
            <div
              className='flex items-center justify-center w-6 h-6 bg-black text-sm leading-[24px] text-white rounded-full cursor-pointer'
              onClick={handleOpenProfileMenu}
            >
              {firstLetter(authUser.name)}
            </div>
            {openProfileMenu && (
              <button
                className='absolute top-7 right-0 border border-gray-300 px-4 py-2 bg-white cursor-pointer'
                onClick={onLogout}
              >
                Logout
              </button>
            )}
          </div>
        ) : (
          <button className='bg-blue-950 text-white px-4 py-2 rounded-md' onClick={onLogin}>
            Log In
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
