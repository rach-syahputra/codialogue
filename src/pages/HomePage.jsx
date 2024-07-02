import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncPopulateUsersAndThreads } from '../states/shared/action'
import ThreadsList from '../components/ThreadsList'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const HomePage = () => {
  const dispatch = useDispatch()
  const { threads, users } = useSelector((state) => state)

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads())
  }, [])

  const threadsList = threads?.map((thread) => ({
    ...thread,
    owner: users?.find((user) => user.id === thread.ownerId),
  }))

  return (
    <div className='mt-[70px] pb-4'>
      <Navbar />
      <div className='w-[1024px] m-auto'>
        <Sidebar />
        <ThreadsList threads={threadsList} />
      </div>
    </div>
  )
}

export default HomePage
