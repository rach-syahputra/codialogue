import React from 'react'
import PropTypes from 'prop-types'

const LeaderboardItem = ({ user, score }) => {
  return (
    <ul className='flex flex-col gap-2'>
      <li className='flex items-center h-8 justify-between'>
        <div className='flex gap-2 items-center'>
          <img src={user.avatar} alt='' className='w-7 h-7 rounded-full' />
          <span>{user.name}</span>
        </div>
        <span>{score}</span>
      </li>
    </ul>
  )
}

export const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
}

LeaderboardItem.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
}

export default LeaderboardItem
