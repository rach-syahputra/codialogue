import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncPopulateUsersAndThreads } from '../states/shared/action'
import ThreadsList from '../components/ThreadsList'
import Navbar from '../components/Navbar'

const HomePage = () => {
  const threads = useSelector((state) => state.threads)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads())
  }, [])

  return (
    <div className='pt-[70px]'>
      <Navbar />
      <ThreadsList threads={threads} />
    </div>
  )
}

export default HomePage
