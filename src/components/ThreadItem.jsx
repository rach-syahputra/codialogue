import React from 'react'
import PropTypes from 'prop-types'
import arrowUp from '../assets/arrow-up.png'
import arrowDown from '../assets/arrow-down.png'
import chat from '../assets/chat.png'
import timeSince from '../utils/timeSince'
import truncateBody from '../utils/truncateBody'

const ThreadItem = ({
  id,
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  totalComments,
}) => {
  return (
    <div className='flex flex-col py-6 gap-1 border-b-[1px] border-gray-300'>
      <div className='flex items-center gap-2 text-sm'>
        <img src={owner.avatar} alt='' className='w-6 h-6 rounded-full' />
        <span>{owner.name}</span>
        <span>•</span>
        <span className='text-gray-400'>{timeSince(createdAt)}</span>
        <div className='bg-gray-300 px-2 py-1 rounded-md text-xs'>{category}</div>
      </div>

      <h1 className='font-bold text-xl cursor-pointer'>{title}</h1>

      <p>{truncateBody(body, 200)}</p>

      <div className='flex gap-4'>
        <div className='flex gap-1 items-center'>
          <img src={arrowUp} alt='' className='w-4 h-4' />
          <span className='text-sm'>{upVotesBy?.length}</span>
        </div>
        <div className='flex gap-1 items-center'>
          <img src={arrowDown} alt='' className='w-4 h-4' />
          <span className='text-sm'>{downVotesBy?.length}</span>
        </div>
        <div className='flex gap-1 items-center cursor-pointer'>
          <img src={chat} alt='' className='w-5 h-5' />
          <span className='text-sm'>{totalComments}</span>
        </div>
      </div>
    </div>
  )
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number,
}

ThreadItem.propTypes = {
  ...threadItemShape,
}

export default ThreadItem
