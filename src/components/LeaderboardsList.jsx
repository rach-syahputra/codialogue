import React from 'react'
import PropTypes from 'prop-types'
import LeaderboardItem from './LeaderboardItem'

const LeaderboardsList = ({ leaderboards }) => {
  return (
    <div className='flex flex-col gap-4 ml-[200px] px-8 py-4'>
      <h1 className='text-lg font-bold'>Active User Standings</h1>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between text-gray-500'>
          <span>User</span>
          <span>Score</span>
        </div>
        {leaderboards.map((leaderboard) => (
          <LeaderboardItem {...leaderboard} key={leaderboard.user.id} />
        ))}
      </div>
    </div>
  )
}

export const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
}

const leaderboardShape = {
  user: PropTypes.shape(userShape).isRequired,
}

LeaderboardsList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardShape)).isRequired,
}

export default LeaderboardsList
