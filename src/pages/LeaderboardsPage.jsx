import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import LeaderboardsList from '../components/LeaderboardsList'

const LeaderboardsPage = () => {
  return (
    <div className='mt-[70px] pb-4'>
      <Navbar />
      <div className='w-[1024px] m-auto'>
        <Sidebar />
        <LeaderboardsList />
      </div>
    </div>
  )
}

export default LeaderboardsPage
