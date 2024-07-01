import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncPopulateUsersAndThreads } from '../states/shared/action'
import ThreadsList from '../components/ThreadsList'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const HomePage = () => {
  const threads = useSelector((state) => state.threads)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads())
  }, [])

  return (
    <div className='mt-[70px]'>
      <Navbar />
      <div className='w-[1024px] m-auto'>
        <Sidebar />
        <ThreadsList threads={threads} />
      </div>
    </div>
  )
}

export default HomePage
