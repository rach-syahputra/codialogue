import React from 'react'
import threads from '../assets/threads.png'
import podium from '../assets/podium.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const categories = useSelector((state) => state.categories)

  return (
    <div className='flex flex-col gap-6 w-[200px] h-full fixed p-4 border-r-[1px] border-gray-300'>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2 items-center'>
          <img src={threads} alt='' className='w-4 h-4' />
          <span>
            <Link to='/'>Threads</Link>
          </span>
        </div>
        <div className='flex gap-2 items-center'>
          <img src={podium} alt='' className='w-4 h-4' />
          <span>Leaderboards</span>
        </div>
      </div>

      <div className='flex flex-col'>
        <h2 className='text-gray-400'>CATEGORIES</h2>
        <div className='flex flex-col gap-1 p-2'>
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
