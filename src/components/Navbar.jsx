import React, { useEffect, useState } from 'react'
import logo from '../assets/CoDialogue.png'
import { useDispatch, useSelector } from 'react-redux'
import firstLetter from '../utils/firstLetter'
import { asyncSetAuthUser, asyncUnsetAuthUser } from '../states/authUser/action'
import { useNavigate } from 'react-router-dom'
import plus from '../assets/plus.png'
import api from '../utils/api'

const Navbar = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = localStorage.getItem('accessToken')
  const name = localStorage.getItem('auth-user-name')

  const handleOpenProfileMenu = () => {
    setOpenProfileMenu(!openProfileMenu)
  }

  const onLogin = () => {
    navigate('/login')
  }

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser())
  }

  const onCreateThread = () => {
    navigate('/threads/new-thread')
  }

  return (
    <div className='flex items-center justify-center w-full h-[70px] bg-white border-b-[1px] border-gray-300 fixed top-0'>
      <div className='flex w-[1024px] max-w-[1024px] items-center justify-between m-auto'>
        <img src={logo} alt='' className='h-8' />
        {token ? (
          <div className='flex gap-8'>
            <div className='flex gap-2 items-center cursor-pointer' onClick={onCreateThread}>
              <img src={plus} alt='' className='w-3 h-3' />
              <span>Create Thread</span>
            </div>
            <div className='relative'>
              <div
                className='flex items-center justify-center w-6 h-6 bg-black text-sm leading-[24px] text-white rounded-full cursor-pointer'
                onClick={handleOpenProfileMenu}
              >
                {firstLetter(name)}
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
