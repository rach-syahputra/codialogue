import React from 'react'
import threads from '../assets/threads.png'
import podium from '../assets/podium.png'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const BottomMenu = ({ currentPage }) => {
  return (
    <ul className='flex md:hidden items-center justify-center gap-10 w-full p-4 fixed bottom-0 border-t-[1px] border-gray-300 bg-white'>
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
  )
}

BottomMenu.propTypes = {
  currentPage: PropTypes.string.isRequired
}

export default BottomMenu
