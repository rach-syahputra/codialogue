import React from 'react'
import threads from '../assets/threads.png'
import podium from '../assets/podium.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

const Sidebar = ({ activeCategory, handleActiveCategoryChange, currentPage }) => {
  const categories = useSelector((state) => state.categories)

  return (
    <div className='flex flex-col gap-6 w-[200px] h-full fixed p-4 border-r-[1px] border-gray-300'>
      <ul className='flex flex-col gap-2'>
        <li
          className={`flex gap-2 items-center select-none ${
            currentPage === 'threads' && 'font-bold'
          }`}
        >
          <img src={threads} alt='' className='w-4 h-4' />
          <span>
            <Link to='/'>Threads</Link>
          </span>
        </li>
        <li
          className={`flex gap-2 items-center select-none ${
            currentPage === 'leaderboards' && 'font-bold'
          }`}
        >
          <img src={podium} alt='' className='w-4 h-4' />
          <span>
            <Link to='/leaderboards'>Leaderboards</Link>
          </span>
        </li>
      </ul>

      {currentPage === 'threads' && (
        <div className='flex flex-col'>
          <h2 className='text-gray-400'>CATEGORIES</h2>
          <ul className='flex flex-col p-2'>
            {categories.map((category) => (
              <li
                className={`w-fit cursor-pointer px-2 py-1 rounded-sm select-none ${
                  activeCategory === category && 'bg-black text-white'
                }`}
                key={category}
                onClick={() => handleActiveCategoryChange(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

Sidebar.propTypes = {
  activeCategory: PropTypes.string,
  handleActiveCategoryChange: PropTypes.func,
  currentPage: PropTypes.string.isRequired,
}

export default Sidebar
