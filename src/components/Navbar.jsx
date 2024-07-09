import React, { useState } from 'react'
import logo from '../assets/CoDialogue.png'
import { useDispatch, useSelector } from 'react-redux'
import { asyncUnsetAuthUser } from '../states/authUser/action'
import { useNavigate } from 'react-router-dom'
import plus from '../assets/plus.png'
import Button from './Button'

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

  const onCreateThread = () => {
    navigate('/threads/new-thread')
  }

  return (
    <div className='flex items-center px-4 justify-center w-full h-[70px] bg-white border-b-[1px] border-gray-300 fixed top-0'>
      <div className='flex w-[1024px] max-w-[1024px] items-center justify-between m-auto'>
        <img src={logo} alt='' className='h-8' />
        {authUser
          ? (
            <div className='flex gap-8'>
              <div className='flex gap-2 items-center cursor-pointer' onClick={onCreateThread}>
                <img src={plus} alt='' className='w-3 h-3' />
                <span>Create Thread</span>
              </div>
              <div className='relative'>
                <img
                  src={authUser.avatar}
                  alt=''
                  className='w-7 h-7 rounded-full'
                  onClick={handleOpenProfileMenu}
                />
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
            )
          : (
            <Button label='Log In' onClick={onLogin}/>
            )}
      </div>
    </div>
  )
}

export default Navbar
