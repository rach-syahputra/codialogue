import React from 'react'

const LeaderboardsList = () => {
  return (
    <div className='flex flex-col gap-4 ml-[200px] px-8 py-4'>
      <h1 className='text-lg font-bold'>Active User Standings</h1>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between text-gray-500'>
          <span>User</span>
          <span>Score</span>
        </div>
        <ul className='flex flex-col gap-2'>
          <li className='flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
              <div className='bg-black w-4 h-4 rounded-full'></div>
              <span>User Name</span>
            </div>
            <span>100</span>
          </li>
          <li className='flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
              <div className='bg-black w-4 h-4 rounded-full'></div>
              <span>User Name</span>
            </div>
            <span>100</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LeaderboardsList
